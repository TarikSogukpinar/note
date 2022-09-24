import { Router } from "express";
import {
  AddNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote
} from "../controllers/noteController.js";
import { authUser } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/addNote", authUser, AddNote);
router.get("/getNotes", authUser, getNotes);
router.get("/getNote/:id", authUser, getNote);
router.put("/updateNote/:id", authUser, updateNote);
router.delete("/deleteNote/:id", authUser, deleteNote);

export default router;
