import express from 'express';
import {GenderTypeController} from "../../controllers/genderType.controller";

const router = express.Router();

router.get('/', GenderTypeController.list);

export default router;
