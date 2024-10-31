import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { getCurrentTime } from '@/lib/api/time/get-current-time';

export const CurrentDateInfo = async () => {
  const data = await getCurrentTime();

  const formattedDate = new Date(data.dateTime)
    .toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$1.$2.$3');

  return (
    <Typography variant='subtitle1' ml='auto' data-testid='current-date'>
      {formattedDate}
    </Typography>
  );
};

export const CurrentDateInfoSkeleton = () => (
  <Skeleton
    variant='rectangular'
    width={130}
    height={20}
    sx={{ marginLeft: 'auto' }}
  />
);
