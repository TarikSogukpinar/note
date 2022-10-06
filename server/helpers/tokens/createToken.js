import jwt from "jsonwebtoken";

const maxAge = 60 * 60 * 24;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: maxAge,
  });
};

export default createToken;
