import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import sanitize from "mongo-sanitize";
import noteValidationSchema from "../validations/noteValidationSchema.js";
import CryptoJS from "crypto-js";

const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({ user_id: req.user.id });

    const bytes = await CryptoJS.AES.decrypt(notes, "secretkey123").toString()
    //console.log(bytes);
    const decryptedData = await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // console.log(decryptedData);

    // // let ciphertext  = CryptoJS.AES.decrypt(notes.title,"secretkey123")
    // // var decryptedData = JSON.stringify(ciphertext.toString(CryptoJS.enc.Utf8));
    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getNote = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  const { title, content, category } = sanitize(req.body);

  const addNoteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (addNoteValidation) {
    const newNote = new Note({
      title: CryptoJS.AES.encrypt(title, "secret key 123").toString(),
      content: CryptoJS.AES.encrypt(content, "secret key 123").toString(),
      category: CryptoJS.AES.encrypt(category, "secret key 123").toString(),
      user_id: req.user.id,
    });
    console.log(newNote);

    await newNote.save();

    res.status(201).json({ message: "Note created" });
  } else {
    return res.status(500).json({ message: error.message });
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  try {
    const { title, content, category } = req.body;
    await Note.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200);
    res.json({ message: "Note updated!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export { AddNote, getNotes, getNote, deleteNote, updateNote };
