import Ajv, {DefinedError, JSONSchemaType} from "ajv";
import {Request, Response, NextFunction} from 'express';
import {TData} from "./interface.validator";
import {HttpUnprocessableEntity} from "../lib/http.exception";

const ajv = new Ajv();

export interface LoginData {
  password: string
}

const schema: JSONSchemaType<LoginData> = {
  type: "object",
  properties: {
    password: {
      type: "string",
      minLength: 6,
      maxLength: 20,
    },
  },
  required: ["password"],
  additionalProperties: false
}

const vDelete = ajv.compile(schema)

const validate  = (req: Request, res: Response, next: NextFunction) => {
  let checkLogin = vDelete(req.body)
  if(checkLogin) return next();
  const data: TData[] = [];
  for(const err of vDelete.errors as DefinedError[]) {
    const item: TData ={type: err.keyword}
    if("missingProperty" in err.params) item.field = err.params.missingProperty
    if (!item.field) item.field = err.instancePath;
    if(err.message) item.message = err.message
    data.push(item)
    console.log(data)
  }

  throw new HttpUnprocessableEntity('Login Fail !', data)
}

export default validate
