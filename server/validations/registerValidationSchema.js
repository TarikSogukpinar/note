import Joi from "joi";

const registerValidationSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(5).max(255),
    lastName: Joi.string().required().min(5).max(255),
    email: Joi.string().email().required().min(5).max(255),
    password: Joi.string().required().min(5).max(255),
  });
  return schema.validate(body);
};

export default registerValidationSchema;
