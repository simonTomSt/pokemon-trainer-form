import { useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import { Control, Controller } from 'react-hook-form';
import { useDebounceValue } from 'usehooks-ts';
import { searchPokemons } from '@/lib/api/pokemon/search-pokemons';
import Chevron from '@/lib/components/icons/chevron';
import { Input } from '@/lib/components/input';
import { Label } from '@/lib/components/label';
import { Loader } from '@/lib/components/loader';
import { type TrainerFormValues } from './tainer.schema';

type Props = {
  control: Control<TrainerFormValues>;
};

export const PokemonAutocomplete = ({ control }: Props) => {
  const [pokemonName, setPokemonName] = useDebounceValue('', 500);

  const { data, isFetching } = useQuery({
    queryKey: ['search-pokemons', pokemonName],
    queryFn: () => searchPokemons(pokemonName),
    enabled: !!pokemonName.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    throwOnError: true
  });

  const pokemons = useMemo(
    () => data?.pokemons?.map((p) => ({ ...p, id: p.id.toString() })) ?? [],
    [data]
  );

  return (
    <Box>
      <Label htmlFor='pokemon'>Pokemon name</Label>
      <Controller
        render={({ field: { ref, onChange, onBlur, value }, fieldState }) => (
          <Autocomplete
            ref={ref}
            value={value}
            disableClearable
            options={pokemons}
            loading={isFetching}
            getOptionLabel={(o) => o.name}
            onInputChange={(_e, value) => {
              setPokemonName(value);
            }}
            onChange={(_e, value) => {
              onChange(value);
            }}
            onBlur={onBlur}
            filterOptions={(x) => x}
            popupIcon={
              isFetching ? (
                <Loader />
              ) : (
                <Box
                  display='flex'
                  justifyContent={'center'}
                  alignItems={'center'}
                  sx={{ width: '20px', height: '20px' }}
                >
                  <Chevron />
                </Box>
              )
            }
            renderInput={(params) => (
              <Input
                placeholder='Choose'
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...params}
              />
            )}
          />
        )}
        name='pokemon'
        defaultValue={{ id: '', name: '' }}
        control={control}
      />
    </Box>
  );
};
