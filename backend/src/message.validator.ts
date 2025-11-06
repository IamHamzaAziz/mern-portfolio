import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'
import { IMessage } from './message.model.js'

const schema = Joi.object<IMessage>({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required().email(),
  message: Joi.string().trim().required(),
})

// middleware function
export const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = schema.validate(req.body)

  if (error) {
    return res.status(400).json(error.details[0].message)
  }

  req.body = value

  next()
}
