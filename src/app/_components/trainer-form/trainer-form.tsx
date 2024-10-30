'use client';
import { Grid2 } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Autocomplete } from '@/lib/components/autocomplete';
import { Button } from '@/lib/components/button';
import { Input } from '@/lib/components/input';
import { Label } from '@/lib/components/label';
import { Paper } from '@/lib/components/paper';

export const TrainerForm = () => {
  const pokemons = [
    { label: 'The Godfather', id: '1' },
    { label: 'Pulp Fiction', id: '2' }
  ];

  return (
    <Box display='grid' gap='24px' width='100%'>
      <Typography variant='subtitle1' ml='auto'>
        Wednesday, 06.03.2024
      </Typography>

      <Grid2 container columnSpacing='24px'>
        <Grid2 size={6}>
          <Label htmlFor='name'>Trainer&apos;s name</Label>
          <Input id='name' name='name' placeholder="Trainer's name" />
        </Grid2>
        <Grid2 size={6}>
          <Label htmlFor='age'>Trainer&apos;s age</Label>
          <Input
            type='number'
            id='age'
            name='age'
            placeholder="Trainer's age"
          />
        </Grid2>
      </Grid2>

      <Box>
        <Label htmlFor='pokemon'>Pokemon name</Label>
        <Autocomplete
          options={pokemons}
          renderInput={(params) => (
            <Input name='pokemon' placeholder='Pokemon name' {...params} />
          )}
        />
      </Box>

      <Paper sx={{ height: '254px' }}></Paper>

      <Box display='flex' gap='16px' ml='auto'>
        <Button color='soft'>Reset</Button>
        <Button color='primary'>Submit</Button>
      </Box>
    </Box>
  );
};
