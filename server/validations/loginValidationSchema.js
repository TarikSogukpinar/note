import Joi from "joi";

const loginValidationSchema = (body) => {
  const schema = Joi.object({
    email: Joi.string().required().email().min(5).max(255),
    password: Joi.string().required().min(5).max(255)
  });
  return schema.validateAsync(body);
};

export default loginValidationSchema;
