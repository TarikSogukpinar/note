import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import noteValidationSchema from "../validations/noteValidationSchema.js";
import CryptoJS from "crypto-js";

const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({ user_id: req.user.id });

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

    res.json(result);
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
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

    res.json(decryptNote(note));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  try {
    const { error } = noteValidationSchema(req.body);

    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const { title, content, category } = req.body;

    const newNote = new Note({
      title: CryptoJS.AES.encrypt(
        title,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      content: CryptoJS.AES.encrypt(
        content,
        process.env.CRYPTO_SECRET_KEY
      ).toString(),
      category: CryptoJS.AES.encrypt(category,process.env.CRYPTO_SECRET_KEY).toString(),
      user_id: req.user.id,
    });

    await newNote.save();

    res.status(201).json({ message: "Note created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
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
      },
      { new: true }
    );

    res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
});

export default { AddNote, getNotes, getNote, deleteNote, updateNote };
