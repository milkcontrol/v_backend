import {NextFunction, Request, Response} from "express";
import sequelize from "../database/config";
import {HttpBadRequest, HttpUnAuth, resOK} from "../lib/http.exception";
import Users from "../models/Users.model";
import Profiles from "../models/Profiles.model";


export namespace AdminController {
  export const approveUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const transaction = await sequelize.transaction()
    try {
      const userStatus = Number(req.query['userStatus']);
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('No access permission');
      const dataUser = await Users.findOne({where:{uuid: req.query.userId}});
      if (!dataUser) throw new HttpBadRequest('User doesn`t exists');
      const dataProfile = await Profiles.findByPk(dataUser.profileId);
      if (dataProfile?.parentId !== null){
        if (dataUser.isVerified !== 6) throw new HttpBadRequest('Người dùng chưa được xác thực bởi người bảo hộ');
        await Users.update(
          {isVerified: userStatus},
          {where: {uuid: req.query.userId}, transaction}
        );
      }
      if (dataUser.isVerified === 1)
        throw new HttpBadRequest('The account has been approved');
      if (dataUser.isVerified === 2) {
        if (userStatus !== 1 && userStatus !== 3)
          throw new HttpBadRequest('Invalid user status!');
        await Users.update(
          {isVerified: userStatus},
          {where: {uuid: req.query.userId}, transaction}
        );
      }
      if(dataUser.isVerified === 3) {
        if(userStatus !== 2)throw new HttpBadRequest("Invalid user status!")
        await Users.update({isVerified: 2}, {
          where: {
            uuid: req.query.userId
          }, transaction
        })
      }
      await transaction.commit();
      res.send(
        resOK({
          message: 'Account has been approved on the system',
        })
      );
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  };
}
