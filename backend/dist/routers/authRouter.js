import express from "express";
import authControllers from "../controllers/authController.js";
const router = express.Router();
//Render login page
router.get("/", authControllers.renderLoginPage);
export default router;
//# sourceMappingURL=authRouter.js.map