import Joi from "joi";

const noteValidationSchema = Joi.object({
  title: Joi.string().required().min(5).max(255),
  content: Joi.string().required().min(5).max(255),
  category: Joi.string().required().min(5).max(255),
//   user: Joi.string().required().min(5).max(255),
});

export default noteValidationSchema;
