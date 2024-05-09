import { memo, SVGProps } from 'react';

const IconParkOutlineStockMarketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 20.0002L12 3.71208' stroke='#808080' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5 20.0002V5.00017M19 17.0002V10.5002M19 6.00017V2.00017'
      stroke='#808080'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 10.0001H8V17.0001H2V10.0001ZM9 6.00008H15V13.0001H9V6.00008Z' fill='#84828A' />
    <path d='M16 5.00008H22V11.5001H16V5.00008Z' fill='#84828A' />
  </svg>
);

const Memo = memo(IconParkOutlineStockMarketIcon);
export { Memo as IconParkOutlineStockMarketIcon };
