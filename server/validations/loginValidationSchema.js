import Joi from "joi";

const loginValidationSchema = (body) => {
  const schema = Joi.object({
    email: Joi.string().required().email().min(5).max(255).label("Email"),
    password: Joi.string().required().min(5).max(255).label("Password")
  });
  return schema.validate(body);
};

export default loginValidationSchema;
