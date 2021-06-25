export default interface Species {
  id: number;
  name: string;
  is_legendary: boolean;
  evolution_chain: any;
  flavor_text_entries: FlavorTextEntries[];
  habitat: Habitat;
}

interface FlavorTextEntries {
  flavor_text: string;
  language: object;
  version: object;
}

interface Habitat {
  name: string;
  url: string;
}
