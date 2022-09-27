import jwt from "jsonwebtoken";
import UserToken from "../../models/userToken.js";

const generateToken = (id) => {
  //const payload = { id: user._id };
  return jwt.sign(id, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: "1d",
  });
};

export default generateToken;
