export default class HelperService {
  removeWhitespaceEscapeCharsFromString(input: string) {
    const output = input.replace(/[\n\r\t\f]/g, ' ');
    return output;
  }
}
