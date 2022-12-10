import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IRefreshToken {
  refreshToken: string;
}

const schema: JSONSchemaType<IRefreshToken> = {
  type: 'object',
  properties: {
    refreshToken: {
      type: 'string',
    },
  },
  required: [],
  additionalProperties: false,
};

const vRefreshToken = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const check = vRefreshToken(req.body);

  if (check) return next();
  const data: TData[] = [];
  for (const err of vRefreshToken.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
  }

  throw new HttpUnprocessableEntity('Refresh token Fail !', data);
};

export default validate;
