import Image from 'next/image';
import { Box, Grid2, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '@/lib/api/pokemon/get-pokemon-details';
import { Chip } from '@/lib/components/chip';

type Props = {
  pokemonId: string;
};
export const PokemonDetails = ({ pokemonId = '' }: Props) => {
  const { data, isError, error } = useQuery({
    queryKey: ['pokemon-details', pokemonId],
    queryFn: () => getPokemonDetails(pokemonId),
    enabled: !!pokemonId.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });

  const pokemon = data?.pokemon;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {!pokemon ? (
        <Typography
          variant='body2'
          position='absolute'
          left='50%'
          top='50%'
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          {!isError
            ? 'Your pokemon'
            : error?.message || "Couldn't fetch the pokemon, try again"}
        </Typography>
      ) : (
        <Grid2
          container
          width='100%'
          gap='24px'
          direction='row'
          justifyContent='center'
        >
          <Grid2 size={5}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={194}
              height={196}
            />
          </Grid2>
          <Grid2
            size={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Typography>Name: {pokemon.name}</Typography>
            <Box display='flex' alignItems='center' gap='8px'>
              <Typography>Type: </Typography>
              {pokemon.types.map(({ type }) => (
                <Chip key={type.name} label={type.name} />
              ))}
            </Box>
            <Typography>Base experience: {pokemon.base_experience}</Typography>
            <Typography>Id: {pokemon.id}</Typography>
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};
