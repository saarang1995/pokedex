/**
 * Responsible for handling Pokedex server -> pokemon APIs
 */
export default class PokemonService {
  constructor() {}
  public async getInformation(name: string) {
    return {
      name,
    };
  }
}
