import express from 'express';
import {CurrencyController} from '../../controllers/Currency.controller';

const router = express.Router();

router.post('/coins-to-diamonds', CurrencyController.coinsToDiamonds);
router.post('/dones-to-coins', CurrencyController.donesToCoins);

export default router;
