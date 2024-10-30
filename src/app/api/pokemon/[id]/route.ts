import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `${process.env.POKEMON_API_URL}/pokemon/${params.id}`
  );

  const pokemon = await res.json();

  return Response.json({ pokemon });
}
