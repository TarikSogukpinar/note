import { Router } from "express";
import userController from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = Router();

router.delete("/delete/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);
router.get("/getUserById", verifyToken, userController.getUserById);
router.get("/getAllUser", userController.getAllUser);

export default router;
