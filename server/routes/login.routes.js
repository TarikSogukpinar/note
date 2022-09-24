import { Router } from "express";
import loginController from "../controllers/auth/loginController.js";

const router = Router();

router.post("/login", loginController.loginUser);

export default router;
