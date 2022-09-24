import { Router } from "express";
import registerController from "../controllers/auth/registerController.js";

const router = Router();

router.post("/register", registerController.registerUser);

export default router;
