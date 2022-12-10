/* eslint-disable @typescript-eslint/no-namespace */
import {Request, Response, NextFunction} from 'express';
import {
  HttpBadRequest,
  HttpNotFoundRequest,
  HttpUnAuth,
  resOK,
} from '../lib/http.exception';
import {IJwtPayload} from '../lib/token';
import Users from '../models/Users.model';
import Profiles from '../models/Profiles.model';
import Stripe from 'stripe';
import sequelize from '../database/config';
import Dones from '../models/Dones.model';
import Done_Purchase from '../models/DonePurchase.model';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-08-01',
});

export namespace StripeController {
  export async function addCard(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const source = req.body.source;
      const decoded: IJwtPayload = req.jwtDecode!;
      if (!source || typeof source !== 'string') {
        throw new HttpBadRequest('invalid source');
      }
      //1. get userInfo
      const userData = await Users.findOne({
        where: {uuid: decoded.sub},
        include: ['profiles'],
      });
      if (!userData) {
        throw new HttpUnAuth('Error. User not found', 'Not found');
      }
      const customerId = userData.profiles.stripeCustomerId;
      if (!customerId) {
        // first add card. create customerId & card
        const customer: Stripe.Customer = await stripe.customers.create({
          source,
          email: userData.profiles.email,
        });
        // update customer to profile;
        await Profiles.update(
          {stripeCustomerId: customer.id},
          {where: {id: userData.profiles.id}}
        );
        return res.send(resOK({cardId: customer.default_source}));
      }
      // create card source
      const card: Stripe.CustomerSource = await stripe.customers.createSource(
        customerId,
        {source}
      );
      res.send(resOK({cardId: card.id}));
    } catch (e) {
      next(e);
    }
  }

  export async function cardList(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const decoded: IJwtPayload = req.jwtDecode!;
      //1. get userInfo
      const userData = await Users.findOne({
        where: {uuid: decoded.sub},
        include: ['profiles'],
      });
      if (!userData) {
        throw new HttpUnAuth('Error. User not found', 'Not found');
      }
      const customerId = userData.profiles.stripeCustomerId;
      if (!customerId) {
        return res.send(resOK([]));
      }
      const list = await stripe.customers.listSources(customerId);
      const result = list.data.map((card: any) => ({
        id: card.id,
        brand: card.brand,
        exp_month: card.exp_month,
        exp_year: card.exp_year,
        last4: card.last4,
      }));
      res.send(resOK(result));
    } catch (e) {
      next(e);
    }
  }

  export async function deleteCard(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cardId = req.params.id;
      const decoded: IJwtPayload = req.jwtDecode!;
      //1. get userInfo
      const userData = await Users.findOne({
        where: {uuid: decoded.sub},
        include: ['profiles'],
      });
      if (!userData) {
        throw new HttpUnAuth('Error. User not found', 'Not found');
      }
      const customerId = userData.profiles.stripeCustomerId;
      if (!customerId) {
        throw new HttpNotFoundRequest('not found');
      }
      await stripe.customers.deleteSource(customerId, cardId);
      res.send(resOK('deleted'));
    } catch (e) {
      next(e);
    }
  }

  export async function createCardToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {number, exp_month, exp_year, cvc} = req.body;
      const token: Stripe.Token = await stripe.tokens.create({
        card: {
          number: number,
          exp_month: exp_month,
          exp_year: exp_year,
          cvc: cvc,
        },
      });
      res.send(resOK({tokenId: token.id}));
    } catch (e) {
      next(e);
    }
  }

  export async function purchaseDones(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const transaction = await sequelize.transaction();
    let charge = null;
    try {
      const decoded: IJwtPayload = req.jwtDecode!;
      const {number, cardId} = req.body;
      if (!Number.isSafeInteger(number) || Number(number) < 1) {
        throw new HttpBadRequest('invalid num of dones');
      }
      if (!cardId || typeof cardId !== 'string') {
        throw new HttpBadRequest('invalid cardId');
      }
      //1. get userInfo
      const userData = await Users.findOne({
        where: {uuid: decoded.sub},
        include: ['profiles'],
      });
      if (!userData) {
        throw new HttpUnAuth('Error. User not found', 'Not found');
      }
      const customerId = userData.profiles.stripeCustomerId;
      // search prev value
      const data = await Dones.findOne({where: {userId: decoded.sub}});
      if (!data) {
        //insert
        await Dones.create({userId: decoded.sub, dones: number}, {transaction});
      } else {
        // update
        await Dones.update(
          {dones: data.dones + number},
          {where: {userId: decoded.sub}, transaction}
        );
      }

      const chargeParams = {
        amount: number * 100,
        currency: 'usd',
        customer: customerId,
        source: cardId,
        receipt_email: userData.profiles.email,
      };

      charge = await stripe.charges.create(chargeParams);
      // update history purchase
      await Done_Purchase.create(
        {
          id: charge.id,
          userId: decoded.sub,
          amount: number,
          currency: 'usd',
          platform: 'stripe',
          extraData: JSON.stringify(charge),
        },
        {transaction}
      );
      await transaction.commit();
      res.send(resOK('charge successfully'));
    } catch (e) {
      await transaction.rollback();
      if (charge) {
        await stripe.refunds.create({charge: charge.id});
      }
      next(e);
    }
  }
}
