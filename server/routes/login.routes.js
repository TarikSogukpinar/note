import { Router } from "express";
import loginController from "../controllers/auth/loginController.js";
import logoutController from "../controllers/auth/logoutController.js";

const router = Router();

router.post("/login", loginController.loginUser);
router.get("/logout", logoutController.logoutUser);

export default router;
