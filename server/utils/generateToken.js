import jwt from "jsonwebtoken";

const generateToken = (id) => {
  //const payload = { id: user._id };
  return jwt.sign(id, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default generateToken;
