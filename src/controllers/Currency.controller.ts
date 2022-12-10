/* eslint-disable @typescript-eslint/no-namespace */
import {Request, Response, NextFunction} from 'express';
import {HttpBadRequest, resOK} from '../lib/http.exception';
import Coins from '../models/Coins.model';
import Diamonds from '../models/Diamonds.model';
import CurrencyTransfer from '../models/CurrencyTransfer.model';
import sequelize from '../database/config';
import Dones from '../models/Dones.model';
import coins from '../models/Coins.model';
import axios from 'axios';

export namespace CurrencyController {
  export async function coinsToDiamonds(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const transaction = await sequelize.transaction();
    try {
      const {coins, locale = 'vnd'} = req.body;
      const decoded = req.jwtDecode!;
      const rate = 10;
      if (!Number.isSafeInteger(coins) || coins <= 0) {
        throw new HttpBadRequest('invalid coins number');
      }
      // check valid coins
      const userCoins = await Coins.findOne({
        where: {userId: decoded.sub, locale: locale},
        transaction,
      });
      if (!userCoins || Number(userCoins.coins) < coins) {
        throw new HttpBadRequest('not enough coins');
      }
      // do transfer
      //1. degree coins
      await Coins.update(
        {coins: Number(userCoins.coins) - coins},
        {where: {userId: decoded.sub, locale: locale}, transaction}
      );
      //2. increment diamonds
      const userDiamonds = await Diamonds.findOne({
        where: {userId: decoded.sub, locale: locale},
        transaction,
      });
      if (userDiamonds) {
        await Diamonds.update(
          {diamonds: Number(userDiamonds.diamonds) + Number(coins) * rate},
          {where: {userId: decoded.sub, locale: locale}, transaction}
        );
      } else {
        await Diamonds.create(
          {
            userId: decoded.sub,
            diamonds: Number(coins) * rate,
            locale: locale,
          },
          {transaction}
        );
      }
      //3. save history change.
      await CurrencyTransfer.create(
        {
          userId: decoded.sub,
          from: 'coins',
          to: 'diamonds',
          transfer: coins,
          received: coins * rate,
          transfer_rate: rate,
        },
        {transaction}
      );
      await transaction.commit();
      res.send(resOK(null));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }

  export async function diamondsToCoins(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.send('ok');
  }

  export async function donesToCoins(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const transaction = await sequelize.transaction();
    try {
      const {dones, locale = 'vnd'} = req.body;
      const decoded = req.jwtDecode!;
      // get rate
      const {data} = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
      const usdRate = data['usd'] || {}
      const rate = parseInt(usdRate['vnd'] || 23515);

      if (!Number.isSafeInteger(dones) || dones <= 0) {
        throw new HttpBadRequest('invalid dones number');
      }
      // check valid done
      const userDones = await Dones.findOne({
        where: {userId: decoded.sub},
        transaction,
      });
      if (!userDones || Number(userDones.dones) < dones) {
        throw new HttpBadRequest('not enough coins');
      }
      // do transfer
      //1. degree dones
      await Dones.update(
        {coins: Number(userDones.dones) - dones},
        {where: {userId: decoded.sub}, transaction}
      );
      //2. increment coins
      const userCoins = await Coins.findOne({
        where: {userId: decoded.sub, locale: locale},
        transaction,
      });
      if (userCoins) {
        await Coins.update(
          {coins: Number(userCoins.coins) + Number(dones) * rate},
          {where: {userId: decoded.sub, locale: locale}, transaction}
        );
      } else {
        await Coins.create(
          {
            userId: decoded.sub,
            diamonds: Number(coins) * rate,
            locale: locale,
          },
          {transaction}
        );
      }
      //3. save history change.
      await CurrencyTransfer.create(
        {
          userId: decoded.sub,
          from: 'dones',
          to: 'coins',
          transfer: dones,
          received: dones * rate,
          locale,
          transfer_rate: rate,
        },
        {transaction}
      );
      await transaction.commit();
      res.send(resOK(null));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }
}
