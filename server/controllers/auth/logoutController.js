import asyncHandler from "express-async-handler";

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token", { domain: "localhost", path: "/" });
    return res.status(200).json({ message: "Logout success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

export default { logoutUser };
