import { expect } from 'chai';
import HelperService from './helper.service';

const helperService = new HelperService();
describe('removeWhitespaceEscapeCharsFromString', () => {
  it('Should remove whitespace escape characters from String with a whitespace', () => {
    const input =
      'It was created by\na scientist after\nyears of horrific\fgene splicing and\nDNA engineering\nexperiments.';

    const expectedOutput =
      'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.';
    const formattedString =
      helperService.removeWhitespaceEscapeCharsFromString(input);

    expect(formattedString).to.be.eq(expectedOutput);
  });
});
