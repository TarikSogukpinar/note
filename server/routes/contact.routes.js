import { Router } from "express";
import contactController from "../controllers/contactController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post("/newContact", contactController.createContact);

export default router;
