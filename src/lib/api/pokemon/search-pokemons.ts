import { type PokemonSearchData } from '@/lib/types/pokemon-types';

export const searchPokemons = async (
  pokemonName: string
): Promise<PokemonSearchData> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/search?name=${pokemonName}`,
    {
      cache: 'no-cache'
    }
  );
  const data = await res.json();

  return data;
};
