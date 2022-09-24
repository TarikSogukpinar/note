import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.status(200).json("account deleted" + user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { deleteUser };
