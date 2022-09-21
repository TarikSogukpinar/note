import Joi from "joi";

const loginValidationSchema = Joi.object({
  email: Joi.string().email().required().min(5).max(255),
  password: Joi.string().required().min(5).max(255),
});

export default loginValidationSchema;
