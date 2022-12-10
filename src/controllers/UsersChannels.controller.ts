import UsersChannelsModel from '../models/UsersChannels.model';
import {Request} from 'express';

export const getAll = async (req: Request) => {
  return await UsersChannelsModel.findAll({
    raw: true,
    where: {
      isDelete: false,
      userId: req?.jwtDecode?.sub,
    },
  });
};

export const getById = async (req: Request, id: string) => {
  const supp = await UsersChannelsModel.findOne({
    where: {
      id,
      userId: req?.jwtDecode?.sub,
    },
  });
  return supp;
};

export const deleteById = async (req: Request, id: string) => {
  const supp = await UsersChannelsModel.update(
    {
      isDelete: true,
    },
    {
      where: {
        id: id,
        userId: req?.jwtDecode?.sub,
      },
    }
  );
  return supp;
};

export const create = async (req: Request, body: any) => {
  // if (req?.jwtDecode?.sub && ) {
  //   body. = req?.jwtDecode?.sub || 'efe67b1c-722e-42e0-8bd1-08c5a2489060';
  // }
  await Promise.all(
    body.userIds.map(async (id: string) => {
      const supp = await UsersChannelsModel.create({
        userId: id,
        channelId: body.channelId,
        blocked: false,
        isDelete: false,
      });
      return supp;
    })
  );
  return true;
};

export const update = async (body: any, id: string) => {
  const supp = await UsersChannelsModel.update(body, {where: {id}});
  return supp;
};
