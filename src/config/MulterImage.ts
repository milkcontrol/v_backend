import multer from 'multer';
import path from 'path';
import {Request} from 'express';
import fs from 'fs';
import {Token} from '../lib/token';
import Users from '../models/Users.model';
import moment from 'moment';

const imageRegex = /\.(jpg|JPG|jpeg|JPEG|png|PNG)$/;

export const storageUser = multer.diskStorage?.({
  destination: async function (req: Request, file, cb) {
    const data = Token.decrypt(req.body.nextToken);
    if (!data) return cb(Error('Invalid next token'), '');
    const dataJson: {
      profileId: number;
      userId: 'string';
      createdAt: string;
    } = JSON.parse(data);
    const dataUser = await Users.findByPk(dataJson.userId);
    if (dataUser === null || dataJson.profileId !== dataUser.profileId)
      return cb(Error('User does not exist !'), '');
    const diff = moment().diff(moment(dataJson.createdAt), 'hours');
    if (diff > 24) return cb(Error('Expired next token'), '');
    const folderPath: string = `${__dirname}/../uploads/${dataUser?.uuid}`;
    if (!fs.existsSync(`${__dirname}/../uploads`))
      fs.mkdirSync(`${__dirname}/../uploads`);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    return cb(null, folderPath);
  },
  filename: function (req: Request, file, cb) {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, '_'));
  },
});

export const fileFilter = async (req: Request, file: any, cb: any) => {
  try {
    const ext = path.extname?.(file.originalname);
    if (!imageRegex.test(<string>ext))
      return cb('Error: urlFile value must be of type image');
    return cb(null, false);
  } catch (error) {
    return cb('Error: upload file fail');
  }
};
