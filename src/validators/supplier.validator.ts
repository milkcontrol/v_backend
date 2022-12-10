import Ajv, {DefinedError} from 'ajv';
import {NextFunction, Request, Response} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';

const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    companyName: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactFirstName: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactLastName: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactTitle: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactPhone: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactFax: {
      allowNull: true,
      type: {type: 'string'},
    },
    contactEmail: {
      allowNull: true,
      type: {type: 'string'},
    },
    website: {
      allowNull: true,
      type: {type: 'string'},
    },
    headOfficeAddressId: {
      allowNull: true,
      type: {type: 'integer'},
    },
  },
  required: ['companyName'],
  additionalProperties: false,
};

const compileCheck = ajv.compile(schema);

const validate = (req: Request, res: Response, next: NextFunction) => {
  const check = compileCheck(req.body);
  if (check) return next();
  const data: TData[] = [];
  for (const err of compileCheck.errors as DefinedError[]) {
    const item: TData = {type: err?.keyword};
    if ('missingProperty' in err.params)
      item.field = err?.params?.missingProperty;
    if (err?.message) item.message = err?.message;
    data.push(item);
  }
  throw new HttpUnprocessableEntity('Supplier Fail !', data);
};

export default validate;
