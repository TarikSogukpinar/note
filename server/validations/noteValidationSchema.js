import Joi from "joi";

const noteValidationSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  content: Joi.string().required().min(3).max(1600),
  category: Joi.string().required().min(3).max(255),
});

export default noteValidationSchema;
