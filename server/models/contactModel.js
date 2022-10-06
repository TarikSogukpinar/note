import mongoose from "mongoose";
import moment from "moment";

const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      require: false,
    },
    linkedin: {
      type: String,
      require: false,
    },
    createdAt: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm:ss a"),
    },
  },
  {
    versionKey: false,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
