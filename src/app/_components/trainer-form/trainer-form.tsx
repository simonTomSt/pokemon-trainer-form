'use client';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { Grid2 } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/lib/components/button';
import { Input } from '@/lib/components/input';
import { Label } from '@/lib/components/label';
import { Paper } from '@/lib/components/paper';
import { PokemonAutocomplete } from './pokemon-autocomplete';
import { PokemonDetails } from './pokemon-details';

const SuccessModal = dynamic(() => import('./success-modal'));

const schema = () =>
  z.object({
    name: z
      .string({ message: 'Field is required' })
      .min(2, 'Required from 2 to 20 symbols')
      .max(20, 'Required from 2 to 20 symbols'),
    age: z
      .number({ message: 'Field is required' })
      .min(16, 'Required range from 16-99')
      .max(99, 'Required range from 16-99'),
    pokemonId: z
      .string({ message: 'Field is required' })
      .min(1, 'Field is required')
  });

type FormValues = z.infer<ReturnType<typeof schema>>;

export const TrainerForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema())
  });
  const pokemonId = form.watch('pokemonId');

  const onSubmit = (data: FormValues) => {
    // Here we would make some API mutation
    console.log(data);
  };

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

        <PokemonAutocomplete
          error={form.formState.errors.pokemonId?.message}
          onValueSelect={(v) => form.setValue('pokemonId', v)}
        />

        <Paper sx={{ height: '254px' }}>
          <PokemonDetails pokemonId={pokemonId} />
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
        onClose={() => form.reset()}
      />
    </form>
  );
};
