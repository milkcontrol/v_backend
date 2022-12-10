import {Request, Response, NextFunction} from 'express';
import {HttpUnAuth} from '../lib/http.exception';
import {Token} from '../lib/token';

const authMiddleware =
  (isBlocked?: boolean) =>
  (req: Request, res: Response, next: NextFunction) => {
    let accessToken = req.headers.authorization;
    if (!accessToken)
      throw new HttpUnAuth('Invalid access token', 'E_INVALID_ACCESS_TOKEN');

    accessToken = accessToken.split('Bearer ')[1];
    const payload = Token.JwtDecode(accessToken);
    if (!payload)
      throw new HttpUnAuth('Invalid access token', 'E_INVALID_ACCESS_TOKEN');

    const iat = Math.floor(Date.now() / 1000);
    if (payload.exp < iat)
      throw new HttpUnAuth(
        'Access token has expired',
        'E_ACCESS_TOKEN_EXPIRED'
      );

    if (!isBlocked && payload.isBlocked)
      throw new HttpUnAuth('Access is denied');
    req.jwtDecode = payload;
    next();
  };

export default authMiddleware;
