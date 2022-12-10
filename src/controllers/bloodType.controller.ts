import {NextFunction, Request, Response} from "express";
import blood_types from "../models/BloodTypes.model";
import {resOK} from "../lib/http.exception";

export namespace BloodyTypeController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await blood_types.findAll();
      res.send(resOK(data));
    } catch (e) {
      next(e);
    }
  }
}
