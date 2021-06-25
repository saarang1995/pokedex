import { Application, Request, Response } from 'express';
import PokemonRoute from './pokemon.route';

module.exports = (app: Application) => {
  app.get('/ping', (req: Request, res: Response) => {
    res.send('PONG!!');
  });
  app.use('/pokemon', new PokemonRoute().routerInstance());
};
