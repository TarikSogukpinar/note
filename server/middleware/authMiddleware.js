import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ message: "Invalid Authentication" });
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error)
        return res.status(400).json({ message: "Authorization not valid." });

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export { authUser };
