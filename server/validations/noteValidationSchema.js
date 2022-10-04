import Joi from "joi";

const noteValidationSchema = (body) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(255).label("Title"),
    content: Joi.string().required().min(5).max(255).label("Content"),
    category: Joi.string().required().min(5).max(255).label("Category")
  });
  return schema.validate(body);
};

export default noteValidationSchema;
