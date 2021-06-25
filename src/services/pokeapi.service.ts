import axios, { AxiosResponse } from 'axios';
import Config from '../constants/config';
import Network from '../constants/network';
import PokeDexData from '../interfaces/pokedex_data.interface';
import Pokemon from '../interfaces/poke_api_response_interfaces/pokemon.interface';
import Species from '../interfaces/poke_api_response_interfaces/species.interface';

/**
 * Responsible for handling all the outgoing api calls to PokeAPI server
 */
export default class PokeApiService {
  private BASE_URL = Config.BASE_URL.POKEAPI;
  private APIS = {
    POKEMON: this.BASE_URL + 'pokemon/', // {id or name} -> use this for getting id of pokemon
    HABITAT: this.BASE_URL + 'pokemon-habitat/', // {id or name} -> use this for Further details about habitat
    CHARACTERISTICS: this.BASE_URL + 'characteristic/', // {id} -> use this for description
    SPECIES: this.BASE_URL + 'pokemon-species/', // {id or name} -> use this for habitat and is_legendary
  };

  public async getPokemonData(name: string): Promise<PokeDexData> {
    let speciesResponse: AxiosResponse;

    try {
      speciesResponse = await axios.get(this.APIS.SPECIES + name);
    } catch (error) {
      throw Network.ERROR_CODES.POKEMON_NOT_FOUND;
    }
    const speciesData: Species = speciesResponse.data;
    const pokedexData: PokeDexData = {
      name: speciesData.name,
      habitat: speciesData.habitat.name,
      isLegendary: speciesData.is_legendary,
      description: speciesData.flavor_text_entries[0].flavor_text,
    };
    return pokedexData;
  }
}
