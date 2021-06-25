import { Request, Response } from 'express';

import PokemonService from '../services/pokemon.service';
import ResponseFormatter from '../utils/response_formatter.service';

export default class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  public async getInformation(req: Request, res: Response) {
    try {
      const response = await this.pokemonService.getInformation();
      return ResponseFormatter.sendSuccessResponse(res, response);
    } catch (exception) {
      ResponseFormatter.sendErrorResponse(res, exception);
    }
  }
}
