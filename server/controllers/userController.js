import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import UserToken from "../models/userToken.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../helpers/sendEmail.js/sendEmail.js";
import passwordResetValidationSchema from "../validations/passwordResetValidationSchema.js";
import newPasswordValidationSchema from "../validations/newPasswordValidationSchema.js";

const getAllUser = asyncHandler(async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const pageSize = 20;
  const count = await User.countDocuments();

  const getAllUser = await User.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort("-createdAt");
  res.json({
    user: getAllUser,
    page,
    page: Math.ceil(count / pageSize),
    total: count,
  });
});

const getUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const user = await User.find({ _id: req.user.id });

    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
});

const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        email,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
});

// send password link
const passwordReset = asyncHandler(async (req, res) => {
  try {
    const { error } = passwordResetValidationSchema(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .send({ message: "User with given email does not exist!" });
    }

    const secret = process.env.ACCESS_TOKEN_PRIVATE_KEY + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "5m",
    });
    const url = `http://localhost:3000/password-reset/${user._id}/${token}/`;
    await sendEmail(user.email, "Password Reset", url);

    res.status(200).send({
      error: false,
      message: "Password reset link sent to your email account",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
});

//set new password get

const newPasswordGet = asyncHandler(async (req, res) => {
  const { id, token } = req.params;

  const { error } = newPasswordValidationSchema(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(400).send({ message: "User Not Exists!!" });
  }

  const secret = process.env.ACCESS_TOKEN_PRIVATE_KEY + user.password;
  try {
    const verify = jwt.verify(token, secret);
    return res.json({ message: "Verified!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Not Verified!" });
  }
});

//set new password post

const newPasswordPost = asyncHandler(async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.json({ status: "User Not Exists!" });
  }
  const secret = process.env.ACCESS_TOKEN_PRIVATE_KEY + user.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
  } catch (error) {
    console.log(error);
    res.json({ status: "Someting Went Wrong!" });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  // const { id } = req.body;
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account Deleted" + user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
});

export default {
  deleteUser,
  getAllUser,
  updateUser,
  getUser,
  getUserById,
  passwordReset,
  newPasswordGet,
  newPasswordPost,
};
