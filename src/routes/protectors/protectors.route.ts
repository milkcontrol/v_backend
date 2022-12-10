import express from 'express';
import {ProtectorsController} from "../../controllers/protector.controller";

const router = express.Router();

router.get('/', ProtectorsController.list);

export default router;
