import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import messageModel from './messageModel.js'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()


const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions))

app.options('*', cors(corsOptions))

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)


app.post('/api/contact-message', async (req, res) => {
    try {
        const { name, email, message } = req.body
    
        if (!name || !email || !message) {
            return res.status(201).json('Enter all fields')
        }
    
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(201).json('Enter a valid email')
        }
    
        const newMessage = await messageModel.create({
            name: name,
            email: email,
            message: message
        })

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
              pass: process.env.SENDER_EMAIL_PASSWORD
            }
        })

        var mailOptions = {
            from: {
                address: process.env.SENDER_EMAIL
            },
            to: [process.env.RECIEVER_EMAIL],
            subject: 'New Message From Portfolio Contact Form',
            text: `Message from ${name} having email ${email}.\n\n${message}`
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(info);
              }
            });
        })
    
        res.json('Your message is sent')
    } catch (error) {
        res.status(500).json('Cannot send message')
    }
})


app.listen(process.env.PORT)

