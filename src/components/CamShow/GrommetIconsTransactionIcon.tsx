import { memo, SVGProps } from 'react';

const GrommetIconsTransactionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 8H18.4M15.2 4L19.2 8L15.2 12M20 16H5.6M8.8 12L4.8 16L8.8 20' stroke='#84828A' strokeWidth={2} />
  </svg>
);

const Memo = memo(GrommetIconsTransactionIcon);
export { Memo as GrommetIconsTransactionIcon };
