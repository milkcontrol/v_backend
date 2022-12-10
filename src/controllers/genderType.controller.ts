import {NextFunction, Request, Response} from "express";
import {resOK} from "../lib/http.exception";
import gender_types from "../models/GenderTypes.model";

export namespace GenderTypeController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await gender_types.findAll();
      res.send(resOK(data));
    } catch (e) {
      next(e);
    }
  }
}
