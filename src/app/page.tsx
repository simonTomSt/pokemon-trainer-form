import { Suspense } from 'react';
import { Box } from '@mui/material';
import { Paper } from '@/lib/components/paper';
import {
  CurrentDateInfo,
  CurrentDateInfoSkeleton
} from './_components/current-date-info';
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
          <Box display='grid' gap='24px' width='100%'>
            <Suspense fallback={<CurrentDateInfoSkeleton />}>
              <CurrentDateInfo />
            </Suspense>

            <TrainerForm />
          </Box>
        </Paper>
      </Box>
    </main>
  );
}
