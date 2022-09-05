import express from "express";
import { getAllNotes, AddNote } from "../controllers/noteController.js";

const router = express.Router();

router.post("/addNote", AddNote);
router.get("/getAllNotes", getAllNotes);

export default router;
