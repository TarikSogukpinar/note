import bcrypt from "bcryptjs";
import loginValidationSchema from "../../validations/loginValidationSchema.js";
import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../../helpers/tokens/generateToken.js";

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { error } = loginValidationSchema(req.body);

    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Email or Password is wrong!" });
    }

    const verifiedPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ error: true, message: "Email or Password is wrong!" });
    }

    const token = generateToken(user);

    const cookieOptions = {
      httpOnly: true,
      secure: false,
      sameSite: "None", //cross-site cookie
      maxAge: 60 * 60 * 24 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    res
      .status(200)
      .json({ data: user, message: "Login Succesfully!", tokens: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

export default { loginUser };
