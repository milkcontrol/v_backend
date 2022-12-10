/* eslint-disable @typescript-eslint/no-namespace */
import jws from 'jws';
import moment from 'moment';
import crypto from 'crypto';

const SECRET =
  process.env.REFRESH_SECRET ||
  'U2ltcGx5IGVudGVyIHlvdXIgZGF0YSB0aGVuIHB1c2ggdGhlIGVuY29kZSBidXR0b24u';
const ALGORITHM = process.env.REFRESH_ALGORITHM || 'aes-256-cbc';
const ENCODING = 'hex';
const IV_LENGTH = 16;
const KEY = crypto.createHash('sha256').update(String(SECRET)).digest('base64');

export interface IJwtPayload {
  sub: string;
  role: number;
  isBlocked?: boolean;
}

export namespace Token {
  export const JwtEncode = (payload: IJwtPayload) => {
    // let kid = randomUUID();
    // kid = kid.split("-").join("")
    const iat = Math.floor(Date.now() / 1000);
    const duration = parseInt(process.env.JWT_DURATION || '1800');
    const exp = iat + duration;
    const accessToken = jws.sign({
      header: {alg: 'RS256', type: 'JWT'},
      payload: {...payload, iat, exp},
      privateKey: process.env.JWT_PRIVATE_KEY,
    });
    return {accessToken, expiration: moment(exp * 1000).format()};
  };

  export const JwtDecode = (signature: string) => {
    try {
      const verifyJwt = jws.verify(
        signature,
        'RS256',
        String(process.env.JWT_PUBLIC_KEY)
      );
      if (!verifyJwt) return null;
      const data = jws.decode(signature);
      return JSON.parse(data.payload);
    } catch (err) {
      return null;
    }
  };

  export const encrypt = (data: string) => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      Buffer.from(KEY, 'base64'),
      iv
    );
    return Buffer.concat([cipher.update(data), cipher.final(), iv]).toString(
      ENCODING
    );
  };

  export const decrypt = (token: string) => {
    try {
      const binaryData = Buffer.from(token, ENCODING);
      const iv = binaryData.slice(-IV_LENGTH);
      const encryptedData = binaryData.slice(0, binaryData.length - IV_LENGTH);
      const decipher = crypto.createDecipheriv(
        ALGORITHM,
        Buffer.from(KEY, 'base64'),
        iv
      );

      return Buffer.concat([
        decipher.update(encryptedData),
        decipher.final(),
      ]).toString();
    } catch (err) {
      return null;
    }
  };
}
