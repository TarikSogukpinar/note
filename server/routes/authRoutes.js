import express from "express";
import {
	registerUser,
	loginUser,
	deleteUser,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);

export default router;
