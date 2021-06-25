import { Application, Request, Response } from 'express';

module.exports = (app: Application) => {
  app.get('/ping', (req: Request, res: Response) => {
    res.send('PONG!!');
  });
};
