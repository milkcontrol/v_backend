import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IVerify {
  code: string;
  nextToken: string;
}

const schema: JSONSchemaType<IVerify> = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
      maxLength: 6,
      minLength: 6,
    },
    nextToken: {
      type: 'string',
    },
  },
  required: ['code', 'nextToken'],
  additionalProperties: false,
};

const vVerifyCode = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const check = vVerifyCode(req.body);
  if (check) return next();
  const data: TData[] = [];
  for (const err of vVerifyCode.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
  }

  throw new HttpUnprocessableEntity('Verification failed !', data);
};

export default validate;
