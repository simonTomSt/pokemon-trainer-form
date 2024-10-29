'use client';
import { Button } from '@/lib/components/button';
import { Chip } from '@/lib/components/chip';
import { Paper } from '@/lib/components/paper';

export default function Home() {
  return (
    <Paper>
      <Button color='primary'>Hello World</Button>
      <Button color='soft'>Hello World</Button>
      <Chip label='Some text' />
    </Paper>
  );
}
