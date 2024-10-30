export interface PokemonData {
  pokemon: Pokemon;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonSearchData {
  pokemons: PokemonSearchItem[];
}

export interface PokemonSearchItem {
  name: string;
  id: number;
}
