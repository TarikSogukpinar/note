import express from "express";
import {
  AddNote,
  getAllNotes,
  getNoteById,
  deleteNote,
  updateNote,
} from "../controllers/noteController.js";
import { authUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addNote", authUser, AddNote);
router.get("/getAllNotes", getAllNotes);
router.get("/getNoteById/:id", getNoteById);
router.put("/updateNote", updateNote);
router.delete("/deleteNote", deleteNote);

export default router;
