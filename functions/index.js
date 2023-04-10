const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const aws = require('@aws-sdk/client-ses');

const app = express();
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const ORIGINS = ['https://molarfox.io', 'https://www.molarfox.io'];
const MAX_EMAIL_LENGTH = 128;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL = 'contact_form@molarfox.io';
const FROM_EMAIL = 'mailbot@molarfox.io';
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;


const nodemailer = require("nodemailer");
let testAccount = await nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!ORIGINS.includes(origin)) {
        return callback(
          new Error(`Not allowed by CORS. Origin must be: ${ORIGINS.join(' or ')}`)
        );
      }

      return callback(null, true);
    },
  })
);
app.options('*', cors());

app.post('/message', async (req, res) => {
  try {
    const email = DOMPurify.sanitize(req.body.email);
    const message = DOMPurify.sanitize(req.body.message);

    // Validate email request
    if (!email || !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    // Send email using nodemailer
    let resp = await transporter.sendMail({
      from: `contact_form molarfox.io <${FROM_EMAIL}>`,
      to: EMAIL,
      subject: "[contact_form] molarfox.io visitor message",
      text: `From: ${email}\n\n${message}`,
    })

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Rejected', error);
    return res.status(500).json({ error: 'Message rejected' });
  }
});

module.exports.handler = serverless(app);
