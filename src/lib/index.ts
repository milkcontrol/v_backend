import Users from "../models/Users.model";
import {HttpBadRequest} from "./http.exception";
import bcrypt from "bcryptjs";
import {randomUUID} from "crypto";
import Profile from "../models/Profiles.model";
import {IJwtPayload, Token} from "./token";
import Tokens from "../models/Tokens.model";

export const checkPassword = async (password: string, uuid: string) => {
  const userExist = await Users.findOne({where: {uuid}});
  if (!userExist) throw new HttpBadRequest("User doesn't exist");
  const hardPass = await bcrypt.compare(password, userExist.password);
  if (!hardPass) throw new HttpBadRequest('invalid login credentials');
}

const saltRounds = Number(process.env.HASH_SALT || 10);

export const hasPassword = (password: string) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return reject(err);
      return resolve(hash);
    });
  });
export const generateToken = async (uuid: string, role: number, transaction: object) =>{
  const data = {accessToken: '', refreshToken: '', expiration: ''};
  const payload: IJwtPayload = {
    sub: uuid,
    role: role,
  };
  const jwt = Token.JwtEncode(payload);
  data.accessToken = jwt.accessToken;
  data.expiration = jwt.expiration;
  const tokenId = randomUUID();
  await Tokens.create({uuid: tokenId, userId: uuid}, transaction);
  data.refreshToken = Token.encrypt(tokenId);
  return data;
}
export const createPublicId = ():string => {
  let randomId = randomUUID().replace('-','').slice(0,12)
  return `VN-${randomId}`
}
export const generatePublicId = async (): Promise<Function|string> =>{
  const publicId: string = createPublicId()
  const publicIdExist = await Profile.findOne({where: {publicId}});
  if(publicIdExist) return generatePublicId();
  return publicId;
}
