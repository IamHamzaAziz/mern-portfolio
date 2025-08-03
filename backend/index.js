import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import messageModel from "./message.model.js";
import nodemailer from "nodemailer";
import messageValidator from "./message.validator.js";
import { rateLimit } from 'express-rate-limit'

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["POST"]
};

app.use(cors(corsOptions));

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limiting each IP to 100 requests per windowMs
  message: "Too many requests from this IP, try again after 15 minutes"
})
app.use(limiter)

mongoose.connect(process.env.MONGODB_URI);

app.post("/api/contact-message", async (req, res) => {
  try {
    const { error, value } = messageValidator.validate(req.body);

    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    await messageModel.create({
      name: value.name,
      email: value.email,
      message: value.message,
    });

    const transporter = nodemailer.createTransport({
      service: process.env.SENDER_EMAIL_SERVICE,
      host: process.env.SENDER_EMAIL_HOST,
      tls: {
        ciphers: "SSLv3",
      },
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: {
        address: process.env.SENDER_EMAIL,
      },
      to: [process.env.RECEIVER_EMAIL],
      subject: "New Message From Portfolio Contact Form",
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">New Message from Portfolio</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <!-- Sender Info -->
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px; font-size: 15px; color: #4a5568;">
                <strong style="display: inline-block; width: 60px;">Name:</strong> ${value.name}
              </p>
              <p style="margin: 0; font-size: 15px; color: #4a5568;">
                <strong style="display: inline-block; width: 60px;">Email:</strong> 
                <a href="mailto:${value.email}" style="color: #667eea; text-decoration: none;">${value.email}</a>
              </p>
            </div>
            
            <!-- Message -->
            <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #4a5568; line-height: 1.6; white-space: pre-line;">${value.message}</p>
            </div>
            
            <!-- Action Button -->
            <div style="text-align: center;">
              <a href="mailto:${value.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 500; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                Reply to ${value.name}
              </a>
            </div>
          </div>
        </div>
    `,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    res.json("Your message is sent");
  } catch (error) {
    res.status(500).json("Cannot send message");
  }
});

app.listen(process.env.PORT);
