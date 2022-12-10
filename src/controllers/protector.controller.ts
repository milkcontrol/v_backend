import {NextFunction, Request, Response} from 'express';
import {resOK} from '../lib/http.exception';
import protectors from '../models/Protectors.model';

export namespace ProtectorsController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await protectors.findAll();
      res.send(resOK(data));
    } catch (e) {
      next(e);
    }
  }
}
