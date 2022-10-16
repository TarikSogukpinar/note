import bcrypt from "bcryptjs";
import loginValidationSchema from "../../validations/loginValidationSchema.js";
import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import createToken from "../../helpers/tokens/createToken.js";

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

    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: false,
      secure: true,
      sameSite: "None", //cross-site cookie
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.status(200).json({
      error: false,
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      roles: user.roles,
      token: token,
      message: "Login Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("jwt", { domain: "localhost", path: "/" });
    return res.status(200).json({ message: "Logout success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

export default { loginUser, logoutUser };
