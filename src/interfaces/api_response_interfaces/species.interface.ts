export default interface Species {
  id: number;
  name: string;
  is_legendary: boolean;
  evolution_chain: any;
  flavor_text_entries: FlavorTextEntry[];
  habitat: Habitat;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: object;
}

interface Language {
  name: string;
  url: string;
}

interface Habitat {
  name: string;
  url: string;
}
