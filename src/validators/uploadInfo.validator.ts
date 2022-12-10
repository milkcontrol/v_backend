import Ajv, {DefinedError, JSONSchemaType} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

export interface IUploadINfo {
  specificBankId: number;
  accountNumber: string;
  owner: string;
  nextToken: string;
  protectorId: number;
  parentId: string;
}

const schema: JSONSchemaType<IUploadINfo> = {
  type: 'object',
  properties: {
    specificBankId: {
      type: 'number',
    },
    accountNumber: {
      type: 'string',
    },
    owner: {
      type: 'string',
    },
    nextToken: {
      type: 'string',
    },
    protectorId: {
      type: 'number',
    },
    parentId: {
      type: 'string',
    },
  },
  required: ['specificBankId', 'accountNumber', 'owner', 'nextToken'],
  additionalProperties: true,
};

const vUploadInfo = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.error) return next();
  const reqBody: any = req.body;
  req.body.specificBankId = Number(req.body.specificBankId);
  if (req.body.protectorId) reqBody.protectorId = Number(req.body.protectorId);
  if (req.body.parentId) reqBody.parentId = req.body.parentId;
  const check = vUploadInfo(reqBody);
  if (check) return next();
  const data: TData[] = [];
  for (const err of vUploadInfo.errors as DefinedError[]) {
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
