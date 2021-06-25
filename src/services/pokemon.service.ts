import { Translation } from './../enums/translation.enum';
import PokeDexData from '../interfaces/pokedex_data.interface';
import PokeApiService from './pokeapi.service';
import TranslatorService from './translator.service';
import HelperService from '../utils/helper.service';

/**
 * Responsible for handling Pokedex server -> pokemon APIs
 */
export default class PokemonService {
  constructor(
    private pokeApiService: PokeApiService,
    private translatorService: TranslatorService,
    private helperService: HelperService
  ) {}

  /**
   *
   * @param name
   * @returns pokeDexData Object
   */
  public async getInformation(name: string): Promise<PokeDexData> {
    const pokeDexData: PokeDexData = await this.pokeApiService.getPokemonData(
      name
    );
    return pokeDexData;
  }

  /**
   *
   * @param name
   * @returns pokeDexData Object with translated description
   */
  public async getTranslatedInformation(name: string): Promise<PokeDexData> {
    const pokeDexData: PokeDexData = await this.pokeApiService.getPokemonData(
      name
    );
    // Checking which translation to apply
    const translation: Translation = this.helperService.getTranslationType(
      pokeDexData.habitat,
      pokeDexData.isLegendary
    );

    // fetch and update description to a translated description (if available)
    pokeDexData.description = await this.translatorService.getTranslation(
      pokeDexData.description,
      translation
    );

    return pokeDexData;
  }
}
