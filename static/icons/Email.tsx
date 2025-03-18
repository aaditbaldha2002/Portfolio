import React from 'react';
import { theme } from '../../src/lib/theme/theme';
import SvgProps from './type';
const Email: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      filter={`drop-shadow(0 0 1em ${colorTheme.blue}) drop-shadow(0 0 0.5em ${colorTheme.light_blue})`}
    >
      <path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
        stroke={colorTheme.white}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Email;
