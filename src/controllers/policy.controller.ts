/* eslint-disable @typescript-eslint/no-namespace */
import {NextFunction, Request, Response} from 'express';
import sequelize from '../database/config';
import {HttpUnAuth, resOK} from '../lib/http.exception';
import Policies from '../models/Policies.model';
import UsersPolicies from '../models/UsersPolicies.model';
import policies from "../models/Policies.model";

export namespace PolicyController {
  export const create = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('No access permission');
      const {content, policyType} = req.body;
      // const dataPolicyType = Policies.findAll({where:{policyType}})
      await Policies.update({status: 0}, {where: {policyType, status: 1}, transaction})
      const newPolicy = {
        content,
        policyType,
        status: 1,
      };
      const dataPolicy = await Policies.create(newPolicy, {transaction});
      await transaction.commit();
      res.send(resOK(dataPolicy));
      } catch (e) {
      next(e);
      await transaction.rollback();
    }
  }
  export const getByType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const policyType = req.params['type'];
      const dataPolicy = await policies.findOne({
        where: {
          policyType,
          status: 1
        },
        order: [
          ['id', 'DESC'],
        ]
      },)
      res.send(resOK(dataPolicy))
    } catch (e) {
      next(e);
    }
  }
  export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('No access permission');
      const userId = req.params['id'];
      const dataUserPolicy = await UsersPolicies.findOne({
        where: {
          userId
        }
      })
      const dataPolicy = await Policies.findByPk(dataUserPolicy?.policyId)
      const dataPolicyType = await Policies.findAll({
        where: {
          policyType: dataPolicy?.policyType
        },
        order: [
          ['id', 'DESC'],
        ]
      },)
      if (dataUserPolicy?.id < dataPolicyType[0].id) {
        const dataNewPolicy = await Policies.findByPk(dataPolicyType[0].id)
        res.send(resOK(dataNewPolicy))
      }
      res.send(resOK(dataPolicy))
    } catch (e) {
      next(e);
    }
  }
  export const getList = async ( req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        req.jwtDecode?.role &&
        req.jwtDecode?.role !== 1 &&
        req.jwtDecode?.role !== 2
      )
        throw new HttpUnAuth('No access permission');

      const dataFind: any = {};
      if (req.query.policyId) dataFind.policyId = req.query.policyId;
      if (req.query.policyType) dataFind.policyType = req.query.policyType;
      if (req.query.status) dataFind.status = req.query.status;
      const dataPolicy = await policies.findAndCountAll({
        where: dataFind,
        order: [[String(req.query.orderBy) || 'id', String(req.query.orderType) || 'ASC']],
        limit: Number(req.query.itemsPerPage),
        offset: Number(req.query.itemsPerPage) * Number(req.query.pageNumber),
      });
      res.send(resOK(dataPolicy));
    } catch (e) {
      next(e);
    }
  };
}
