export class HttpError {
  code!: number;
  message!: string;
  errors?: any;
  errorCode?: string;
}

export class HttpBadRequest extends HttpError {
  constructor(message: string, errors?: any) {
    super();
    this.code = 400;
    this.message = message;
    this.errors = errors;
    this.errorCode = 'E_REQUEST';
  }
}

export class HttpUnAuth extends HttpError {
  constructor(message: string, errorCode?: string) {
    super();
    this.code = 401;
    this.message = message;
    this.errorCode = errorCode || 'E_PERMISSION';
  }
}

export class HttpForbidden extends HttpError {
  constructor(message: string, errorCode?: string) {
    super();
    this.code = 403;
    this.message = message;
    this.errorCode = errorCode;
  }
}

export class HttpNotFoundRequest extends HttpError {
  constructor(message: string, errorCode?: string) {
    super();
    this.code = 404;
    this.message = message;
    this.errorCode = errorCode;
  }
}

export class HttpUnprocessableEntity extends HttpError {
  constructor(message: string, errors?: any) {
    super();
    this.code = 422;
    this.message = message;
    this.errors = errors;
    this.errorCode = 'E_VALIDATE';
  }
}

export const resOK = (data: any, total?: number) => ({
  code: 'SUCCESS',
  data,
  total,
});

export const resErr = (message: string, code?: string, errors?: any) => ({
  code: code || 'ERROR',
  message,
  errors,
});
