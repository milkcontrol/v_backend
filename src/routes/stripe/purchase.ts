import express from 'express';
import {StripeController} from '../../controllers/Stripe.controller';

const router = express.Router();

router.post('/dones', StripeController.purchaseDones);

export default router;
