import React from 'react';
import SvgProps from './type';
import { theme } from '../../src/lib/theme/theme';

const Confirm: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;
  return (
    <svg
      fill={colorTheme.white}
      width={props.width}
      height={props.height}
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="File_Approve">
        <g>
          <path d="M26,24c-0.553,0-1,0.448-1,1v4H7V3h10v7c0,0.552,0.447,1,1,1h7v4c0,0.552,0.447,1,1,1s1-0.448,1-1v-4.903    c0.003-0.033,0.02-0.063,0.02-0.097c0-0.337-0.166-0.635-0.421-0.816l-7.892-7.891c-0.086-0.085-0.187-0.147-0.292-0.195    c-0.031-0.015-0.063-0.023-0.097-0.034c-0.082-0.028-0.166-0.045-0.253-0.05C18.043,1.012,18.022,1,18,1H6C5.447,1,5,1.448,5,2v28    c0,0.552,0.447,1,1,1h20c0.553,0,1-0.448,1-1v-5C27,24.448,26.553,24,26,24z M19,9V4.414L23.586,9H19z" />

          <path
            d="M30.73,15.317c-0.379-0.404-1.01-0.424-1.414-0.047l-10.004,9.36l-4.629-4.332c-0.404-0.378-1.036-0.357-1.414,0.047    c-0.377,0.403-0.356,1.036,0.047,1.413l5.313,4.971c0.192,0.18,0.438,0.27,0.684,0.27s0.491-0.09,0.684-0.27l10.688-10    C31.087,16.353,31.107,15.72,30.73,15.317z"
            fill="green"
          />
        </g>
      </g>
    </svg>
  );
};

export default Confirm;
