import express from 'express';
import {BloodyTypeController} from "../../controllers/bloodType.controller";

const router = express.Router();

router.get('/', BloodyTypeController.list);

export default router;
