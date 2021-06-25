import { Translation } from './../enums/translation.enum';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Config from '../constants/config';
import TranslationData from '../interfaces/api_response_interfaces/translation_data.interface';
import HelperService from '../utils/helper.service';

/**
 * Responsible for Translating test [Available options : Shakespeare or Yoda]
 */
export default class TranslatorService {
  private BASE_URL = Config.BASE_URL.TRANSLATION_API;

  private APIS: Map<Translation, string> = new Map([
    [Translation.YODA, this.BASE_URL + 'yoda.json'],
    [Translation.SHAKESPEARE, this.BASE_URL + 'shakespeare.json'],
  ]);

  constructor(private helperService: HelperService) {}

  /**
   * @description translated text using FunTranslator API
   * @param text
   * @param translation
   * @returns
   */
  async getTranslation(text: string, translation: Translation) {
    try {
      const response: AxiosResponse = await axios.get(
        this.APIS.get(translation),
        {
          params: {
            text,
          },
        }
      );

      const translationData: TranslationData = response.data;
      if (translationData && translationData.success.total <= 0) {
        return text;
      }

      return translationData.contents.translated;
    } catch (error) {
      /**
       * Not throwing error as translation is not compulsory
       * Returning same text (As per the requirement)
       * */
      this.helperService.printApiServer(
        'Error while trying to translate the description',
        error
      );
      return text;
    }
  }
}
