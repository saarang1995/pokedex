import { Translation } from './../enums/translation.enum';
export default class HelperService {
  /**
   * @description Replaces \n, \r, \t, \f with ' ' in a string
   * @param input
   */
  removeWhitespaceEscapeCharsFromString(input: string) {
    const output = input.replace(/[\n\r\t\f]/g, ' ');
    return output;
  }

  /**
   * @description returns type of translation based on inputs
   * @param habitat Pokemon's Habitat
   * @param isLegendary Pokemon's property
   */
  getTranslationType(habitat: string, isLegendary: boolean): Translation {
    const translation: Translation =
      habitat == 'cave' || isLegendary
        ? Translation.YODA
        : Translation.SHAKESPEARE;

    return translation;
  }

  /**
   * @description checks if the input is number or not
   * @param input
   * @returns boolean
   */
  isNumber(input: string): boolean {
    const inputConvertedToNumber = Number(input);
    return !isNaN(inputConvertedToNumber);
  }

  printApiServer(message: string, error: any) {
    if (error.isAxiosError) {
      console.error(message, error.response);
    } else {
      console.error(message, error);
    }
  }
}
