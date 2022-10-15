import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const newPasswordValidationSchema = (body) => {
  const schema = Joi.object({
    password: passwordComplexity({
      min: 5,
      max: 250,
      lowerCase: 1,
      upperCase: 1,
      requirementCount: 2,
    }).label("Password"),
  });
  return schema.validate(body);
};

export default newPasswordValidationSchema;
