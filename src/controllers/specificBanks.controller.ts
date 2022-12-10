import {NextFunction, Request, Response} from "express";
import {resOK} from "../lib/http.exception";
import specific_banks from "../models/SpecificBanks.model";

export namespace SpecificBanksController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('asdadas')
      const data = await specific_banks.findAll();
      res.send(resOK(data));
    } catch (e) {
      next(e);
    }
  }
}
