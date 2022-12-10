/* eslint-disable @typescript-eslint/no-namespace */
import {NextFunction, Request, Response} from 'express';
import Users from '../models/Users.model';
import Profile from '../models/Profiles.model';
import Profiles from '../models/Profiles.model';
import {randomUUID} from 'crypto';
import {Token} from '../lib/token';
import Tokens from '../models/Tokens.model';
import {HttpBadRequest, HttpUnAuth, resOK} from '../lib/http.exception';
import {generatePublicId, generateToken, hasPassword} from '../lib/index';
import {IPDoneData} from '../validators/userCreate.validator';
import {IDataUpdate} from '../validators/updateProfile.validator';
import mailClient from '../lib/mailClient';
import Countries from '../models/Countries.model';
import States from '../models/States.model';
import Cities from '../models/Cities.model';
import Addresses from '../models/Addresses.model';
import Banks from '../models/Banks.model';
import moment from 'moment';
import Verify_Codes from '../models/VerifyCodes.model';
import bcrypt from 'bcryptjs';
import sequelize from '../database/config';
const Sequelize = require('sequelize');
import policies from '../models/Policies.model';
import users_policies from '../models/UsersPolicies.model';
import User from '../routes/user';
import blood_types from '../models/BloodTypes.model';
import gender_types from '../models/GenderTypes.model';
import specific_banks from '../models/SpecificBanks.model';
import protectors from '../models/Protectors.model';
import {QueryTypes} from 'sequelize';

export namespace UserController {
  export const create = (req: Request, res: Response, next: NextFunction) => {
    if (Number(req.query['role']) === 4) return createUser(req, res, next);
    return createPDone(req, res, next);
  };

  const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {username, password, firstName, lastName, userType, policyId} =
        req.body;
      const dataUser = await Users.findOne({where: {username}});
      const diff = moment().diff(moment(dataUser?.createdAt), 'hours');
      if (dataUser && diff < 24 && dataUser.isVerified === 0)
        throw new HttpBadRequest('Tài khoản đã tồn tại trên hệ thống');
      if (dataUser && dataUser.isVerified === 1)
        throw new HttpBadRequest('Tài khoản đã tồn tại trên hệ thống');
      if (dataUser && diff > 24 && dataUser.isVerified === 0) {
        await Verify_Codes.destroy({where: {userId: dataUser.uuid}});
        await Users.destroy({where: {uuid: dataUser.uuid}});
        await Profile.destroy({where: {id: dataUser.profileId}});
      }
      const newProfile = {
        publicId: await generatePublicId(),
        firstName: firstName,
        lastName: lastName,
        isSearch: 0,
        language: 'vi-VN',
        favouriteCount: 0,
        followCount: 0,
        friendCount: 0,
      };
      const dataProfile = await Profile.create(newProfile, {transaction});
      const hasPass = await hasPassword(password);
      const uuid = randomUUID();
      const newUser = {
        uuid,
        username,
        password: hasPass,
        profileId: dataProfile.id,
        role: Number(req.query['role']),
        isVerified: 0,
        isBlocked: 0,
        isDelete: 0,
        userType,
      };
      const dataNewUser = await Users.create(newUser, {transaction});
      const dataPolicy = await policies.findByPk(policyId);
      if (dataPolicy?.policyType !== 0)
        throw new HttpBadRequest('Chính sách không hợp lệ');
      const newUserPolicy = {
        userId: dataNewUser.uuid,
        policyId: policyId,
      };
      await users_policies.create(newUserPolicy, {transaction});
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += `${Math.floor(Math.random() * 9)}`;
      }
      const newVerifyCode = {
        userId: uuid,
        code,
        verifyType: 0,
        isReject: false,
      };
      const dataVerifyCode = await Verify_Codes.create(newVerifyCode, {
        transaction,
      });
      await transaction.commit();
      let result = '';
      if (userType === 0) {
        await mailClient.sendMessage({
          to: {
            id: uuid,
            name: firstName,
            email: username,
          },
          subject: 'Chào mừng đến V-Live',
          body: `Chúng tôi đã nhận được yêu cầu lấy lại mật khẩu V-Vive của bạn bằng địa chỉ email ${username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
        });
      } else {
        await mailClient.sendMessage({
          to: {
            id: uuid,
            name: firstName,
            email: 'test-mobile@v-live.vn',
          },
          subject: 'Chào mừng đến V-Live',
          body: `Chúng tôi đã nhận được yêu cầu đăng ký V-Vive của bạn bằng địa chỉ email: ${username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
        });
      }
      result =
        'Tài khoản đã được tạo. Vui lòng kiểm tra email của bạn để kích hoạt tài khoản';
      const nextToken = Token.encrypt(
        JSON.stringify({
          verifyCodeId: dataVerifyCode.id,
          userId: uuid,
          createdAt: dataVerifyCode.createdAt,
        })
      );

      return res.send(resOK({message: result, nextToken}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  const createPDone = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const body: IPDoneData = req.body;
      let username: string = body.email;
      let message = 'Email đã tồn tại trên hệ thống';
      if (!body.email) {
        username = body.phoneNumber;
        message = 'Số điện thoại đã tồn tại trên hệ thống';
      }
      const dataUser = await Users.findOne({where: {username}});
      const diff = moment().diff(moment(dataUser?.createdAt), 'hours');
      if (dataUser && diff < 24 && dataUser.isVerified === 0)
        throw new HttpBadRequest(message);
      if (dataUser && dataUser.isVerified === 1)
        throw new HttpBadRequest(message);
      if (dataUser && diff > 24 && dataUser.isVerified === 0) {
        await Verify_Codes.destroy({where: {userId: dataUser.uuid}});
        await Users.destroy({where: {uuid: dataUser.uuid}});
        await Profile.destroy({where: {id: dataUser.profileId}});
      }
      const bloodTypeExist = await blood_types.findByPk(body.bloodTypeId);
      if (!bloodTypeExist) throw new HttpBadRequest('Nhóm máu không tồn tại!');
      const genderTypeExist = await gender_types.findByPk(body.genderTypeId);
      if (!genderTypeExist)
        throw new HttpBadRequest('Giới tính không tồn tại!');
      const countryExist = await Countries.findByPk(body.countryId);
      if (!countryExist) throw new HttpBadRequest('Quốc gia không tồn tại!');
      const cityExist = await Cities.findByPk(body.cityId);
      if (!cityExist) throw new HttpBadRequest('Thành phố không tồn tại');
      const stateExist = await States.findByPk(body.stateId);
      if (!stateExist) throw new HttpBadRequest('Bang không tồn tại!');
      const currentCountryExist = await Countries.findByPk(
        body.currentCountryId
      );
      if (!currentCountryExist)
        throw new HttpBadRequest('Quốc gia không tồn tại!');
      const currentCityExist = await Cities.findByPk(body.currentCityId);
      if (!currentCityExist)
        throw new HttpBadRequest('Thành phố không tồn tại');
      const currentStateExist = await States.findByPk(body.currentStateId);
      if (!currentStateExist) throw new HttpBadRequest('Bang không tồn tại!');
      const newBirthAddress = {
        address1: body.specificAddress,
        address2: `${body.specificAddress}, ${cityExist.name}, ${stateExist.name}, ${countryExist.name}`,
        country_id: countryExist.id,
        state_id: cityExist.id,
        city_id: stateExist.id,
      };
      const newCurrentAddress = {
        address1: body.currentSpecificAddress,
        address2: `${body.specificAddress}, ${currentCityExist.name}, ${currentStateExist.name}, ${currentCountryExist.name}`,
        country_id: currentCountryExist.id,
        state_id: currentStateExist.id,
        city_id: currentCityExist.id,
      };
      const dataBirthAddress = await Addresses.create(newBirthAddress, {
        transaction,
      });
      const dataCurrentAddress = await Addresses.create(newCurrentAddress, {
        transaction,
      });

      const newProfile: any = {
        ...body,
        birthPlaceAddressId: dataBirthAddress.id,
        currentAddressId: dataCurrentAddress.id,
        stripeCustomerId: 1,
        publicId: await generatePublicId(),
        isSearch: 0,
        language: 'vi-VN',
        favouriteCount: 0,
        followCount: 0,
        friendCount: 0,
      };
      const dataProfile = await Profile.create(newProfile, {transaction});
      const hasPass = await hasPassword(body.password);
      const uuid = randomUUID();
      const newUser = {
        uuid: uuid,
        profileId: dataProfile.id,
        username: username,
        password: hasPass,
        role: Number(req.query['role']),
        isVerified: 0,
        isBlocked: 0,
        isDelete: 0,
      };
      const dataNewUser = await Users.create(newUser, {transaction});
      const dataPolicy = await policies.findByPk(body.policyId);
      if (dataPolicy?.policyType !== 1)
        throw new HttpBadRequest('Chính sách không hợp lệ');
      const newUserPolicy = {
        userId: dataNewUser.uuid,
        policyId: body.policyId,
      };
      await users_policies.create(newUserPolicy, {transaction});
      await transaction.commit();
      const nextToken = Token.encrypt(
        JSON.stringify({
          profileId: dataProfile.id,
          userId: uuid,
          createdAt: moment().format(),
        })
      );
      res.send(
        resOK({
          message:
            'Tài khoản đã được tạo. Vui lòng thực hiện các bước xác minh thông tin đăng ký.',
          nextToken,
        })
      );
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const uploadInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {
        nextToken,
        specificBankId,
        accountNumber,
        owner,
        protectorId,
        parentId,
        error,
        message,
      } = req.body;
      if (error) throw new HttpBadRequest(message, error);
      const dataSpecificBanks = await specific_banks.findByPk(specificBankId);
      if (!dataSpecificBanks)
        throw new HttpBadRequest('Ngân hàng không tồn tại !!');
      const data = Token.decrypt(nextToken);
      if (!data)
        throw new HttpBadRequest(
          'Next token không hợp lệ',
          'E_REQUEST_NEXT_TOKEN'
        );
      const dataJson: {
        profileId: number;
        userId: string;
        createdAt: string;
      } = JSON.parse(data);
      const dataUser = await Users.findByPk(dataJson.userId);
      if (dataUser === null || dataJson.profileId !== dataUser.profileId)
        throw new HttpBadRequest('Người dùng không tồn tại !');
      if (dataUser.isVerified === 2)
        throw new HttpBadRequest('Tài khoản đã được đăng ký');
      const diff = moment().diff(moment(dataJson.createdAt), 'hours');
      if (diff > 24)
        throw new HttpBadRequest('next token hết hạn', 'E_EXP_NEXT_TOKEN');

      const {identityImageOne, identityImageTwo, identityImageThree} =
        req.files as {[filename: string]: Express.Multer.File[]};

      const files = req.files;
      if (!files) {
        throw new HttpBadRequest('Vui lòng gửi ảnh xác minh');
      }
      const imgPath = (filename: string): string => {
        return `${process.env.API_URL}/uploads/${dataUser.uuid}/${filename}`;
      };
      const dataProfile = await Profile.findByPk(dataJson.profileId);
      if (!dataProfile) throw new HttpBadRequest('Người dùng không tồn tại !');
      const infoUpload: any = {
        identityImageOne: imgPath(identityImageOne[0].filename),
        identityImageTwo: imgPath(identityImageTwo[0].filename),
        identityImageThree: imgPath(identityImageThree[0].filename),
      };
      const birthday = moment(dataProfile.birthday);
      const age = moment().diff(birthday, 'year');
      if (age < 18) {
        if (!protectorId && !parentId) {
          throw new HttpBadRequest(
            'Bạn cần thông tin của người bảo hộ để tiếp tục'
          );
        } else {
          const dataProtectors = await protectors.findByPk(protectorId);
          if (!dataProtectors)
            throw new HttpBadRequest('Người bảo hộ không tồn tại!');
          const dataProfileParent = await Profiles.findOne({
            where: {publicId: parentId},
          });
          if (!dataProfileParent)
            throw new HttpBadRequest('Id PDone không hợp lệ !');
          infoUpload.protector = protectorId;
          infoUpload.parentId = parentId;
          await Profile.update(infoUpload, {
            where: {
              id: dataProfile.id,
            },
            transaction,
          });
          const dataParent = await Users.findOne({
            where: {profileId: dataProfileParent.id},
          });
          if (!dataParent)
            throw new HttpBadRequest('Người dùng không tồn tại!');
          const confirmToken = Token.encrypt(
            JSON.stringify({
              profileId: dataUser.profileId,
              userId: dataUser.uuid,
              parentUuid: dataParent.uuid,
              createdAt: moment().format(),
            })
          );
          await mailClient.sendMessage({
            to: {
              id: dataJson.userId,
              name: dataProfileParent?.firstName || '',
              email: dataParent?.username || '',
            },
            subject: 'Xác thực người dùng V-Live',
            body: `Chúng tôi nhận được thông báo từ người dùng ${dataUser.username} muốn bạn trở thành người bảo hộ.<br/>Vui lòng ấn vào đường link dưới đây để chấp thuận yêu cầu.<br/><br/>${process.env.API_URL}/users/approve-user?confirmToken=${confirmToken}`,
          });
          await dataUser.update({isVerified: 4}, {transaction});
          await transaction.commit();
          return res.send(
            resOK({message: 'Đang đợi xác minh từ người bảo hộ'})
          );
        }
      }
      await Profile.update(infoUpload, {
        where: {
          id: dataProfile.id,
        },
        transaction,
      });
      const newBank = {
        userId: dataProfile.id,
        specificBankId,
        accountNumber,
        owner,
      };

      // await dataUser.update({isVerified: 2}, {transaction});
      await Banks.create(newBank, {transaction});
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += `${Math.floor(Math.random() * 9)}`;
      }
      const newVerifyCode = {
        userId: dataUser.uuid,
        code,
        verifyType: 0,
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
          email: dataUser.username,
        },
        subject: 'Chào mừng đến V-Live',
        body: `Chúng tôi đã nhận được yêu cầu đăng ký V-Vive của bạn bằng địa chỉ email: ${dataUser.username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${dataUser.username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
      });
      const result =
        'Mã Otp đã được gửi cho bạn. Vui lòng kiểm tra email của bạn';
      const nextVerifyToken = Token.encrypt(
        JSON.stringify({
          verifyCodeId: dataVerifyCode.id,
          userId: dataUser.uuid,
          createdAt: dataVerifyCode.createdAt,
        })
      );
      return res.send(resOK({message: result, nextVerifyToken}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const parentApprove = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const data = Token.decrypt(String(req.query['confirmToken']));
      if (!data)
        throw new HttpBadRequest(
          'Next Token không hợp lệ !',
          'E_REQUEST_NEXT_TOKEN'
        );
      const dataJson: {
        profileId: number;
        userId: string;
        parentUuid: string;
        createdAt: string;
      } = JSON.parse(data);
      if (dataJson.parentUuid !== req.jwtDecode?.sub)
        throw new HttpBadRequest('Người bảo hộ không hợp lê');
      const dataUser = await Users.findByPk(dataJson.userId);
      if (dataUser === null || dataJson.profileId !== dataUser.profileId)
        throw new HttpBadRequest('Người dùng không tồn tại !');
      if (dataUser.isVerified === 5)
        throw new HttpBadRequest('Tài khoản đã được người bảo hộ xác thực !');
      const diff = moment().diff(moment(dataJson.createdAt), 'hours');
      if (diff > 24)
        throw new HttpBadRequest('Next token hết hạn !', 'E_EXP_NEXT_TOKEN');
      await dataUser.update(
        {isVerified: 5},
        {
          transaction,
        }
      );
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += `${Math.floor(Math.random() * 9)}`;
      }
      const newVerifyCode = {
        userId: dataUser.uuid,
        code,
        verifyType: 0,
        isReject: false,
      };
      const dataVerifyCode = await Verify_Codes.create(newVerifyCode, {
        transaction,
      });
      await transaction.commit();
      const dataProfile = await Profiles.findByPk(dataUser.profileId);
      await mailClient.sendMessage({
        to: {
          id: dataUser.uuid,
          name: dataProfile!.firstName,
          email: dataUser.username,
        },
        subject: 'Chào mừng đến V-Live',
        body: `Chúng tôi đã nhận được yêu cầu lấy lại mật khẩu V-Vive của bạn bằng địa chỉ email ${dataUser.username}.<br/>Mã kích hoạt V-Vive của bạn là: <b>${code}</b><br/><br/>Nếu bạn không yêu cầu mã này, có thể ai đó đang cố gắng truy cập vào tài khoản: ${dataUser.username}.<br/>Vui lòng không chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.`,
      });
      const result =
        'Mã Otp đã được gửi cho bạn. Vui lòng kiểm tra email của bạn';
      const nextVerifyToken = Token.encrypt(
        JSON.stringify({
          verifyCodeId: dataVerifyCode.id,
          userId: dataUser.uuid,
          createdAt: dataVerifyCode.createdAt,
        })
      );

      return res.send(resOK({message: result, nextVerifyToken}));
      // res.send(resOK('Xác thực người dùng thành công '));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const changeProtector = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {protectId, parentId} = req.body;
      const uuid = req.jwtDecode?.sub;
      const dataUser = await Users.findByPk(uuid);
      if (dataUser?.isVerified !== 4)
        throw new HttpBadRequest(
          'Tài khoản đã được xác nhận bởi người giám hộ'
        );
      const dataParent = await Profiles.findOne({where: {publicId: parentId}});
      if (!dataParent) throw new HttpBadRequest('Need a protector ');
      await Profile.update(
        {...req.body},
        {where: {id: dataUser.profileId}, transaction}
      );
      await transaction.commit();
      res.send(
        resOK({
          message: 'Vui lòng chờ xác thực từ người giám hộ',
        })
      );
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  };

  export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let uuid = req.params['id'];
      if (
        uuid !== 'me' &&
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('Không có quyền truy cập');
      if (uuid === 'me') uuid = String(req.jwtDecode?.sub);

      const dataUser = await Users.findByPk(uuid);
      if (!dataUser) throw new HttpBadRequest('Ngừoi dùng không tồn tại');
      const data = await Profiles.findByPk(dataUser.profileId);
      res.send(resOK(data));
    } catch (e) {
      next(e);
    }
  };

  export const findUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const Op = Sequelize.Op;
      const dataFind: any = {};
      if (req.query.firstName)
        dataFind.firstName = {
          [Op.like]: `%${req.query.firstName}%`,
        };
      if (req.query.lastName)
        dataFind.lastName = {
          [Op.like]: `%${req.query.lastName}%`,
        };
      if (req.query.displayName)
        dataFind.displayName = {
          [Op.like]: `%${req.query.displayName}%`,
        };
      if (req.query.publicId)
        dataFind.publicId = {
          [Op.like]: `%${req.query.publicId}%`,
        };
      if (req.query.phoneNumber)
        dataFind.phoneNumber = {
          [Op.like]: `%${req.query.phoneNumber}%`,
        };
      const dataUser = await Profiles.findAndCountAll({
        where: dataFind,
        order: [
          [
            String(req.query.orderBy) || 'id',
            String(req.query.orderType) || 'ASC',
          ],
        ],
        limit: Number(req.query.itemsPerPage),
        offset: Number(req.query.itemsPerPage) * Number(req.query.pageNumber),
      });
      res.send(resOK(dataUser));
    } catch (e) {
      next(e);
    }
  };

  export const destroy = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('Không có quyền truy cập');

      await Users.update(
        {
          isDelete: true,
        },
        {
          where: {uuid: req.params['id']},
          transaction,
        }
      );
      await Tokens.update(
        {
          isRevoke: true,
        },
        {
          where: {userId: req.params['id']},
          transaction,
        }
      );
      await transaction.commit();
      res.send(resOK({message:'Delete success !'}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      let uuid = req.params['id'];
      if (
        uuid !== 'me' &&
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('Không có quyền truy cập');
      if (uuid === 'me') uuid = String(req.jwtDecode?.sub);

      const body: IDataUpdate = req.body;
      const userExist = await Users.findOne({where: {uuid}});
      if (!userExist) throw new HttpBadRequest('Người dùng không tồn tại');
      let newProfile = {
        ...body,
        displayName: body.displayName || null,
        phoneNumber: body.phoneNumber || null,
        email: body.email || null,
        height: body.height || null,
        width: body.width || null,
        maritalStatus: body.maritalStatus || null,
        education: body.education || null,
        job: body.job || null,
        interests: body.interests || null,
        talent: body.talent || null,
        protector: body.protector || null,
        parentId: body.parentId || null,
      };
      if (req.method === 'PATCH') newProfile = {...body};
      await Profiles.update(newProfile, {
        where: {
          id: userExist.profileId,
        },
        transaction,
      });
      await transaction.commit();
      res.send(resOK({message: 'Hồ sơ người dùng đã được cập nhật'}));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };
  export const changePassWord = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      const {oldPassword, newPassword, confirmPassword, isRevokeAll} = req.body;
      const dataUser = await Users.findOne({where: {uuid: req.jwtDecode?.sub}});
      if (!dataUser) throw new HttpBadRequest('Người dung không tồn tại');
      const hardPass = await bcrypt.compare(oldPassword, dataUser.password);
      if (!hardPass) throw new HttpBadRequest('Mật khẩu không chính xác');
      const checkToken = await Tokens.findOne({
        where: {userId: req.jwtDecode?.sub},
      });
      if (!checkToken) throw new HttpBadRequest('Token không tồn tại');
      if (oldPassword === newPassword)
        throw new HttpBadRequest(
          'Mật khẩu mới không được giống với mật khẩu cũ!'
        );
      if (isRevokeAll === true) {
        await Tokens.update(
          {
            isRevoked: true,
          },
          {
            where: {
              userId: dataUser.uuid,
            },
            transaction,
          }
        );
        await generateToken(dataUser.uuid, dataUser.role, {transaction});
      }
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
            uuid: dataUser.uuid,
          },
          transaction,
        }
      );
      await transaction.commit();
      res.send('changed');
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };

  export const resetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction();
    try {
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('Không có quyền truy cập');
      const userExist = await Users.findOne({
        where: {uuid: req.params['uuid']},
      });
      if (!userExist) throw new HttpBadRequest('Người dùng không tồn tại');
      await Tokens.update(
        {
          isRevoked: true,
        },
        {
          where: {
            userId: userExist.uuid,
          },
          transaction,
        }
      );
      await generateToken(userExist.uuid, Number(userExist.role), {
        transaction,
      });
      const genPass = randomUUID().slice(0, 8);
      await Users.update(
        {
          password: String(await hasPassword(genPass)),
        },
        {
          where: {
            uuid: req.params['uuid'],
          },
          transaction,
        }
      );
      await transaction.commit();
      res.send(resOK(genPass));
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  };
}
