import bcrypt from "bcryptjs";
import loginValidationSchema from "../../validations/loginValidationSchema.js";
import generateToken from "../../helpers/tokens/generateToken.js";
import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";

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

    const { accessToken, refreshToken } = await generateToken(user);

    console.log('here')
    console.log(refreshToken)
   
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", //cross-site cookie
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      error: false,
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      token: accessToken,

      message: "Login Success"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

export default { loginUser };
