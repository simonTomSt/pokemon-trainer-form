import { TimeData } from '@/lib/types/time-types';

export const getCurrentTime = async (): Promise<TimeData> => {
  const res = await fetch(
    `${process.env.TIME_API_URL}/Time/current/zone?timeZone=Europe/Warsaw`,
    {
      cache: 'no-cache'
    }
  );
  const data = await res.json();

  return data;
};
