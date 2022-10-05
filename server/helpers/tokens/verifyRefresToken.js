import jwt from "jsonwebtoken";
import UserToken from "../../models/UserToken.js";

const verifyRefreshToken = (refreshToken) => {
  const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

  return new Promise((resolve, reject) => {
    UserToken.findOne({ token: refreshToken }, (doc) => {
      if (!doc) return reject({ message: "Invalid refresh token" });

      jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
        if (err) return reject({ message: "Invalid refresh token" });
        resolve({
          tokenDetails,
          message: "Valid refresh token",
        });
      });
    });
  });
};
export default verifyRefreshToken;
