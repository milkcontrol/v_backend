import express from 'express';
import { PolicyController } from '../../controllers/policy.controller';
import authMiddleware from '../../middlewares/auth.middleware';
import { vPolicy } from '../../validators';
import multer from "multer";
import {storageUser} from "../../config/MulterImage";

const router = express.Router();

const upload = multer({storage: storageUser});

router.post('/', upload.none(), authMiddleware(), vPolicy, PolicyController.create);
router.get('/', authMiddleware(), PolicyController.getList);
router.get('/:type', PolicyController.getByType);
router.get('/:id', authMiddleware(), PolicyController.getById);

export default router;
