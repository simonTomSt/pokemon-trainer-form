import { Box } from '@mui/material';
import { Paper } from '@/lib/components/paper';
import { TrainerForm } from './_components/trainer-form/trainer-form';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Paper sx={{ maxWidth: '544px', padding: '32px', width: '100%' }}>
          <TrainerForm />
        </Paper>
      </Box>
    </main>
  );
}
