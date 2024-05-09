import { memo, SVGProps } from 'react';

const BytesizePortfolioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.75 12.75V21H2.25V12.75M1.5 6H22.5V12C22.5 12 18 15 12 15C6 15 1.5 12 1.5 12V6ZM12 16.5V13.5ZM15 6C15 6 15 3 12 3C9 3 9 6 9 6'
      fill='#84828A'
    />
    <path
      d='M21.75 12.75V21H2.25V12.75M12 16.5V13.5M15 6C15 6 15 3 12 3C9 3 9 6 9 6M1.5 6H22.5V12C22.5 12 18 15 12 15C6 15 1.5 12 1.5 12V6Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(BytesizePortfolioIcon);
export { Memo as BytesizePortfolioIcon };
