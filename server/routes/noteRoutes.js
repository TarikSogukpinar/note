import express from "express";
import { getAllNotes, AddNote } from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addNote", AddNote);
router.get("/getAllNotes", protect, getAllNotes);

export default router;
