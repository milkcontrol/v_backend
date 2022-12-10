import express, {NextFunction, Request, Response} from 'express';
import momo from './momo';
import authMiddleware from '../../middlewares/auth.middleware';
import sequelize from '../../database/config';
import Payments from '../../models/Payments.model';
import Coins from '../../models/Coins.model';
import numberPermissionMiddleware from '../../middlewares/numberPermissoon.middleware';
import {HttpBadRequest, resOK} from '../../lib/http.exception';
import Users from '../../models/Users.model';
import CoinsTransfer from '../../models/CoinsTransfer.model';

const router = express.Router();

router.use('/momo', authMiddleware(true));
router.use('/transfer-coins', [
  authMiddleware(true),
  numberPermissionMiddleware(256),
]);
router.use('/momo', momo);
router.post(
  '/transfer-coins',
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.jwtDecode?.sub;
    const transaction = await sequelize.transaction();
    try {
      const {coins, receiverId} = req.body;
      if (!userId) {
        throw new Error('login required');
      }
      if (!Number.isSafeInteger(coins) || Number(coins) < 1) {
        throw new HttpBadRequest('invalid coins number');
      }
      if (typeof receiverId !== 'string' || userId === receiverId) {
        throw new HttpBadRequest('invalid receiverId');
      }
      // check info coins of sender
      const senderCoins = await Coins.findOne({
        where: {userId: userId, locale: 'vnd'},
      });
      if (!senderCoins || senderCoins.coins < Number(coins)) {
        throw new HttpBadRequest("you don't have enough coins");
      }
      // valid info receiver
      const receiver = await Users.findOne({where: {uuid: receiverId}});
      if (!receiver) {
        throw new HttpBadRequest('recipient does not exist');
      }
      const receiverCoins = await Coins.findOne({
        where: {userId: receiverId, locale: 'vnd'},
        transaction,
      });
      // increment
      if (receiverCoins) {
        await Coins.update(
          {coins: receiverCoins.coins + Number(coins)},
          {where: {userId: receiverId}, transaction}
        );
      } else {
        // create
        await Coins.create(
          {userId: receiverId, coins: Number(coins), locale: 'vnd'},
          {transaction}
        );
      }
      // degree coins
      await Coins.update(
        {coins: senderCoins.coins - Number(coins)},
        {where: {userId: userId}, transaction}
      );
      // history save
      await CoinsTransfer.create(
        {
          senderId: userId,
          receiverId: receiverId,
          coins: Number(coins),
        },
        {transaction}
      );
      await transaction.commit();
      res.send(resOK('successfully'));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }
);
router.post(
  '/webhooks',
  async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
      const data = req.body;
      const orderId = data.orderId;
      const userId = orderId.split('_')[0];
      // get payment stored in db
      const paymentStored = await Payments.findOne({where: {orderId: orderId}});
      if (!paymentStored) {
        return null;
      }
      const amount = Number(paymentStored.coins);
      //1. update payment state
      await Payments.update(
        {
          status: 'done',
        },
        {where: {orderId: orderId}, transaction}
      );
      //2. add coins
      const coinInfo = await Coins.findOne({
        where: {userId: userId, locale: 'vnd'},
      });
      if (coinInfo) {
        await coinInfo.update({coins: coinInfo.coins + amount}, {transaction});
      } else {
        await Coins.create(
          {userId, coins: amount, locale: 'vnd'},
          {transaction}
        );
      }
      await transaction.commit();
      res.send('ok');
    } catch (e) {
      console.log(e);
      transaction.rollback();
      next(e);
    }
  }
);

export default router;
