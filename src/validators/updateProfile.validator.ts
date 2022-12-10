import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {NextFunction, Request, Response} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IDataUpdate {
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  height: string;
  width: string;
  maritalStatus: string;
  education: string;
  job: string;
  interests: string;
  talent: string;
  protector: number;
  parentId: string;
  genderType: number;
}
const schema: JSONSchemaType<IDataUpdate> = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
      minLength: 10,
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    displayName: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
    width: {
      type: 'string',
    },
    maritalStatus: {
      type: 'string',
    },
    education: {
      type: 'string',
    },
    job: {
      type: 'string',
    },
    interests: {
      type: 'string',
    },
    talent: {
      type: 'string',
    },
    protector: {
      type: 'number',
    },
    parentId: {
      type: 'string',
    },
    genderType: {
      type: 'number',
    },
  },
  required: ['firstName', 'lastName', 'displayName', 'genderType', 'email'],
  additionalProperties: true,
};
const vUpdate = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const checkLogin = vUpdate({
    ...req.body,
    protector: Number(req.body.protector),
    genderType: Number(req.body.genderType),
  });
  if (checkLogin) return next();
  const data: TData[] = [];
  for (const err of vUpdate.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;
    if (err.message) item.message = err.message;
    data.push(item);
    console.log(data);
  }

  throw new HttpUnprocessableEntity('Update Fail !', data);
};

export default validate;
