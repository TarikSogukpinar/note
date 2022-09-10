import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import sanitize from "mongo-sanitize";
import noteValidationSchema from "../validations/noteValidationSchema.js";

const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({ user_id: req.user.id });
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
    return res.status(500).json({ msg: error.message });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  const { title, content, category } = sanitize(req.body);

  const addNoteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  // if (!title || !content || !category) {
  //   return res.status(500).json({ message: "All fields required" });
  // }

  if (addNoteValidation) {
    // return res.status(500).json({ message: "All fields required" });
    const newNote = new Note({
      title,
      content,
      category,
      user_id: req.user.id,
    });

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

export { AddNote, getNotes, getNote, deleteNote, updateNote };
