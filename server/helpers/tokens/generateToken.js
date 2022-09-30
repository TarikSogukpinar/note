import jwt from "jsonwebtoken";
import UserToken from "../../models/userToken.js"

// const generateToken = async (user) => {
//   try {
//       const payload = { _id: user._id, roles: user.roles };
//       const accessToken = jwt.sign(
//           payload,
//           process.env.ACCESS_TOKEN_PRIVATE_KEY,
//           { expiresIn: "14m" }
//       );
//       const refreshToken = jwt.sign(
//           payload,
//           process.env.REFRESH_TOKEN_PRIVATE_KEY,
//           { expiresIn: "1d" }
//       );
//       const userToken = await UserToken.findOne({ userId: user._id });
//       if (userToken) await userToken.remove();

//       //refresh tokeni o an login olan kullanicinin id'si ile eslestirip kaydetmek icin
//       await new UserToken({ userId: user._id, token: refreshToken }).save();
//       return Promise.resolve({ accessToken, refreshToken });
//   } catch (error) {
//       return Promise.reject(error);
//   }
// };

const generateToken = (id) => {
  //const payload = { id: user._id };
  return jwt.sign(id, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
    expiresIn: "1d"
  });
  
};

export default generateToken;
