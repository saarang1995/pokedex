import { expect } from 'chai';
import HelperService from '../utils/helper.service';
import PokeApiService from './pokeapi.service';

const pokeApiService = new PokeApiService(new HelperService());

describe('getFirstEnglishFlavorText', () => {
  it('Should return valid english flavor text', () => {
    const flavorTextEntries = [
      {
        flavor_text:
          'サイコパワーが　身体の　筋肉を\n増強。　握力は　１トン。\n１００ｍを　２秒で　走れるぞ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'ミュウの　遺伝子と　ほとんど\n同じ。だが　大きさも　性格も\n恐ろしいほど　違っている。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'It was created by\na scientist after\nyears of horrific\fgene splicing and\nDNA engineering\nexperiments.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
    ];

    const expectedOutput = flavorTextEntries[2].flavor_text;
    const outputFound =
      pokeApiService.getFirstEnglishFlavorText(flavorTextEntries);
    expect(outputFound).to.be.eq(expectedOutput);
  });

  it('Should return null as there is no english flavor text', () => {
    const flavorTextEntries = [
      {
        flavor_text:
          'サイコパワーが　身体の　筋肉を\n増強。　握力は　１トン。\n１００ｍを　２秒で　走れるぞ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'ミュウの　遺伝子と　ほとんど\n同じ。だが　大きさも　性格も\n恐ろしいほど　違っている。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
    ];

    const outputFound =
      pokeApiService.getFirstEnglishFlavorText(flavorTextEntries);
    expect(outputFound).to.be.eq(null);
  });
});
