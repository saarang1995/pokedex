import { ResponseInterface } from './../interfaces/response.interface';
import { Response } from 'express';
import { ResponseError } from '../exceptions/response.exception';
import Network from '../constants/network';

export default class ResponseFormatter {
  /**
   * @description Returns Response Interface Object with Success Message and Code
   * @param data
   */
  public static getSuccessResponse(data: Object): ResponseInterface {
    return {
      data,
      message: Network.ERROR_CODES.SUCCESS.message,
      error: Network.ERROR_CODES.SUCCESS.code,
    };
  }

  public static sendSuccessResponse(res: Response, data: Object): void {
    const response: ResponseInterface = {
      data,
      message: Network.ERROR_CODES.SUCCESS.message,
      error: Network.ERROR_CODES.SUCCESS.code,
    };
    res.send(response);
  }

  /**
   * @description Returns Response Interface Object with Invalid Message and Code
   * @param data
   */
  public static getInvalidParameterResponse(
    data: Array<Object>
  ): ResponseInterface {
    return {
      data,
      message: Network.ERROR_CODES.INVALID_PARAMETER.message,
      error: Network.ERROR_CODES.INVALID_PARAMETER.code,
    };
  }

  /**
   * @description Format and send error Response
   * @param error
   * @param res
   * @param data
   */

  /**
   * @description Format and send error Response
   * @param error
   * @param res
   * @param data
   */
  public static sendErrorResponse(
    res: Response,
    exception: ResponseError,
    status: number = Network.HTTP_STATUS_CODE['Bad Request']
  ): void {
    let response: ResponseInterface;
    if (exception && exception['message'] && exception['code']) {
      response = {
        data: {},
        message: exception.message,
        error: exception['code'],
      };
    } else if (exception instanceof ResponseError) {
      response = {
        data: {},
        message: exception.responseError.message,
        error: exception.responseError.code,
      };
    } else {
      response = {
        data: {},
        message: Network.ERROR_CODES.UNHANDLED.message,
        error: Network.ERROR_CODES.UNHANDLED.code,
      };
    }

    res.status(status).send(response);
  }
}
