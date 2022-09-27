import Joi from "joi";

const noteValidationSchema = (body) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(255),
    content: Joi.string().required().min(5).max(255),
    category: Joi.string().required().min(5).max(255)
  });
  return schema.validate(body);
};

export default noteValidationSchema;
