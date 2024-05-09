import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.72} cx={6} cy={6} r={6} fill='#FF3B30' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
