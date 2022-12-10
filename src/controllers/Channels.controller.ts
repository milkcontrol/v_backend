import ChannelsModel from '../models/Channels.model';
import {Request} from 'express';

export const getAll = async (req: Request) => {
  return await ChannelsModel.findAll({
    raw: true,
    where: {
      isDelete: false,
      owner: req?.jwtDecode?.sub,
    },
  });
};

export const getById = async (req: Request, id: string) => {
  const supp = await ChannelsModel.findOne({
    where: {
      id,
      owner: req?.jwtDecode?.sub,
    },
  });
  return supp;
};

export const deleteById = async (req: Request, id: string) => {
  const supp = await ChannelsModel.update(
    {
      isDelete: true,
    },
    {
      where: {
        id: id,
        owner: req?.jwtDecode?.sub,
      },
    }
  );
  return supp;
};

export const create = async (req: Request, body: any) => {
  if (req?.jwtDecode?.sub) {
    body.owner = req?.jwtDecode?.sub;
  }
  body.isDelete = false;
  return ChannelsModel.create(body);
};

export const update = async (body: any, id: string) => {
  const supp = await ChannelsModel.update(body, {where: {id}});
  return supp;
};
