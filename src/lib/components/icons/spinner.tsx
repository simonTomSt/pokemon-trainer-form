import { SVGProps } from 'react';

const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      fill='#2A2A2A'
      fillRule='evenodd'
      d='M9.187 1.687a8.334 8.334 0 1 0 9.167 8.292h-1.667a6.667 6.667 0 1 1-7.5-6.615V1.687Z'
      clipRule='evenodd'
    />
  </svg>
);
export default Spinner;
