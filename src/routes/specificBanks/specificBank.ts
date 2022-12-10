import express from 'express';
import {SpecificBanksController} from "../../controllers/specificBanks.controller";

const router = express.Router();

router.get('/', SpecificBanksController.list);

export default router;
