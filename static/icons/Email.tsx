import React from 'react';
import SvgProps from './type';
import { theme } from '../../src/lib/theme/theme';

const Email: React.FC<SvgProps> = (props) => {
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
      <title>Email me</title>
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Email;
