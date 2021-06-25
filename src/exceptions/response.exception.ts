import { ResponseErrorInterface } from './response_error.interface';
export class ResponseError extends Error {
  responseError: ResponseErrorInterface;
  constructor(responseError: ResponseErrorInterface) {
    super(responseError.message);
    this.responseError = responseError;
  }
}
