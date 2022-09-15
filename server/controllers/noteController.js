import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import sanitize from "mongo-sanitize";
import noteValidationSchema from "../validations/noteValidationSchema.js";
import CryptoJS from "crypto-js";

const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({ user_id: req.user.id });
    // console.log(notes);

    const decryptNote = (note) => {
      return {
        _id: note._id,
        title: CryptoJS.AES.decrypt(
          note.title,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
        content: CryptoJS.AES.decrypt(
          note.content,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
        category: CryptoJS.AES.decrypt(
          note.category,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
      };
    };

    const result = notes.map((note) => decryptNote(note));
    // console.log(result);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getNote = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    const decryptNote = (note) => {
      return {
        _id: note._id,
        title: CryptoJS.AES.decrypt(
          note.title,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
        content: CryptoJS.AES.decrypt(
          note.content,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
        category: CryptoJS.AES.decrypt(
          note.category,
          process.env.CRYPTO_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8),
      };
    };
    // console.log(decryptNote(note))

    // const result = notes.map((note) => decryptNote(note));
    // console.log(result);
    res.json(decryptNote(note));
  } catch (error) {
    console.log(error.message);
    // return res.status(500).json({ msg: error.message });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  const { title, content, category } = sanitize(req.body);

  const addNoteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (addNoteValidation) {
    const newNote = new Note({
      title: CryptoJS.AES.encrypt(
        title,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      content: CryptoJS.AES.encrypt(
        content,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      category: CryptoJS.AES.encrypt(
        category,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      user_id: req.user.id,
    });
    // console.log(newNote);

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

    const encryptNote = (updateNote) => {
      return {
        user_id: req.user.id,
        title: CryptoJS.AES.encrypt(
          title,
          process.env.CRYPTO_SECRET_KEY
        ).toString(),
        content: CryptoJS.AES.encrypt(
          content,
          process.env.CRYPTO_SECRET_KEY
        ).toString(),
        category: CryptoJS.AES.encrypt(
          category,
          process.env.CRYPTO_SECRET_KEY
        ).toString(),
      };
    };
    console.log(encryptNote(updateNote));
    // const result = updateNote.map((note) => encryptNote(updateNote));
    // console.log(encryptNote(updateNote));

    res.status(200);

    res.json(encryptNote(updateNote));

    // res.json({ message: "Note updated!" });
  } catch (error) {
    console.log(error.message);
    // return res.status(500).json({ message: error.message });
  }
});

export { AddNote, getNotes, getNote, deleteNote, updateNote };
