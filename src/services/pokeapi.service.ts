import axios from 'axios';
import Config from '../constants/config';
import Species from '../interfaces/poke_api_response_interfaces/species.interface';

/**
 * Responsible for handling all the outgoing api calls to PokeAPI server
 */
export default class PokeAPIService {
  BASE_URL = Config.BASE_URL.POKEAPI;
  APIS = {
    HABITAT: this.BASE_URL + 'pokemon-habitat/', // {id or name} -> use this for Further details about habitat
    CHARACTERISTICS: this.BASE_URL + 'characteristic/', // {id} -> use this for description
    SPECIES: this.BASE_URL + 'pokemon-species/', // {id or name} -> use this for habitat and is_legendary
  };

  public async getPokemonData(name: string) {
    const speciesResponse: Species = await axios.get(this.APIS.SPECIES + name);
    console.log(speciesResponse);

    const characteristicResponse = await axios.get(
      this.APIS.CHARACTERISTICS + speciesResponse.id
    );
    console.log(characteristicResponse);

    return { speciesResponse, characteristicResponse };
  }
}
