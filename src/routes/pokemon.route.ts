import * as express from 'express';
import { Request, Response } from 'express';
import PokemonController from '../controllers/pokemon.controller';
import PokemonService from '../services/pokemon.service';

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
  }

  private static getPokemonControllerInstance(req: Request): PokemonController {
    return new PokemonController(new PokemonService());
  }
}
