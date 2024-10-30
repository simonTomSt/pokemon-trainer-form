import { SVGProps } from 'react';

const Chevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={10}
    fill='none'
    {...props}
  >
    <path
      fill='#2A2A2A'
      fillRule='evenodd'
      d='m.333 1.893.972-1.06L7 7.047 12.695.833l.972 1.06L7 9.167.333 1.893Z'
      clipRule='evenodd'
    />
  </svg>
);
export default Chevron;
