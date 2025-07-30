import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import messageModel from "./message.model.js";
import nodemailer from "nodemailer";
import messageValidator from "./message.validator.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["POST"]
};

app.use(cors(corsOptions));

app.use(express.json());

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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2E86C1;">New Message from Portfolio Contact Form</h2>
            <p><strong>From:</strong> ${value.name} (<a href="mailto:${value.email}">${value.email}</a>)</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #2E86C1;">${value.message}</p>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #777;">This message was sent from your portfolio contact form.</p>
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
