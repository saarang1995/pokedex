import { Translation } from './../enums/translation.enum';
import PokeDexData from '../interfaces/pokedex_data.interface';
import PokeApiService from './pokeapi.service';
import TranslatorService from './translator.service';

/**
 * Responsible for handling Pokedex server -> pokemon APIs
 */
export default class PokemonService {
  constructor(
    private pokeApiService: PokeApiService,
    private translatorService: TranslatorService
  ) {}
  public async getInformation(name: string) {
    const pokeDexData: PokeDexData = await this.pokeApiService.getPokemonData(
      name
    );
    return pokeDexData;
  }

  public async getTranslatedInformation(name: string) {
    const pokeDexData: PokeDexData = await this.pokeApiService.getPokemonData(
      name
    );

    const translation: Translation =
      pokeDexData.habitat == 'cave' || pokeDexData.isLegendary
        ? Translation.YODA
        : Translation.SHAKESPEARE;

    pokeDexData.description = await this.translatorService.getTranslation(
      pokeDexData.description,
      translation
    );

    return pokeDexData;
  }
}
