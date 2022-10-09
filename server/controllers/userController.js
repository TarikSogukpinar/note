import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

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

// const forgotPassword = asyncHandler(async(req,res) =>{
//   const {email} = req.body;
//   try {
//     const oldUser = await User.findOne({email})
//     if (!oldUser) {
//       return res.json({ message: "User Not Exists!" });
//     }

//   } catch (error) {

//   }
// })

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.status(200).json("account deleted" + user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
});

export default { deleteUser, getAllUser, updateUser, getUser, getUserById };
