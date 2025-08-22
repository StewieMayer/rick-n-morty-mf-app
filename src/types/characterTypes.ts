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

export type CharacterGender = "female" | "male" | "genderless" | "unknown";
export type CharacterStatus = "alive" | "dead" | "unknown";

export interface CharactersApiProps {
  page?: number;
  name?: string;
  status?: CharacterStatus | string;
  species?: string;
  gender?: CharacterGender | string;
  type?: string;
}

export interface CharactersPageState {
  page: number;
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  loading: boolean;
  error: string | null;
  characters: Array<Character> | [];
  currentCharacter: Character | null;
  isModalOpen: boolean;
}
