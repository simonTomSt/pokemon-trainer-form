import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import { useDebounceValue } from 'usehooks-ts';
import { searchPokemons } from '@/lib/api/pokemon/search-pokemons';
import Chevron from '@/lib/components/icons/chevron';
import { Input } from '@/lib/components/input';
import { Label } from '@/lib/components/label';
import { Loader } from '@/lib/components/loader';

type Props = {
  error?: string;
  onValueSelect: (value: string) => void;
};

export const PokemonAutocomplete = ({ error, onValueSelect }: Props) => {
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

  return (
    <Box>
      <Label htmlFor='pokemon'>Pokemon name</Label>
      <Autocomplete
        disableClearable
        options={data?.pokemons || []}
        loading={isFetching}
        getOptionLabel={(o) => o.name}
        onInputChange={(_e, value, reason) =>
          reason === 'input' && setPokemonName(value)
        }
        onChange={(_e, value) =>
          value?.id && onValueSelect(value.id.toString())
        }
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
            name='pokemon'
            placeholder='Choose'
            error={!!error?.length}
            helperText={error}
            {...params}
          />
        )}
      />
    </Box>
  );
};
