import Contact from "../models/contactModel.js";
import asyncHandler from "express-async-handler";
import contactValidationSchema from "../validations/contactValidationSchema.js";

const createContact = asyncHandler(async (req, res) => {
  try {
    const { error } = contactValidationSchema(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const { title, description, email, github, linkedin } = req.body;

    const newContact = new Contact({
      title,
      description,
      email,
      github,
      linkedin,
    });

    await newContact.save();

    res
      .status(201)
      .json({ error: false, message: "New Contact Form Created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

export default { createContact };
