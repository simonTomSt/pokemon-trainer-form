import { NextRequest } from 'next/server';
import Fuse from 'fuse.js';
import pokemonList from './pokemon-list.json';

const fuse = new Fuse(pokemonList.data, {
  keys: ['name']
});

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const name = url.searchParams.get('name');

  const pokemons = !name?.length ? [] : fuse.search(name).map((r) => r.item);

  // A 300ms delay to simulate real-world API response time for a more realistic user experience
  await new Promise((resolve) => setTimeout(resolve, 300));

  return Response.json({ pokemons });
}
