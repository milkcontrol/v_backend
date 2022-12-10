import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface ChangePassData {
  code: string;
}

const schema: JSONSchemaType<ChangePassData> = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
    },
  },
  required: [],
  additionalProperties: true,
};

const vGoogleFbAuth = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const check = vGoogleFbAuth(req.body);
  if (check) return next();
  const data: TData[] = [];
  for (const err of vGoogleFbAuth.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
    console.log(data);
  }
  throw new HttpUnprocessableEntity('Change Password Fail !', data);
};

export default validate;
