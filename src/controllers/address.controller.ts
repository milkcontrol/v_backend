import {NextFunction, Request, Response} from "express";
import Countries from "../models/Countries.model";
import States from "../models/States.model";
import Cities from "../models/Cities.model";
import {HttpBadRequest, HttpUnAuth, resOK} from '../lib/http.exception';

export namespace CountryController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try{
      const dataCountries = await Countries.findAll()
      res.send(resOK(dataCountries))
    }catch (e) {
      next(e)
    }
  }
}

export namespace StateController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try{
      const dataStates = await States.findAll({where:{
          countryId: req.query['countryId']
        }})
      res.send(resOK(dataStates))
    }catch (e) {
      next(e)
    }
  }
}

export namespace CityController {
  export async function list(req: Request, res: Response, next: NextFunction) {
    try{
      const dataCites = await Cities.findAll({where: req.query});
      res.send(resOK(dataCites));
    }catch (e) {
      next(e);
    }
  }
}
