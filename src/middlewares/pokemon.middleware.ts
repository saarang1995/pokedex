import { NextFunction, Request, Response } from 'express';
import Network from '../constants/network';
import { ResponseError } from '../exceptions/response.exception';
import HelperService from '../utils/helper.service';
import ResponseFormatter from '../utils/response_formatter.service';

// Route middleware : Pokemon
export default class PokemonMiddleware {
  /**
   * This middleware makes sure that the user can only provide a string but not a number
   * Reason: scope of this project says only name should be accepted. However, if we provide
   * a number then `pokemon-species` API returns details of the pokemon of that provided ID
   */

  public static checkIfNameIsString(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const name = req.params.name;
    const helperService = new HelperService();
    const isNumber = helperService.isNumber(name);
    if (isNumber) {
      return ResponseFormatter.sendErrorResponse(
        res,
        new ResponseError(Network.ERROR_CODES.POKEMON_NAME_SHOULD_BE_STRING)
      );
    } else {
      return next();
    }
  }
}
