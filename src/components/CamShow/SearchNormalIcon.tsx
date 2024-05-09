import { memo, SVGProps } from 'react';

const SearchNormalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.66667 14C11.1645 14 14 11.1645 14 7.66667C14 4.16886 11.1645 1.33333 7.66667 1.33333C4.16886 1.33333 1.33333 4.16886 1.33333 7.66667C1.33333 11.1645 4.16886 14 7.66667 14Z'
      stroke='#A49F9F'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.6667 14.6667L13.3333 13.3333' stroke='#A49F9F' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(SearchNormalIcon);
export { Memo as SearchNormalIcon };
