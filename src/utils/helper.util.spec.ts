import { Translation } from '../enums/translation.enum';
import { expect } from 'chai';
import HelperService from './helper.util';

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

  it('Should be able to handle empty string', () => {
    const input = '';
    const expectedOutput = '';
    const formattedString =
      helperService.removeWhitespaceEscapeCharsFromString(input);

    expect(formattedString).to.be.eq(expectedOutput);
  });

  describe('getTranslationType', () => {
    it('It should return the YODA Translation', () => {
      const translationType = helperService.getTranslationType('cave', false);
      expect(translationType).to.be.eq(Translation.YODA);
    });
    it('It should return the YODA Translation', () => {
      const translationType = helperService.getTranslationType('abc', true);
      expect(translationType).to.be.eq(Translation.YODA);
    });
    it('It should return the YODA Translation', () => {
      const translationType = helperService.getTranslationType('cave', true);
      expect(translationType).to.be.eq(Translation.YODA);
    });
    it('It should return the SHAKESPEARE Translation', () => {
      const translationType = helperService.getTranslationType('abc', false);
      expect(translationType).to.be.eq(Translation.SHAKESPEARE);
    });
    it('It should return the SHAKESPEARE Translation', () => {
      const translationType = helperService.getTranslationType('ionsa', false);
      expect(translationType).to.be.eq(Translation.SHAKESPEARE);
    });
  });

  describe('isNumber', () => {
    it('should be a number', () => {
      const result = helperService.isNumber('5');
      expect(result).to.be.eq(true);
    });
    it('should be a number', () => {
      const result = helperService.isNumber('5.57');
      expect(result).to.be.eq(true);
    });
    it('should not be a number', () => {
      const result = helperService.isNumber('Test');
      expect(result).to.be.eq(false);
    });
    it('should not be a number', () => {
      const result = helperService.isNumber('5s');
      expect(result).to.be.eq(false);
    });
  });
});
