import { memo, SVGProps } from 'react';

const MaterialSymbolsDashboardOutlin = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z' fill='#6425FE' />
  </svg>
);

const Memo = memo(MaterialSymbolsDashboardOutlin);
export { Memo as MaterialSymbolsDashboardOutlin };
