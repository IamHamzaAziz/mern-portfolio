import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import messageModel from './message.model.js'
import nodemailer from 'nodemailer'
import { rateLimit } from 'express-rate-limit'
import { validateMessage } from './message.validator.js'
import helmet from 'helmet'

dotenv.config()

const app = express()

app.use(helmet())

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['POST'],
}
app.use(cors(corsOptions))

app.use(express.json())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limiting each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, try again after 15 minutes',
})
app.use(limiter)

mongoose.connect(process.env.MONGODB_URI as string)

app.post('/api/contact-message', validateMessage, async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body

    await messageModel.create({ name, email, message })

    const transporter = nodemailer.createTransport({
      service: process.env.SENDER_EMAIL_SERVICE,
      host: process.env.SENDER_EMAIL_HOST,
      tls: {
        ciphers: 'SSLv3',
      },
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    })

    var mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env.SENDER_EMAIL as string,
      },
      to: [process.env.RECEIVER_EMAIL as string],
      subject: 'New Message From Portfolio Contact Form',
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
                <strong style="display: inline-block; width: 60px;">Name:</strong> ${name}
              </p>
              <p style="margin: 0; font-size: 15px; color: #4a5568;">
                <strong style="display: inline-block; width: 60px;">Email:</strong> 
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <!-- Message -->
            <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #4a5568; line-height: 1.6; white-space: pre-line;">${message}</p>
            </div>
            
            <!-- Action Button -->
            <div style="text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 500; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
    `,
    }

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          resolve(info)
        }
      })
    })

    res.json('Your message is sent')
  } catch (error) {
    res.status(500).json('Cannot send message')
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})
