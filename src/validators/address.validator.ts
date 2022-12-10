import {NextFunction, Request, Response} from "express";
import {HttpUnprocessableEntity} from "../lib/http.exception";
import Ajv, {DefinedError, JSONSchemaType} from "ajv";
import addFormats from "ajv-formats";
import {TData} from "./interface.validator";

const ajvReqQuery = new Ajv();
addFormats(ajvReqQuery);

interface ICityData {
  stateId: number,
  countryId: number
}
interface IStateData {
  countryId: number,
}

const schemaState: JSONSchemaType<IStateData> = {
  type: 'object',
  properties: {
    countryId: {
      type: 'number',
    }
  },
  required: ['countryId'],
  additionalProperties: true,
}
const schemaCity: JSONSchemaType<ICityData> = {
  type: 'object',
  properties: {
    stateId: {
      type: 'number',
    },
    countryId: {
      type: 'number',
    },
  },
  required: [],
  additionalProperties: true,
}

const vReqCity = ajvReqQuery.compile(schemaCity);
const vReqState = ajvReqQuery.compile(schemaState);
let vQuery: any = vReqCity;

const validate = (req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/states'){
    vQuery = vReqState;
  }
  const countryId = Number(req.query['countryId']);
  const stateId = Number(req.query['stateId']);

  let reqQuery: any = {
    stateId: stateId,
  };
  if (req.query['stateId'] && req.query['countryId'])
    reqQuery = {
      stateId: stateId,
      countryId: countryId,
    };
  if (req.query['countryId'] && !req.query['stateId'])
    reqQuery = {
      countryId: countryId,
    };
  const check = vQuery(reqQuery);
  if (check) return next();
  const data: TData[] = [];

  for (const err of vQuery.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
  }

  throw new HttpUnprocessableEntity('Fetch list Fail !', data);
};

export default validate;

