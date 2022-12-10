import authMiddleware from "../middlewares/auth.middleware";
import {vApprove} from "../validators";
import {AdminController} from "../controllers/admin.controller";
import express from "express";

const router = express.Router();

router.patch('/approve',vApprove, AdminController.approveUser);

export default router;
