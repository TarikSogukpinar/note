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
    return res.status(500).json({ message: error });
  }
});

const AddNote = asyncHandler(async (req, res) => {
  const { title, content, category } = sanitize(req.body);

  const addNoteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (addNoteValidation) {
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

// const updateNote = asyncHandler(async (req, res) => {
//   try {
//     const { title, content, category } = req.body;
//     await Note.findById(
//       { _id: req.params.id },
//       {
//         title,
//         content,
//         category,
//       }
//     );
//     res.json({ message: "Note updated!" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// });

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

export { AddNote, getNotes, getNote, deleteNote, updateNote };
