import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import moment from "moment";



const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Please provide a email !"],
      unique: true,
      lowercase: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide valid email"
      ]
    },
    password: { type: String, required: true },
    roles: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

    createdAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a")
    }
  },
  {
    versionKey: false
  }
);

const User = new mongoose.model("User", userSchema);

export default User;
