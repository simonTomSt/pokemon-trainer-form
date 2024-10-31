'use client';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid2 } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { Button } from '@/lib/components/button';
import { Input } from '@/lib/components/input';
import { Label } from '@/lib/components/label';
import { Paper } from '@/lib/components/paper';
import { PokemonAutocomplete } from './pokemon-autocomplete';
import { PokemonDetails } from './pokemon-details';
import { TrainerFormValues, trainerSchema } from './tainer.schema';

const SuccessModal = dynamic(() => import('./success-modal'));

export const TrainerForm = () => {
  const form = useForm<TrainerFormValues>({
    resolver: zodResolver(trainerSchema())
  });
  const pokemon = form.watch('pokemon');

  const onSubmit = (data: TrainerFormValues) => {
    // Here we would make some API mutation
    console.log(data);
  };

  console.log(form.formState.errors);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Box display='grid' gap='24px' width='100%'>
        <Grid2 container columnSpacing='24px'>
          <Grid2 size={6}>
            <Label htmlFor='name'>Trainer&apos;s name</Label>
            <Input
              id='name'
              placeholder="Trainer's name"
              error={!!form.formState.errors.name}
              helperText={form.formState.errors.name?.message}
              {...form.register('name')}
            />
          </Grid2>
          <Grid2 size={6}>
            <Label htmlFor='age'>Trainer&apos;s age</Label>
            <Input
              type='number'
              id='age'
              placeholder="Trainer's age"
              error={!!form.formState.errors.age}
              helperText={form.formState.errors.age?.message}
              {...form.register('age', { valueAsNumber: true })}
            />
          </Grid2>
        </Grid2>

        <PokemonAutocomplete control={form.control} />

        <Paper sx={{ height: '254px' }}>
          <PokemonDetails pokemonId={pokemon?.id} />
        </Paper>

        <Box display='flex' gap='16px' ml='auto'>
          <Button color='soft' type='reset' onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </Box>
      </Box>

      <SuccessModal
        open={form.formState.isSubmitSuccessful}
        onClose={form.reset}
      />
    </form>
  );
};
