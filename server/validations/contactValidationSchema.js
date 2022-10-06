import Joi from "joi";

const contactValidationSchema = (body) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(255).label("Title"),
    description: Joi.string().required().min(5).max(255).label("Description"),
    email: Joi.string().required().email().min(5).max(255).label("Email"),
    github: Joi.string().min(5).max(255).label("Github"),
    linkedin: Joi.string().min(5).max(255).label("Linkedin"),
  });
  return schema.validate(body);
};

export default contactValidationSchema;