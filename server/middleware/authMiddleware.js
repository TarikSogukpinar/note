import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const token = req.cookies.loginCookie;
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifiedUser) {
      return res.status(400).json({ msg: "User Not Found" });
    }
    req.verifiedUser = verifiedUser;
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

export { authUser };