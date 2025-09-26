import mongoose, { Schema, model } from 'mongoose'

export interface IMessage {
  name: string
  email: string
  message: string
}

const messageSchema = new Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const messageModel = model<IMessage>('Message', messageSchema)
export default messageModel
