import { Application, Request, Response } from 'express';
import PokemonRoute from './pokemon.route';

// Route index file for all the routes in the project
module.exports = (app: Application) => {
  app.get('/ping', (req: Request, res: Response) => {
    res.send('PONG!!');
  });
  app.use('/pokemon', new PokemonRoute().routerInstance());
};
