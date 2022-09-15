import mongoose from "mongoose";
import moment from "moment";

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
  },
  {
    timestamps: true,
  }
);



const Note = mongoose.model("Note", noteSchema);

export default Note;
