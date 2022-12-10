import MessagesModel from '../models/Messages.model';
import {Request} from 'express';

export const getAll = async () => {
  return await MessagesModel.findAll({
    raw: true,
    where: {
      isDelete: false,
    },
  });
};

export const getById = async (id: string) => {
  const supp = await MessagesModel.findOne({
    where: {id},
  });
  return supp;
};

export const deleteById = async (id: string) => {
  const supp = await MessagesModel.update({isDelete: true}, {where: {id}});
  return supp;
};

export const create = async (req: Request, body: any) => {
  if (req?.jwtDecode?.sub) {
    body.userId = req?.jwtDecode?.sub;
  }
  body.isDelete = false;
  const supp = await MessagesModel.create(body);
  return supp;
};

export const update = async (body: any, id: string) => {
  const supp = await MessagesModel.update(body, {where: {id}});
  return supp;
};
