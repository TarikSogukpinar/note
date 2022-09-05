import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";
import sanitize from "mongo-sanitize";
import noteValidationSchema from "../validations/noteValidationSchema.js";

const getAllNotes = asyncHandler(async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const pageSize = 20;
  const count = await Note.countDocuments();

  const allCars = await Note.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort("-createdAt");
  res.json({
    users: allCars,
    page,
    pages: Math.ceil(count / pageSize),
    total: count,
  });
});

const AddNote = asyncHandler(async (req, res) => {
  const noteValidation = await noteValidationSchema.validateAsync(
    sanitize(req.body)
  );

  if (noteValidation) {
    const note = new Note({
    //   user: req.user._id,
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
    });
    const addNote = await note.save();
    res.status(201).json(addNote);
  }
 
});

export { getAllNotes, AddNote };
