import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import registerValidationSchema from "../../validations/registerValidationSchema.js";
import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { error } = registerValidationSchema(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, email already exist",
      });
    }
    const saltPassword = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(req.body.password, saltPassword);

    await new User({ ...req.body, password: hashPassword }).save();

    res.status(201).json({
      error: false,
      message: "Account created sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

export default { registerUser };
