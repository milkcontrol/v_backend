import express from 'express';
import cards from './cards';
import purchase from './purchase';

const router = express.Router();

router.use('/cards', cards);
router.use('/purchases', purchase);

export default router;
