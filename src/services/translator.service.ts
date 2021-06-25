import { Translation } from './../enums/translation.enum';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Config from '../constants/config';
import TranslationData from '../interfaces/api_response_interfaces/translation_data.interface';

/**
 * Responsible for Translating test [Available options : Shakespeare or Yoda]
 */
export default class TranslatorService {
  private BASE_URL = Config.BASE_URL.TRANSLATION_API;

  private APIS: Map<Translation, string> = new Map([
    [Translation.YODA, this.BASE_URL + 'yoda.json'],
    [Translation.SHAKESPEARE, this.BASE_URL + 'shakespeare.json'],
  ]);

  async getTranslation(text: string, translation: Translation) {
    try {
      debugger;
      const response: AxiosResponse = await axios.post(
        this.APIS.get(translation),
        null,
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
      if (error.isAxiosError) {
        console.error(
          'Error while trying to translate the description',
          error.response
        );
      } else {
        console.error('Error while trying to translate the description', error);
      }

      return text;
    }
  }
}
