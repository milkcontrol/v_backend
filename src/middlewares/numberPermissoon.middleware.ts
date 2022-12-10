import {Request, Response, NextFunction} from 'express';

const numberPermissionMiddleware =
  (role = 4) =>
  (req: Request, res: Response, next: NextFunction) => {
    const decoded = req.jwtDecode;
    if (!decoded) {
      throw new Error('login required');
    }
    // super admin
    if (decoded.role === 1) {
      return next();
    }
    const userRole = decoded.role;
    if (userRole !== role) {
      throw new Error('permission deny');
    }
    next();
  };

export default numberPermissionMiddleware;
