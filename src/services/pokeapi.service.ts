import { FlavorTextEntry } from './../interfaces/api_response_interfaces/species.interface';
import axios, { AxiosResponse } from 'axios';
import Config from '../constants/config';
import Network from '../constants/network';
import PokeDexData from '../interfaces/pokedex_data.interface';

import Species from '../interfaces/api_response_interfaces/species.interface';
import HelperService from '../utils/helper.service';

/**
 * Responsible for handling all the outgoing api calls to PokeAPI server
 */
export default class PokeApiService {
  private BASE_URL = Config.BASE_URL.POKE_API;
  private APIS = {
    POKEMON: this.BASE_URL + 'pokemon/', // {id or name} -> use this for getting id of pokemon
    HABITAT: this.BASE_URL + 'pokemon-habitat/', // {id or name} -> use this for Further details about habitat
    CHARACTERISTICS: this.BASE_URL + 'characteristic/', // {id} -> use this for description
    SPECIES: this.BASE_URL + 'pokemon-species/', // {id or name} -> use this for habitat and is_legendary
  };

  constructor(private helperService: HelperService) {}

  /**
   * @description Get pokemon data from PokeAPI and format the response
   * @param name
   * @returns PokeDexData
   */
  public async getPokemonData(name: string): Promise<PokeDexData> {
    let speciesResponse: AxiosResponse;

    try {
      speciesResponse = await axios.get(this.APIS.SPECIES + name);
    } catch (error) {
      this.helperService.printApiServer(
        'Error while fetching Pokemon Data',
        error
      );
      throw Network.ERROR_CODES.POKEMON_NOT_FOUND;
    }
    const speciesData: Species = speciesResponse.data;

    let description: string = null;
    let pokemonName: string = null;
    let habitat: string = null;
    let isLegendary: boolean = null;

    // Null pointer check in case the data is corrupted
    if (speciesData) {
      pokemonName = speciesData.name;
      habitat = speciesData.habitat.name;
      pokemonName = speciesData.name;
      isLegendary = speciesData.is_legendary;

      if (speciesData.flavor_text_entries) {
        const englishFlavorTest = this.getFirstEnglishFlavorText(
          speciesData.flavor_text_entries
        );

        description =
          this.helperService.removeWhitespaceEscapeCharsFromString(
            englishFlavorTest
          );
      }
    }

    return {
      name: pokemonName,
      habitat,
      isLegendary,
      description,
    };
  }

  public getFirstEnglishFlavorText(flavorTextEntries: FlavorTextEntry[]) {
    const englishFlavorTextEntry = flavorTextEntries.find(
      (flavorText) =>
        flavorText &&
        flavorText.language &&
        flavorText.language.name &&
        flavorText.language.name == 'en'
    );
    return englishFlavorTextEntry ? englishFlavorTextEntry.flavor_text : null;
  }
}
