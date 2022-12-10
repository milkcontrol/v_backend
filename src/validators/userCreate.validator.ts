import Ajv, {DefinedError, JSONSchemaType, ValidateFunction} from 'ajv';
import {Request, Response, NextFunction} from 'express';
import {TData} from './interface.validator';
import {HttpUnprocessableEntity} from '../lib/http.exception';
import addFormats from 'ajv-formats';
import { policy } from '../routes';

const ajvUser = new Ajv({allErrors:true});
addFormats(ajvUser);
const ajvPdone = new Ajv({allErrors:true});
addFormats(ajvPdone);

export interface IUserData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  policyId: number;
}
export interface IPDoneData {
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  identityNumber: string;
  dateRelease: string;
  placeRelease: string;
  countryId: number;
  cityId: number;
  specificAddress: string;
  currentCountryId: number;
  currentStateId: number;
  currentCityId: number;
  currentSpecificAddress: string;
  stateId: number;
  height: number;
  width: number;
  bloodTypeId: number;
  maritalStatus: string;
  education: string;
  job: string;
  interests: string;
  talent: string;
  genderTypeId: number;
  policyId: number;
}

const schemaUser: JSONSchemaType<IUserData> = {
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
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    policyId: {
      type: 'number',
    },
  },
  required: ['username','firstName', 'lastName', 'password','policyId'],
  additionalProperties: true,
};
const schemaPDone: JSONSchemaType<IPDoneData> = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
      minLength: 10,
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
    },
    birthday: {
      format: 'date-time',
      type: 'string',
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
    identityNumber: {
      type: 'string',
    },
    dateRelease: {
      type: 'string',
    },
    placeRelease: {
      type: 'string',
    },
    countryId: {
      type: 'number',
    },
    cityId: {
      type: 'number',
    },
    specificAddress: {
      type: 'string',
    },
    currentCountryId:{
      type: 'number',
    },
    currentStateId: {
      type: 'number',
    },
    currentCityId: {
      type: 'number',
    },
    currentSpecificAddress: {
      type: 'string',
    },
    stateId: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
    width: {
      type: 'number',
    },
    bloodTypeId: {
      type: 'number',
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
    genderTypeId: {
      type: 'number',
    },
    policyId: {
      type: 'number',
    },
  },
  required: [
    'firstName',
    'lastName',
    'displayName',
    'phoneNumber',
    'email',
    'birthday',
    'countryId',
    'cityId',
    'stateId',
    'specificAddress',
    'currentCountryId',
    'currentCityId',
    'currentStateId',
    'currentSpecificAddress',
    'identityNumber',
    'dateRelease',
    'placeRelease',
    'password',
    'genderTypeId',
    'policyId',
  ],
  additionalProperties: true,
};

// PDone
// validate is a type guard for MyData - type is inferred from schema type
const vUserCreate = ajvUser.compile(schemaUser);
const vPDoneCreate = ajvPdone.compile(schemaPDone);
let vCreate: ValidateFunction<any> = vPDoneCreate;

function isNumber(value: any) {
  return !isNaN(parseInt(value));
}

const validate = (req: Request, res: Response, next: NextFunction) => {
  const data: TData[] = [];
  if (
    !req.query['role'] &&
    Number(req.query['role']) !== 4 &&
    Number(req.query['role']) !== 8
  )
    throw new HttpUnprocessableEntity('User Create Fail !', {
      type: 'required',
      query: 'role',
      message: 'Invalid role !',
    });

  if (Number(req.query['role']) === 4) {
    req.body.policyId = Number(req.body.policyId);
    vCreate = vUserCreate;
    let regex: RegExp;
    if (!isNumber(req.body.username)) {
      regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      req.body.userType = 0;
    } else {
      regex = RegExp('^[0-9\\-\\+]{9,15}$');
      req.body.userType = 1;
    }
    if (req.body.username && !regex.test(req.body.username)) {
      throw new HttpUnprocessableEntity('User Create Fail !', [
        {
          type: 'required',
          field: 'username',
          message: "must have required property 'username'",
        },
      ]);
    }
  }

  let dataReq: any = req.body;
  if (Number(req.query['role']) === 8)
    dataReq = {
      ...req.body,
      genderTypeId: Number(req.body.genderTypeId),
      countryId: Number(req.body.countryId),
      stateId: Number(req.body.stateId),
      cityId: Number(req.body.cityId),
      currentCountryId: Number(req.body.countryId),
      currentStateId: Number(req.body.stateId),
      currentCityId: Number(req.body.cityId),
      width: Number(req.body.width),
      height: Number(req.body.height),
      policyId: Number(req.body.policyId),
      bloodTypeId: Number(req.body.bloodTypeId),
    };
  const check = vCreate(dataReq);
  if (check) return next();
  for (const err of vCreate.errors as DefinedError[]) {
    const item: TData = {type: err.keyword};
    if ('missingProperty' in err.params)
      item.field = err.params.missingProperty;
    if (!item.field) item.field = err.instancePath;

    if (err.message) item.message = err.message;
    data.push(item);
  }

  throw new HttpUnprocessableEntity('User Create Fail !', data);
};

export default validate;
