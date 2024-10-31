'use client';

import { Box, Typography } from '@mui/material';
import { Button } from '@/lib/components/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: 2,
            backgroundColor: (theme) => theme.palette.background.default
          }}
        >
          <Typography variant='h4' gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant='body1' sx={{ marginBottom: 4 }}>
            {error.message || 'An unexpected error occurred.'}
          </Typography>
          <Button variant='contained' color='primary' onClick={reset}>
            Try again
          </Button>
        </Box>
      </body>
    </html>
  );
}
