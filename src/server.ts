import { Server } from 'http';
import Config from './constants/config';
import PaymentApplication from './app';

export default class PokedexServer {
  constructor(private port?: number) {}

  async boot(): Promise<Server> {
    const paymentApplication = new PaymentApplication(
      this.port || Number(Config.SERVER_PORT)
    );

    const pokedexServer: Server = await paymentApplication.start();

    pokedexServer.on('close', () => {
      console.log('------------------ CLOSING ------------------');
      // Graceful shutdown logic
      console.log('------------------ CLOSED ------------------');
      // FIXME: Causes Integration test to exit
      // process.exit(0); // mark it as successful exit
    });
    // Needed here as may encounter bugs in bootstrapping
    process.on('uncaughtException', (err) => {
      console.error('UncaughtException ', err);
    });

    process.on('unhandledRejection', (err) => {
      console.error('UnhandledRejection ', err);
    });
    return pokedexServer;
  }
}

new PokedexServer().boot();
