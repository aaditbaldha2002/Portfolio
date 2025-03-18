import React from 'react';
import { theme } from '../../src/lib/theme/theme';
import SvgProps from './type';

const Resume: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;
  return (
    <svg
      height={props.height}
      width={props.width}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      filter={`drop-shadow(0 0 1em ${colorTheme.blue}) drop-shadow(0 0 0.5em ${colorTheme.light_blue})`}
    >
      <g fill={colorTheme.white}>
        <path
          className="st0"
          d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
           c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
        />
        <path
          className="st0"
          d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
           c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
        />
        <path
          className="st0"
          d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
           h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
           c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
           c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
        />
      </g>
    </svg>
  );
};

export default Resume;
