import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import loginValidationSchema from "../validations/loginValidationSchema.js";
import registerValidationSchema from "../validations/registerValidationSchema.js";
import sanitize from "mongo-sanitize";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = sanitize(req.body);
  let user = await User.findOne({ email });

  const loginValidation = await loginValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (loginValidation) {
    
    if (user) {
      if (await user.matchPassword(password)) {
        const payload = { id: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });

        res.json({
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar,
          token: token,
        });
      }
    } else {
      res.status(401);
      res.json({ message: "Invalid credentials" });
    }
  }
});

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

export { registerUser, loginUser };
