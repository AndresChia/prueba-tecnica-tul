export interface GraphCharacters {
  characters: Characters;
}

export interface Characters {
  info: InfoCharacter;
  results: Array<ResultCharacter>;
}

export interface InfoCharacter {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface ResultCharacter {
  name: string;
}

export interface FilterGraph {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}
