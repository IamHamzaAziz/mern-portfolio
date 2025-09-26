import Joi from 'joi'
import { IMessage } from './message.model.js'

const messageValidator = Joi.object<IMessage>({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required().email(),
  message: Joi.string().trim().required(),
})

export default messageValidator
