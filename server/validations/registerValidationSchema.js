import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const registerValidationSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(5).max(255),
    lastName: Joi.string().required().min(5).max(255),
    email: Joi.string().email().required().min(5).max(255),
    password: passwordComplexity({
      min: 5,
      max: 250,
      lowerCase: 1,
      upperCase: 1,
      requirementCount: 2
    })
  });
  return schema.validate(body);
};

export default registerValidationSchema;
