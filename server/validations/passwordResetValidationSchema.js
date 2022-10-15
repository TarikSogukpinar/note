import Joi from "joi";

const passwordResetValidationSchema = (body) => {
  const schema = Joi.object({
    email: Joi.string().required().email().min(5).max(255).label("Email"),
  });
  return schema.validate(body);
};

export default passwordResetValidationSchema;
