require('dotenv').config();
import * as express from 'express';
import { urlencoded, json } from 'body-parser';
import { Server } from 'http';
import Network from './constants/network';
export default class PaymentApplication {
  private port: number;
  private app: express.Application;
  private server: Server;
  constructor(port: number = 3000) {
    this.port = port;
    this.app = express();
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.set('port', this.port);
    require('./routes/routes')(this.app);
    this.app.use(this.errorHandler);
  }
  public async start(): Promise<Server> {
    // ready event
    this.app.on('ready', () => {
      console.info('Server is ready');
    });

    this.server = this.app.listen(this.port, () => {
      console.debug(`Server listening on port ${this.port}`);
    });
    return this.server;
  }

  private errorHandler(err, req, res, next) {
    res.status(500);
    res.json({
      data: {},
      message: Network.ERROR_CODES.UNHANDLED.message,
      error: Network.ERROR_CODES.UNHANDLED.code,
    });
  }
}
