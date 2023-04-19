import os
import re
import json
import html
import boto3

from datetime import datetime, timezone, timedelta
from urllib import request, parse
from botocore.exceptions import ClientError, ParamValidationError
from logging import getLogger
from typing import Optional

LOG = getLogger("contact_form_lambda")
LOG.setLevel(20)

EMAIL_REGEX = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
MAX_EMAIL_LENGTH = 128
MAX_MESSAGE_LENGTH = 4096

GOOGLE_RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

def lambda_handler(event, context) -> dict:
    try:
        raw_body = json.loads(event["body"])
    except json.decoder.JSONDecodeError:
        return {
            "statusCode": 400,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": "Body must be valid JSON"
            })
        }

    recaptcha_token = raw_body.get("recaptcha_token")

    if (token_validation_resp := validate_recaptcha(recaptcha_token, event["headers"]["x-forwarded-for"])) != True:
        return token_validation_resp
        
    email = raw_body.get("email", "").strip()
    message = html.escape(raw_body.get("message", ""))

    if (content_validation_resp := validate_input(email, message)) != True:
        return content_validation_resp
    
    try:
        send_email_ses(email, message)
    except (ClientError, ParamValidationError) as e:
        LOG.error({
            "message": "Message send failure",
            "detail": e
        })
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": "Message send failure",
                "detail": "An internal error occurred when attempting to deliver the message"
            })
        }
    return {
        "statusCode": 201,
        "body": json.dumps({
            "message": "Message was sent successfully!"
        })
    }


def validate_recaptcha(token: str, remote_ip: str) -> Optional[dict]:
    if token:
        resp = request.urlopen(
            request.Request(
                GOOGLE_RECAPTCHA_VERIFY_URL,
                method="POST",
                data=parse.urlencode({
                    "secret": os.environ["RECAPTCHA_SECRET_KEY"],
                    "response": token,
                    "remoteip": remote_ip,
                }).encode()
            )
        )

        if 200 <= resp.status < 300:
            resp_parsed = json.loads(resp.read())
            if resp_parsed["success"] is True:

                time_since_solve = datetime.fromisoformat(resp_parsed["challenge_ts"].replace("Z", "+00:00"))
                if datetime.now(timezone.utc) - time_since_solve < timedelta(minutes=3):
                    return True
    
    return {
        "statusCode": 422,
        "body": json.dumps({
            "error": "CAPTCHA Failed",
            "detail": "CAPTCHA was missing or invalid - please retry"
        })
    }




def validate_input(email, message) -> Optional[dict]:
    "Validate inputs from form"
    if not (email and message):
        return {
            "statusCode": 400,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": "Email and message must not be empty"
            })
        }
    
    if len(email) > MAX_EMAIL_LENGTH:
        return {
            "statusCode": 413,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": f"Email must be fewer than {MAX_EMAIL_LENGTH} characters in length"
            })
        }
        
    if len(message) > MAX_MESSAGE_LENGTH:
        return {
            "statusCode": 413,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": f"Message must be fewer than {MAX_MESSAGE_LENGTH} characters in length"
            })
        }
        
    if not re.fullmatch(EMAIL_REGEX, email):
        return {
            "statusCode": 400,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": "Email format is not valid"
            })
        }
    return True

def send_email_ses(email, message) -> str:
    ses = boto3.client('sesv2')
    msg = f"--From: {email} --<br><br>{message}".replace("\r", "").replace("\n", "<br>\n")
    
    resp = ses.send_email(
        FromEmailAddress=os.environ["SOURCE_EMAIL"],
        ReplyToAddresses=[email],
        Destination={"ToAddresses": [os.environ["DESTINATION_EMAIL"]]},
        Content={
            "Simple": {
                "Subject": {"Data": f"[contact_form] {email} - molarfox.io"},
                "Body": {"Text": {"Data": msg}, "Html": {"Data": msg}}
            }
        }
    )
    return resp["MessageId"]
    