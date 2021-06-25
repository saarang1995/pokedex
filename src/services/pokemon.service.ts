import PokeApiService from './pokeapi.service';

/**
 * Responsible for handling Pokedex server -> pokemon APIs
 */
export default class PokemonService {
  constructor(private pokeApiService: PokeApiService) {}
  public async getInformation(name: string) {
    const response = this.pokeApiService.getPokemonData(name);
    return response;
  }
}
