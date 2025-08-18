export type Location = {
  name: string;
  url: string;
};

export type Origin = Location;

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type ResultData = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<Character>;
};

export interface CharactersApiProps {
  page?: number;
  name?: string;
  status?: string;
  species?: string;
}

export interface CharactersPageState extends CharactersApiProps {
  currentCharacter: Character | null;
  isModalOpen: boolean;
}
