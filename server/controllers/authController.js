import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import loginValidationSchema from "../validations/loginValidationSchema.js";
import registerValidationSchema from "../validations/registerValidationSchema.js";
import sanitize from "mongo-sanitize";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = sanitize(req.body);
  const registerValidation = await registerValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (registerValidation) {
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const user = new User({
          firstName,
          lastName,
          email,
          password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered, Please login now." });
          }
        });
      }
    });
  }
});

export { registerUser };
