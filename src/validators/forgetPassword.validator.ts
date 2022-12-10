import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface ForgetPassData {
  username: string;
}
export interface ChangeForgetPassData {
  newPassword: string;
  confirmPassword: string;
  forgetPassToken: string;
  code: string;
}

const schemaForgetPass: JSONSchemaType<ForgetPassData> = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
    },
  },
  required: ['username'],
  additionalProperties: true,
};
const schemaChangeFPass: JSONSchemaType<ChangeForgetPassData> = {
  type: 'object',
  properties: {
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
    forgetPassToken: {
      type: 'string',
    },
    code: {
      type: 'string',
      maxLength: 6,
      minLength: 6,
    },
  },
  required: ['newPassword', 'confirmPassword', 'forgetPassToken', 'code'],
  additionalProperties: true,
};

const vForgetPass = ajv.compile(schemaForgetPass);
const vChangeForgetPass = ajv.compile(schemaChangeFPass);
let vPass: any = vForgetPass;

const validate = (req: Request, res: Response, next: NextFunction) => {
  let check = vForgetPass(req.body);
  if (req.path === '/change-forget-password') {
    check = vChangeForgetPass(req.body);
    vPass = vChangeForgetPass;
  }
  if (check) return next();
  const data: TData[] = [];
  for (const err of vPass.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
  }
  throw new HttpUnprocessableEntity('Forget Password Fail !', data);
};

export default validate;
