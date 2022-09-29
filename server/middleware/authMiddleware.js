import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authUser = (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });
      req.user = decoded._id;
      req.roles = decoded.roles;
      next();
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// const authUser = asyncHandler(async (req, res, next) => {
//   try {
//     const token = req.header("Authorization");
//     if (!token)
//       return res.status(400).json({ message: "Invalid Authentication" });
//     jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (error, user) => {
//       if (error)
//         return res.status(400).json({ message: "Authorization not valid." });

//       req.user = user;
//       next();
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: true, message: error.message });
//   }
// });

export { authUser };
