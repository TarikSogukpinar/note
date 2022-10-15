import { Router } from "express";
import userController from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = Router();

router.delete("/delete/:id", verifyToken, userController.deleteUser);
router.put("/updateUser/:id", verifyToken, userController.updateUser);
router.get("/getUser", verifyToken, userController.getUser);
router.get("/getUserById/:id", verifyToken, userController.getUserById);
router.get("/getAllUser", verifyToken, userController.getAllUser);
router.post("/reset-password", userController.passwordReset);
router.get("/reset-password/:id/:token", userController.newPasswordGet);
router.post("/reset-password/:id/:token", userController.newPasswordPost);

export default router;
