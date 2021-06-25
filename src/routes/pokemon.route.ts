import * as express from 'express';
import { Request, Response } from 'express';
import PokemonController from '../controllers/pokemon.controller';
import PokeApiService from '../services/pokeapi.service';
import PokemonService from '../services/pokemon.service';
import TranslatorService from '../services/translator.service';
import HelperService from '../utils/helper.service';

export default class PokemonRoute {
  private router = express.Router();
  constructor() {
    this.initRoutes();
  }
  routerInstance() {
    return this.router;
  }

  initRoutes() {
    this.router.get('/:name', (req: Request, res: Response) => {
      const pokemonController = PokemonRoute.getPokemonControllerInstance(req);
      pokemonController.getInformation(req, res);
    });
    this.router.get('/translated/:name', (req: Request, res: Response) => {
      const pokemonController = PokemonRoute.getPokemonControllerInstance(req);
      pokemonController.getTranslatedInformation(req, res);
    });
  }

  private static getPokemonControllerInstance(req: Request): PokemonController {
    return new PokemonController(
      new PokemonService(
        new PokeApiService(new HelperService()),
        new TranslatorService(),
        new HelperService()
      )
    );
  }
}
