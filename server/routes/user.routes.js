import { Router } from "express";
import userController from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = Router();

router.delete("/delete/:id", verifyToken, userController.deleteUser);
router.put("/updateUser/:id", verifyToken, userController.updateUser);
router.get("/getUser", verifyToken, userController.getUser);
router.get("/getUserById/:id", verifyToken, userController.getUserById);
router.get("/getAllUser", verifyToken, userController.getAllUser);

export default router;
