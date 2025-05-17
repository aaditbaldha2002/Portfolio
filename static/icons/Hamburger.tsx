import React from 'react';
import SvgProps from './type';
import { theme } from '../../src/lib/theme/theme';

const Hamburger: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={colorTheme.white}
    >
      <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Hamburger;
