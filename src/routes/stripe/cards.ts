import express from 'express';
import {StripeController} from '../../controllers/Stripe.controller';

const router = express.Router();

router.post('/new', StripeController.addCard);
router.get('/', StripeController.cardList);
router.delete('/:id', StripeController.deleteCard);
router.post('/createToken', StripeController.createCardToken);

export default router;
