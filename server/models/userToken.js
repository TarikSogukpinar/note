import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  token: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 86400 //30 days
  }
});

const UserToken = mongoose.model("UserToken", userTokenSchema);

export default UserToken;
