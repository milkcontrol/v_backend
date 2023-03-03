/* eslint-disable @typescript-eslint/no-namespace */
import {Request, Response, NextFunction} from 'express';
import Users from '../models/Users.model';
import Profiles from '../models/Profiles.model';
import Tokens from '../models/Tokens.model';
import LogTokens from '../models/LogTokens.model';
import {IJwtPayload, Token} from '../lib/token';
import bcrypt from 'bcryptjs';
import {HttpBadRequest, HttpUnAuth, resOK} from '../lib/http.exception';
import {randomUUID} from 'crypto';
import sequelize from '../database/config';
import VerifyCodes from '../models/VerifyCodes.model';
import moment from 'moment';
import {generatePublicId, generateToken, hasPassword} from '../lib';
import mailClient from '../lib/mailClient';
import Verify_Codes from '../models/VerifyCodes.model';
import policies from '../models/Policies.model';
import users_policies from '../models/UsersPolicies.model';
import axios from 'axios';
import querystring from 'querystring';
import Profile from '../models/Profiles.model';
import tokens from '../models/Tokens.model';

const durationToken = Number(process.env.REFRESH_DURATION || 8760);

export namespace AuthController {
  export async function login(req: Request, res: Response, next: NextFunction) {
    const transaction = await sequelize.transaction();
    try {
      const {username, password} = req.body;
      const foundedUser = await Users.findOne({where: {username}});
      if (foundedUser === null || foundedUser.isDelete || foundedUser.isBlocked)
        throw new HttpBadRequest('Thông tin đăng nhập không hợp lệ');
      const dataProfile = await Profiles.findByPk(foundedUser.profileId);
      if (dataProfile?.isGoogle === 1)
        throw new HttpBadRequest('Vui lòng đăng nhập bằng tài khoản Google');
      if (dataProfile?.isFacebook === 1)
        throw new HttpBadRequest('Vui lòng đăng nhập bằng tài khoản Facebook');
      if (foundedUser.role !== 1) {
        const dataUserPolicy = await users_policies.findOne({
          where: {userId: foundedUser.uuid},
        });
      if (!dataUserPolicy)
          throw new HttpBadRequest('Chính sách không hợp lệ !');
        const dataPolicy = await policies.findByPk(dataUserPolicy?.policyId);
      if (!dataPolicy || dataPolicy.status !== 1)
          throw new HttpBadRequest('Chính sách không hợp lệ');
        const dataPolicyType = await policies.findAll({
          where: {
            policyType: dataPolicy?.policyType,
          },
          order: [['id', 'DESC']],
        });
      if (dataUserPolicy?.policyId < dataPolicyType[0].id)
          throw new HttpBadRequest('Your policies is out of date!');
      }

      const hardPass = await bcrypt.compare(password, foundedUser.password);
      if (!hardPass)
        throw new HttpBadRequest('Tài khoản hoặc mật khẩu không chính xác !');

      if (foundedUser.isVerified === 2)
        throw new HttpBadRequest(
          'Tài khoản đã được đăng ký lên hệ thống. Vui lòng đợi xét duyệt từ quản trị viên.'
        );
      if (foundedUser.isVerified === 3)
        throw new HttpBadRequest('Thông tin đăng nhập đã bị từ chối !');

      if (foundedUser.isVerified === 0 && foundedUser.role === 4) {
        const foundedVerifyCode = await VerifyCodes.findOne({
          where: {userId: foundedUser.uuid, verifyType: 0, status: false},
          order: [['createdAt', 'DESC']],
        });
        if (foundedVerifyCode === null)
          throw new HttpBadRequest('Tài khoản chưa được kích hoạt !');
        const nextToken = Token.encrypt(
          JSON.stringify({
            verifyCodeId: foundedVerifyCode.id,
            userId: foundedUser.uuid,
            createdAt: foundedVerifyCode.createdAt,
          })
        );
        return res.send(
          resOK({
            message: 'Vui lòng kiểm tra email của bạn để kích hoạt tài khoản',
            nextToken,
          })
        );
      }
      if (foundedUser.isVerified === 0 && foundedUser.role === 8) {
        const nextToken = Token.encrypt(
          JSON.stringify({
            profileId: foundedUser.profileId,
            userId: foundedUser.uuid,
            createdAt: moment().format(),
          })
        );
        res.send(
          resOK({
            message: 'Vui lòng thực hiện các bước xác minh thông tin đăng ký.',
            nextToken,
          })
        );
      }
      const data = {accessToken: '', refreshToken: '', expiration: ''};
      const payload: IJwtPayload = {
        sub: foundedUser.uuid,
        role: foundedUser.role,
      };
      if (foundedUser.isBlocked) payload.isBlocked = true;
      const jwt = Token.JwtEncode(payload);
      data.accessToken = jwt.accessToken;
      data.expiration = jwt.expiration;

      const tokenId = randomUUID();
      await Tokens.create(
        {uuid: tokenId, userId: foundedUser.uuid},
        {transaction}
      );
      const ipAddress =
        req.headers['X-Real-IP'] || req.socket.remoteAddress || req.ip;
      await LogTokens.create(
        {tokenId, userAgent: req.headers['user-agent'], ipAddress},
        {transaction}
      );
      data.refreshToken = Token.encrypt(tokenId);
      await transaction.commit();
      const cookieName = process.env.REFRESH_COOKIE_NAME || 'refresh_token';
      res.cookie(cookieName, data.refreshToken, {
        maxAge: durationToken * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      res.send(resOK(data));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }

  export async function refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cookieName = process.env.REFRESH_COOKIE_NAME || 'refresh_token';
      let token: any = req.cookies[cookieName];
      if (!token) token = req.body.refreshToken;
      if (!token)
        throw new HttpUnAuth(
          'Refresh token không hợp lệ !',
          'E_INVALID_REFRESH_TOKEN'
        );
      const tokenId = Token.decrypt(token);
      if (!tokenId)
        throw new HttpUnAuth(
          'Refresh token không hợp lệ !',
          'E_INVALID_REFRESH_TOKEN'
        );

      const foundedToken = await Tokens.findByPk(tokenId);
      if (foundedToken === null)
        throw new HttpUnAuth(
          'Refresh token không hợp lệ !',
          'E_INVALID_REFRESH_TOKEN'
        );
      if (foundedToken.isRevoked)
        throw new HttpUnAuth(
          'Refresh token đã bị thu hồi',
          'E_INVALID_REFRESH_TOKEN'
        );
      const duration = Date.now() - new Date(foundedToken?.createdAt).getTime();
      const usefulTime = durationToken * 60 * 60 * 1000 - duration;
      if (usefulTime <= 0) {
        foundedToken.isRevoked = true;
        await foundedToken.save();
        throw new HttpUnAuth(
          'Refresh token hết hạn !',
          'E_INVALID_REFRESH_TOKEN'
        );
      }

      const foundedUser = await Users.findByPk(foundedToken.userId);
      if (
        foundedUser === null ||
        foundedUser.isDelete ||
        foundedUser.isBlocked
      ) {
        foundedToken.isRevoked = true;
        await foundedToken.save();
        throw new HttpUnAuth(
          'Refresh token không hợp lệ !',
          'E_INVALID_REFRESH_TOKEN'
        );
      }

      const ipAddress =
        req.headers['X-Real-IP'] || req.socket.remoteAddress || req.ip;
      await LogTokens.create({
        tokenId,
        userAgent: req.headers['user-agent'],
        ipAddress,
      });

      const payload: IJwtPayload = {
        sub: foundedUser.uuid,
        role: foundedUser.role,
      };
      if (foundedUser.isBlocked) payload.isBlocked = true;
      const jwt = Token.JwtEncode(payload);
      res.send(resOK(jwt));
    } catch (e) {
      next(e);
    }
  }

  export async function verifyCode(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const transaction = await sequelize.transaction();
    try {
      const {code, nextToken} = req.body;
      const data = Token.decrypt(nextToken);
      if (!data)
        throw new HttpBadRequest(
          'Next token không hợp lệ',
          'E_REQUEST_NEXT_TOKEN'
        );
      const dataJson: {
        verifyCodeId: number;
        userId: string;
        createdAt: string;
      } = JSON.parse(data);
      const dataVerifyCode = await VerifyCodes.findByPk(dataJson.verifyCodeId);
      if (
        dataVerifyCode === null ||
        !dataJson.userId ||
        dataVerifyCode.userId !== dataJson.userId ||
        dataVerifyCode.code !== code
      )
        throw new HttpBadRequest('Mã không hợp lệ!');
      const diff = moment().diff(moment(dataVerifyCode.createdAt), 'minutes');
      if (diff > 5) throw new HttpBadRequest('Expired code');
      const dataUser = await Users.findOne({
        where: {
          uuid: dataJson.userId,
        },
      });
      if (!dataUser) throw new HttpBadRequest('Người dùng không tồn tại !');
      if (dataVerifyCode.verifyType === 1) {
        const forgetPassToken = Token.encrypt(
          JSON.stringify({
            profileId: dataUser.profileId,
            uuid: dataUser.uuid,
            createdAt: moment().format(),
          })
        );
        return res.send(resOK({message: '', forgetPassToken}));
      }
      if (dataUser.role === 4) {
        await dataUser.update({isVerified: 1}, {transaction});
        await transaction.commit();
        return res.send(resOK('Xác minh thành công!'));
      }
      let status = 1;
      if (dataUser.role === 8 && dataUser.isVerified === 5) status = 6;
      await dataUser.update({isVerified: status}, {transaction});
      await transaction.commit();
      return res.send(
        resOK({
          message:
            'Tài khoản đã được đăng ký lên hệ thống. Vui lòng đợi xét duyệt từ quản trị viên.',
        })
      );
    } catch (err) {
      await transaction.rollback();
      next(err);
    }
  }
  export async function resendCode(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const transaction = await sequelize.transaction();
    try {
      const {nextToken} = req.body;
      const data = Token.decrypt(nextToken);
      if (!data)
        throw new HttpBadRequest(
          'Next token không hợp lệ',
          'E_REQUEST_NEXT_TOKEN'
        );
      const dataJson: {
        verifyCodeId: number;
        userId: 'string';
        createdAt: string;
      } = JSON.parse(data);
      const dataVerifyCode = await VerifyCodes.findByPk(dataJson.verifyCodeId);
      const dataCode = await VerifyCodes.findAll({
        where: {
          userId: dataJson.userId,
        },
      });
      let submissions = 1;
      for (const e of dataCode) {
        const day = moment(e?.createdAt).day();
        const currentDay = moment().day();
        if (day === currentDay) {
          submissions++;
        }
      }
      if (submissions > 5)
        throw new HttpBadRequest(
          'Bạn đã sử dụng hết số lượt tối đa được gửi trong ngày'
        );
      const diff = moment().diff(moment(dataVerifyCode?.createdAt), 'minutes');
      if (diff < 5) throw new HttpBadRequest('Vui lòng thử lại sau 5 phút!');
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += `${Math.floor(Math.random() * 9)}`;
      }
      const newVerifyCode = {
        userId: dataJson.userId,
        code,
        verifyType: 0,
        isReject: false,
      };
      await Verify_Codes.create(newVerifyCode, {
        transaction,
      });
      const dataUser = await Users.findByPk(dataJson.userId);
      const dataProfile = await Profiles.findByPk(dataUser?.profileId);
      const username = dataUser?.username || '';
      await mailClient.sendMessage({
        to: {
          id: dataJson.userId,
          name: dataProfile?.firstName || '',
          email: username,
        },
        subject: 'Chào mừng đến V-Live',
        body: `Chúng tôi đã nhận được yêu cầu gửi lại mã Otp của bạn bằng địa chỉ email: ${username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
      });
      await transaction.commit();
      return res.send(
        resOK(
          'Mã đã được gửi lại thành công. Vui lòng kiểm tra email của bạn để biết mã kích hoạt.'
        )
      );
    } catch (err) {
      next(err);
      await transaction.rollback();
    }
  }
  export const forgetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {username} = req.body;
      const dataUser = await Users.findOne({where: {username}});
      if (!dataUser) throw new HttpBadRequest("User doesn't exist");
      const dataProfile = await Profiles.findByPk(dataUser.profileId);
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += `${Math.floor(Math.random() * 9)}`;
      }
      const newVerifyCode = {
        userId: dataUser.uuid,
        code,
        verifyType: 1,
        isReject: false,
      };
      const dataVerifyCode = await Verify_Codes.create(newVerifyCode, {
        transaction,
      });
      await transaction.commit();
      await mailClient.sendMessage({
        to: {
          id: dataUser.uuid,
          name: dataProfile!.firstName,
          email: username,
        },
        subject: 'Chào mừng đến V-Live',
        body: `Chúng tôi đã nhận được yêu cầu lấy lại mật khẩu V-Vive của bạn bằng địa chỉ email ${username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
      });
      const result = 'Vui lòng kiểm tra email của bạn để biết mã kích hoạt.';
      const nextToken = Token.encrypt(
        JSON.stringify({
          verifyCodeId: dataVerifyCode.id,
          userId: dataUser.uuid,
          createdAt: dataVerifyCode.createdAt,
        })
      );

      return res.send(resOK({message: result, nextToken}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };
  export const changeForgetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {code, forgetPassToken, newPassword, confirmPassword} = req.body;
      const data = Token.decrypt(forgetPassToken);
      if (!data)
        throw new HttpBadRequest(
          'Next token không hợp lệ',
          'E_REQUEST_NEXT_TOKEN'
        );
      const dataJson: {
        verifyCodeId: number;
        userId: string;
        createdAt: string;
      } = JSON.parse(data);
      const dataVerifyCode = await VerifyCodes.findByPk(dataJson.verifyCodeId);
      if (
        dataVerifyCode === null ||
        !dataJson.userId ||
        dataVerifyCode.userId !== dataJson.userId ||
        dataVerifyCode.code !== code
      )
        throw new HttpBadRequest('Mã xác thực không hợp lệ!');
      const diff = moment().diff(moment(dataVerifyCode.createdAt), 'minutes');
      if (diff > 5)
        throw new HttpBadRequest('Mã xác thực của bạn đã hết hạn !');
      const dataUser = await Users.findOne({
        where: {
          uuid: dataJson.userId,
        },
      });
      await Tokens.update(
        {
          isRevoked: true,
        },
        {
          where: {
            userId: dataUser?.uuid,
          },
          transaction,
        }
      );
      if (newPassword !== confirmPassword)
        throw new HttpBadRequest(
          'Mật khẩu nhập lại không khớp với mật khẩu mới'
        );
      await Users.update(
        {
          password: String(await hasPassword(newPassword)),
        },
        {
          where: {
            uuid: dataUser?.uuid,
          },
          transaction,
        }
      );
      await generateToken(dataUser!.uuid, Number(dataUser?.role), {
        transaction,
      });
      await transaction.commit();
      res.send(
        resOK({
          message: 'Mật khẩu đã được thay đổi !',
        })
      );
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  };
  export const getGoogleAuthURL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log('====>', process.env.GOOGLE_CLIENT_ID);
      const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
      const options = {
        redirect_uri: `${process.env.API_URL}/auth/google`,
        client_id: process.env.GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email',
        ].join(' '),
      };
      return res.send(`${rootUrl}?${querystring.stringify(options)}`);
    } catch (e) {
      next(e);
    }
  };
  export const getFacebookAuthURL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const rootUrl = 'https://www.facebook.com/v15.0/dialog/oauth';
      const options = {
        client_id: process.env.APP_ID,
        redirect_uri: `${process.env.API_URL}/auth/facebook`,
        response_type: 'code',
        display: 'popup',
        scope: ['email', 'public_profile'].join(','),
      };
      return res.send(`${rootUrl}?${querystring.stringify(options)}`);
    } catch (e) {
      next(e);
    }
  };
  export const googleAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {code, refreshToken} = req.body;
      const body: any = {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/auth/google`,
        grant_type: 'authorization_code',
      };
      if(code) body.code = code
      if(refreshToken) body.refreshToken = refreshToken      
      const result = await axios
        .post('https://oauth2.googleapis.com/token', querystring.stringify(body), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then(res => res.data)
        .catch(error => {
          throw new Error(error.message);
        });
      const config = {
        headers: {Authorization: `Bearer ${result.access_token}`},
      };
      const ggRes = await axios.get(
        'https://www.googleapis.com/oauth2/v1/userinfo?',
        config
      );
      const foundedUser = await Users.findOne({
        where: {
          username: ggRes.data.email,
        },
      });
      if (foundedUser){ 
        await foundedUser.update({refreshToken: result.refresh_token}, {transaction});
        const data = {accessToken: '', refreshToken: '', expiration: ''};
      const payload: IJwtPayload = {
        sub: foundedUser.uuid,
        role: foundedUser.role,
      };
      if (foundedUser.isBlocked) payload.isBlocked = true;
      const jwt = Token.JwtEncode(payload);
      data.accessToken = jwt.accessToken;
      data.expiration = jwt.expiration;
      const tokenId = randomUUID();
      //aaa
      await Tokens.create(
        {uuid: tokenId, userId: foundedUser.uuid, refreshToken: result.refresh_token},
        {transaction}
      );
      const ipAddress =
        req.headers['X-Real-IP'] || req.socket.remoteAddress || req.ip;
      await LogTokens.create(
        {tokenId, userAgent: req.headers['user-agent'], ipAddress},
        {transaction}
      );
      data.refreshToken = Token.encrypt(tokenId);
        await transaction.commit();
        return res.send(resOK(data));
      }
      const newProfile = {
        publicId: await generatePublicId(),
        firstName: ggRes.data.given_name,
        lastName: ggRes.data.family_name,
        displayName: ggRes.data.name,
        isSearch: 0,
        language: 'vi-VN',
        favouriteCount: 0,
        followCount: 0,
        friendCount: 0,
        isGoogle: 1,
      };
      const dataProfile = await Profile.create(newProfile, {transaction});
      const uuid = randomUUID();
      const newUser = {
        uuid,
        username: ggRes.data.email,
        profileId: dataProfile.id,
        role: 4,
        isVerified: 1,
        isBlocked: 0,
        isDelete: 0,
        userType: 0,
      };
      const dataUser = await Users.create(newUser, {transaction});
      const data = {accessToken: '', refreshToken: '', expiration: ''};
      const payload: IJwtPayload = {
        sub: dataUser.uuid,
        role: dataUser.role,
      };
      if (dataUser.isBlocked) payload.isBlocked = true;
      const jwt = Token.JwtEncode(payload);
      data.accessToken = jwt.accessToken;
      data.expiration = jwt.expiration;
      const tokenId = randomUUID();
      await Tokens.create(
        {uuid: tokenId, userId: dataUser.uuid, refreshToken: result.refresh_token},
        {transaction}
      );
      const ipAddress =
        req.headers['X-Real-IP'] || req.socket.remoteAddress || req.ip;
      await LogTokens.create(
        {tokenId, userAgent: req.headers['user-agent'], ipAddress},
        {transaction}
      );
      data.refreshToken = Token.encrypt(tokenId);
      await transaction.commit();
      res.send(resOK({data}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };
  export const logOutGoogle = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try{
      const url = "https://www.google.com/accounts/Logout"
      
      const dataToken = await tokens.findOne({where:{userId: req.jwtDecode?.sub}})
      await axios.post(`https://oauth2.googleapis.com/revoke?token=${dataToken?.refreshToken}`,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      console.log('herhere');
      res.send({message:'Đăng xuất thành công'})
    }catch(e){
      next(e)
    }
  }
  export const facebookAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {code} = req.body;
      const body = querystring.stringify({
        code: code, //gave the values directly for testing
        client_id: process.env.APP_ID,
        client_secret: process.env.APP_SECRET,
        redirect_uri: 'http://localhost:7000/auth/facebook',
      });
      const result = await axios.post(
        'https://graph.facebook.com/v4.0/oauth/access_token',
        body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const config = {
        headers: {Authorization: `Bearer ${result.data.access_token}`},
      };
      const dataFb = await axios.get(
        'https://graph.facebook.com/me?fields=id,first_name,last_name,name,email,gender,birthday,picture',
        config
      );
      const dataUser = await Users.findOne({
        where: {
          username: dataFb.data.email,
        },
      });
      if (dataUser) return res.send(resOK('Đăng nhập thành công!!'));
      const newProfile = {
        publicId: await generatePublicId(),
        firstName: dataFb.data.first_name,
        lastName: dataFb.data.last_name,
        displayName: dataFb.data.name,
        isSearch: 0,
        language: 'vi-VN',
        favouriteCount: 0,
        followCount: 0,
        friendCount: 0,
        isFacebook: 1,
      };
      const dataProfile = await Profile.create(newProfile, {transaction});
      const uuid = randomUUID();
      const newUser = {
        uuid,
        username: dataFb.data.email,
        profileId: dataProfile.id,
        role: 4,
        isVerified: 1,
        isBlocked: 0,
        isDelete: 0,
        userType: 0,
      };
      await Users.create(newUser, {transaction});
      await transaction.commit();
      res.send(resOK({message: 'Tài khoản đã được đăng ký vào hệ thống'}));
      res.send(resOK(result.data));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const sendSMS = async (
    phones: any,
    content: any,
    type: any,
    sender: any
  ) => {
    console.log('asdasds', sender);
    
    const access_token = 'xpdiQTh9JaZBrsw3bE3btcPDFxmWcUpE';
    // const url = 'api.speedsms.vn';
    const body = JSON.stringify({
      to: phones,
      content: content,
      sms_type: type,
      sender: sender,
    });
    const buf = Buffer.from(access_token + ':x');
    // const buf = new Buffer(access_token + ':x');
    const auth = 'Basic ' + buf.toString('base64');
    const result = await axios.post(
      'https://api.speedsms.vn/index.php/sms/send',
      body,
      {
        headers: {
              'Content-Type': 'application/json',
              Authorization: auth,
            },
      }
    );
    console.log('===>',result.data);
    return;
  };
}
