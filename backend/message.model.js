import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { 
    timestamps: true 
});

const messageModel = model("Message", messageSchema)
export default messageModel
