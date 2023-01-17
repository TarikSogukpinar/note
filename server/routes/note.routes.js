import { Router } from "express";
import noteController from "../controllers/noteController.js";
import { verifyToken } from "../middleware/verify.js";

const router = Router();

router.post("/addNote", verifyToken, noteController.AddNote);
router.get("/getNotes", verifyToken, noteController.getNotes);
router.get("/getNote/:id", verifyToken, noteController.getNote);
router.put("/updateNote/:id", verifyToken, noteController.updateNote);
router.delete("/deleteNote/:id", verifyToken, noteController.deleteNote);

export default router;
