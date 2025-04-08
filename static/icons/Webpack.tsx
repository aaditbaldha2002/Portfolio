import React from 'react';
import SvgProps from './type';
import { theme } from '../../src/lib/theme/theme';

const Webpack: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;
  return (
    <svg
      fill={colorTheme.white}
      width={props.width}
      height={props.height}
      viewBox="-1 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      filter={`drop-shadow(0 0 1em ${colorTheme.blue}) drop-shadow(0 0 0.5em ${colorTheme.light_blue})`}
    >
      <path d="m20.952 18.5-9.714 5.5v-4.286l6.048-3.334zm.666-.595v-11.52l-3.548 2.071v7.381l3.548 2.048zm-20.952.595 9.714 5.5v-4.286l-6.048-3.334zm-.666-.595v-11.52l3.548 2.071v7.381zm.405-12.262 9.976-5.643v4.143l-6.429 3.548zm20.809 0-9.976-5.643v4.143l6.428 3.548zm-10.833 13.095-5.972-3.287v-6.524l5.976 3.452zm.857 0 5.976-3.286v-6.524l-5.976 3.452zm-6.429-10.548 6-3.31 6 3.31-6 3.453z" />
    </svg>
  );
};

export default Webpack;
