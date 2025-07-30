import Joi from "joi";

const messageValidator = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required().email(),
    message: Joi.string().trim().required(),
})

export default messageValidator