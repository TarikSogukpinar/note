import bcrypt from "bcryptjs";
import loginValidationSchema from "../../validations/loginValidationSchema.js";
import generateAccessToken from "../../helpers/tokens/generateToken.js";
import User from "../../models/userModel.js";

const loginUser = async (req, res) => {
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
    const { accessToken, refreshToken } = await generateAccessToken(user);

    res.status(200).json({
      error: false,
      accessToken,
      refreshToken,
      message: "Logged in successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

export default { loginUser };
