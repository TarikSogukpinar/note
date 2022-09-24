import { Router } from "express";
import { deleteUser } from "../controllers/noteController.js";
const router = Router();

router.delete("/delete/:id", deleteUser);

export default router;
