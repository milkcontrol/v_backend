import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IPolicy {
  policyType: number;
  content: string;
}

const schema: JSONSchemaType<IPolicy> = {
  type: 'object',
  properties: {
    policyType: {
      type: 'number',
    },
    content: {
      type: 'string',
    },
  },
  required: ['policyType', 'content'],
  additionalProperties: true,
};

const vPolicy = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {  
  req.body.policyType = Number(req.body.policyType)
  const check = vPolicy(req.body);
  if (check) return next();
  const data: TData[] = [];
  for (const err of vPolicy.errors as DefinedError[]) {
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
