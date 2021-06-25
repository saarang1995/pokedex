export default class Config {
  static readonly SERVER_PORT = process.env.SERVER_PORT || 3000;
  static readonly BASE_URL = {
    POKEAPI:
      'https://pokeapi.co/api/v2/' || process.env.POKEAPI_SERVICE_BASE_URL,
  };
}
