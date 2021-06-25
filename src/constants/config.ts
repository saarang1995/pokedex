require('dotenv').config();

// Responsible for Accessing env variables from .env file and providing it across the app
export default class Config {
  static readonly SERVER_PORT = process.env.SERVER_PORT || 3000;
  static readonly BASE_URL = {
    POKE_API: process.env.POKE_API_BASE_URL || 'https://pokeapi.co/api/v2/',
    TRANSLATION_API:
      process.env.TRANSLATION_API_BASE_URL ||
      'https://api.funtranslations.com/translate/',
  };
}
