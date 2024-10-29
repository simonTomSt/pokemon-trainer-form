'use client';
import { Button } from '@/lib/components/button';
import { Chip } from '@/lib/components/chip';

export default function Home() {
  return (
    <>
      <Button color='primary'>Hello World</Button>
      <Button color='soft'>Hello World</Button>
      <Chip label='Some text' />
    </>
  );
}
