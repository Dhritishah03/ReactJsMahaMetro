import { memo, SVGProps } from 'react';

const MdiBankTransferIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17 14V11H20V9L24 12.5L20 16V14H17ZM16 7.7V9H4V7.7L10 4L16 7.7ZM9 10H11V15H9V10ZM5 10H7V15H5V10ZM15 10V12.5L13 14.3V10H15ZM11.1 16L10.5 16.5L12.2 18H4V16H11.1ZM19 15V18H16V20L12 16.5L16 13V15H19Z'
      fill='#84828A'
    />
  </svg>
);

const Memo = memo(MdiBankTransferIcon);
export { Memo as MdiBankTransferIcon };
