import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token)
    return res.status(403).json({ message: "Invalid Authentication" });
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (error, user) => {
      if (error)
        return res.status(400).json({ message: "Authorization not valid." });

      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};


export { authUser };
