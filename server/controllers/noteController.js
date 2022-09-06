import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import sanitize from "mongo-sanitize";
import noteValidationSchema from "../validations/noteValidationSchema.js";

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ _id: req.user._id });
  // console.log(notes)
  return res.status(200).json(notes);
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
      return res.status(500).json({ message: "All fields required" });
    }

    const newNote = new Note({
      title,
      content,
      category,
      user_id: req.verifiedUser._id,
    });
    await newNote.save();
    res.status(201).json({ message: "Note created" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
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
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        content,
        category,
      }
    );
    res.json({ message: "Note updated!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

export { AddNote, getAllNotes, getNoteById, deleteNote, updateNote };
