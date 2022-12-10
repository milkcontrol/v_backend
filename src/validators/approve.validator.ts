import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpBadRequest, HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IApproveData {
  userId: string,
  userStatus: number,
}

const schema: JSONSchemaType<IApproveData> = {
  type: 'object',
  properties: {
    userId: {
      type: 'string',
    },
    userStatus: {
      type: 'number',
    },
  },
  required: ['userId', 'userStatus'],
  additionalProperties: true,
};

const vApprove = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const userStatus = Number(req.query['userStatus']);
  if(userStatus !== 1 && userStatus !== 2 && userStatus !== 3) throw new HttpBadRequest("Invalid user status!")
  const check = vApprove({
    userId: req.query['userId'],
    userStatus: Number(req.query['userStatus']),
  });
  if (check) return next();
  const data: TData[] = [];
  for (const err of vApprove.errors as DefinedError[]) {
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
