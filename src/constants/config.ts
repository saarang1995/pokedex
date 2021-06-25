require('dotenv').config();

export default class Config {
  static readonly SERVER_PORT = process.env.SERVER_PORT || 3000;
  static readonly BASE_URL = {
    POKE_API: 'https://pokeapi.co/api/v2/' || process.env.POKE_API_BASE_URL,
    TRANSLATION_API:
      'https://api.funtranslations.com/translate/' ||
      process.env.TRANSLATION_API_BASE_URL,
  };
}
