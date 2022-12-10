import {NextFunction, Request, Response} from 'express';

export const authPermission = (
  req: Request,
  res: Response,
  next: NextFunction,
  permissionRoute: number,
  reqRole: number
) => {
  const listPermission = [256, 128, 64, 32, 16, 8, 4, 2, 1];
  if (permissionRoute === reqRole) return next();
  if (!listPermission.includes(reqRole))
    throw new Error('Request permission not found!');
  else if (permissionRoute > 512 || permissionRoute < 1)
    throw new Error('Route permission not found!');
  else if (reqRole > permissionRoute)
    throw new Error('Permission no access allowed!');
  const idx = listPermission.findIndex(e => permissionRoute > e);
  let count = permissionRoute;
  for (let i = idx; i < listPermission.length; i++) {
    if (count - listPermission[i] >= 0) {
      if (listPermission[i] === reqRole) return next();
      count = count - listPermission[i];
    }
  }
  throw new Error('Permission no access allowed!');
};
