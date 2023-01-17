import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  try {
    const payload = { userId: user._id, roles: user.roles };
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
      { expiresIn: "3d" }
    );
    return Promise.resolve(accessToken);
  } catch (error) {
    return Promise.reject(error);
  }
};
export default generateToken;
