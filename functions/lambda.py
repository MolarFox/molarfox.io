import os
import re
import json
import html
import boto3

from botocore.exceptions import ClientError, ParamValidationError
from logging import getLogger
from typing import Optional

LOG = getLogger("contact_form_lambda")
LOG.setLevel(20)

EMAIL_REGEX = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
MAX_EMAIL_LENGTH = 128
MAX_MESSAGE_LENGTH = 4096

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
        
    email = raw_body.get("email", "").strip()
    message = html.escape(raw_body.get("message", ""))
    
    if (validation_resp := validate_input(email, message)):
        return validation_resp
    
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
            "statusCode": 400,
            "body": json.dumps({
                "error": "Invalid request body",
                "detail": f"Email must be fewer than {MAX_EMAIL_LENGTH} characters in length"
            })
        }
        
    if len(message) > MAX_MESSAGE_LENGTH:
        return {
            "statusCode": 400,
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
    

def send_email_ses(email, message) -> str:
    ses = boto3.client('sesv2')
    msg = f"--From: {email} --<br><br>{message}".replace("\r", "").replace("\n", "<br>\n")
    
    resp = ses.send_email(
        FromEmailAddress=os.environ["SOURCE_EMAIL"],
        ReplyToAddresses=[email],
        Destination={"ToAddresses": [os.environ["DESTINATION_EMAIL"]]},
        Content={
            "Simple": {
                "Subject": {"Data": f"[contact_form] molarfox.io - {email}"},
                "Body": {"Text": {"Data": msg}, "Html": {"Data": msg}}
            }
        }
    )
    return resp["MessageId"]
    