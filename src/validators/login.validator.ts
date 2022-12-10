import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv({allErrors:true});

export interface ILoginData {
  username: string;
  password: string;
}

const schema: JSONSchemaType<ILoginData> = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
    },
  },
  required: ['password'],
  additionalProperties: false,
};

const vLogin = ajv.compile(schema);
function isNumber(value: any) {
  return !isNaN(parseInt(value));
}

const validate = (req: Request, res: Response, next: NextFunction) => {
  let regex: RegExp;
  let check: boolean;
  if (!isNumber(req.body.username)) {
    regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    check = vLogin(req.body);
    req.body.userType = 0;
  } else {
    regex = RegExp('^[0-9\\-\\+]{9,15}$');
    check = vLogin(req.body);
    req.body.userType = 1;
  }

  if (!regex.test(req.body.username)) {
    throw new HttpUnprocessableEntity('Login Fail !', [
      {
        type: 'required',
        field: 'username',
        message: "must have required property 'username'",
      },
    ]);
  }

  if (check) return next();
  const data: TData[] = [];
  for (const err of vLogin.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
  }

  throw new HttpUnprocessableEntity('Login Fail !', data);
};

export default validate;


