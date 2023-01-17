import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(403).json({ message: "Invalid Authentication" });
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const verifyRoles = (roleName) => {
  return (req, res, next) => {
    if (req.user.roles === roleName) {
      next();
    } else {
      return res
        .status(500)
        .json({ error: true, message: "You are not authorized!" });
    }
  };
};

export { verifyToken, verifyRoles };
