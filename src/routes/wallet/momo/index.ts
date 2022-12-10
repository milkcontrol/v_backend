import express, {Request, Response, NextFunction} from 'express';
import {HttpBadRequest, resOK} from '../../../lib/http.exception';
import {generateSignature} from '../../../lib/momo/signature';
import axios from 'axios';
import Payments from '../../../models/Payments.model';
import {randomUUID} from 'crypto';
import Coins from '../../../models/Coins.model';
import isURL from '../../../validators/url.validator';

const router = express.Router();

router.post(
  '/create-payment',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        MOMO_ACCESS_KEY,
        MOMO_PARTNER_CODE,
        MOMO_MAX_PAYMENT = 5000000,
        MOMO_MIN_PAYMENT = 1000,
        MOMO_IPN_URL,
        MOMO_API,
      } = process.env;
      const userInfo: any = req.jwtDecode;
      const {
        amount,
        orderInfo = 'Thanh toán xu v-Live',
        extraData = '',
        redirect_url = '',
      } = req.body;
      if (
        !amount ||
        !Number.isSafeInteger(amount) ||
        Number(amount) < MOMO_MIN_PAYMENT ||
        Number(amount) > MOMO_MAX_PAYMENT
      )
        throw new HttpBadRequest('invalid amount');
      if (!isURL(redirect_url).isValid) {
        throw new HttpBadRequest('invalid redirect url');
      }
      const requestId = userInfo.sub + '_' + new Date().getTime();
      const orderId = requestId;
      const requestType = 'captureWallet';
      const bodyData = {
        accessKey: MOMO_ACCESS_KEY,
        amount: amount.toString(),
        extraData: extraData,
        ipnUrl: MOMO_IPN_URL,
        orderId: orderId,
        orderInfo: orderInfo,
        partnerCode: MOMO_PARTNER_CODE,
        redirectUrl: redirect_url,
        requestId: requestId,
        requestType: requestType,
      };
      const signature = generateSignature(bodyData);
      // make request
      const {data} = await axios.post(`${MOMO_API}/v2/gateway/api/create`, {
        ...bodyData,
        signature,
        lang: 'vi',
      });

      // write db
      const isPartner = userInfo.role === 256;
      const coins = isPartner ? Number(amount) * 1.05 : Number(amount);
      const paymentUID = randomUUID();
      await Payments.create({
        uid: paymentUID,
        userId: userInfo.sub,
        amount: amount.toString(),
        coins,
        isPartner,
        orderId,
        requestId,
        extraData,
        requestType,
        platform: 'momoWallet',
        orderInfo,
        status: 'pending',
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
);
router.get(
  '/coins',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {locale = 'vnd'} = req.query;
      const userInfo: any = req.jwtDecode;
      const data = await Coins.findOne({where: {userId: userInfo.sub, locale}});
      if (data)
        return res.send(
          resOK({
            userId: userInfo.sub,
            coins: data.coins,
            locale,
          })
        );
      return res.send(
        resOK({
          userId: userInfo.sub,
          coins: 0,
          locale,
        })
      );
    } catch (e) {
      next(e);
    }
  }
);
export default router;
