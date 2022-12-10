import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface ChangePassData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  isRevokeAll: number;
}

const schema: JSONSchemaType<ChangePassData> = {
  type: 'object',
  properties: {
    oldPassword: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
    },
    newPassword: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
    },
    confirmPassword: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
    },
    isRevokeAll: {
      type: 'number',
    },
  },
  required: ['oldPassword', 'newPassword', 'confirmPassword', 'isRevokeAll'],
  additionalProperties: true,
};

const vChangePass = ajv.compile(schema);
function isNumber(value: any) {
  return !isNaN(parseInt(value));
}

const validate = (req: Request, res: Response, next: NextFunction) => {
  if (!isNumber(Number(req.body.isRevokeAll)))
    throw new HttpUnprocessableEntity('must be number!');
  if (Number(req.body.isRevokeAll) !== 0 && Number(req.body.isRevokeAll) !== 1)
    throw new HttpUnprocessableEntity('invalid isRevokeAll!');
  req.body.isRevokeAll = Number(req.body.isRevokeAll);
  const check = vChangePass(req.body);
  if (check) return next();
  const data: TData[] = [];
  for (const err of vChangePass.errors as DefinedError[]) {
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
