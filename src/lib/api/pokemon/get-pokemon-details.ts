import { type PokemonData } from '@/lib/types/pokemon-types';

export const getPokemonDetails = async (
  pokemonId: string
): Promise<PokemonData> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/pokemon/${pokemonId}`,
    {
      cache: 'force-cache',
      next: { revalidate: 3600 * 24 }
    }
  );
  const data = await res.json();

  return data;
};
