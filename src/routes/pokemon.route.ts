import * as express from 'express';
import { Request, Response } from 'express';
import PokemonController from '../controllers/pokemon.controller';
import PokemonMiddleware from '../middlewares/pokemon.middleware';
import PokeApiService from '../services/pokeapi.service';
import PokemonService from '../services/pokemon.service';
import TranslatorService from '../services/translator.service';
import HelperService from '../utils/helper.service';

// Route for providing Pokemon data
export default class PokemonRoute {
  private router = express.Router();
  constructor() {
    this.initRoutes();
  }
  routerInstance() {
    return this.router;
  }

  initRoutes() {
    this.router.get(
      '/:name',
      PokemonMiddleware.checkIfNameIsString,
      (req: Request, res: Response) => {
        const pokemonController = PokemonRoute.getPokemonControllerInstance();
        pokemonController.getInformation(req, res);
      }
    );
    this.router.get(
      '/translated/:name',
      PokemonMiddleware.checkIfNameIsString,
      (req: Request, res: Response) => {
        const pokemonController = PokemonRoute.getPokemonControllerInstance();
        pokemonController.getTranslatedInformation(req, res);
      }
    );
  }

  private static getPokemonControllerInstance(): PokemonController {
    const translatorService = new HelperService();
    return new PokemonController(
      new PokemonService(
        new PokeApiService(new HelperService()),
        new TranslatorService(translatorService),
        translatorService
      )
    );
  }
}
