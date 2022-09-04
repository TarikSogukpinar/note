import Joi from "joi";

const registerValidationSchema = Joi.object({
  firstName: Joi.string().required().min(5).max(255),
  lastName: Joi.string().required().min(5).max(255),
  email: Joi.string().email().required().min(5).max(255),
  password: Joi.string().required().min(5).max(255),
});

export default registerValidationSchema;
