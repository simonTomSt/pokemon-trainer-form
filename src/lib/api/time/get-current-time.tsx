import { TimeData } from '@/lib/types/time-types';

export const getCurrentTime = async (): Promise<TimeData> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/time`, {
    cache: 'no-cache'
  });
  const data = await res.json();

  return data;
};
