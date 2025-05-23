import React from 'react';
import SvgProps from './type';
import { theme } from '../../src/lib/theme/theme';

const ESLintSVG: React.FC<SvgProps> = (props) => {
  const colorTheme = theme;
  return (
    <svg
      fill={colorTheme.white}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      filter={`drop-shadow(0 0 1em ${colorTheme.blue}) drop-shadow(0 0 0.5em ${colorTheme.light_blue})`}
    >
      <path d="M7.257 9.132 11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32m16.595 2.398-5.446-9.475c-.198-.343-.564-.596-.96-.596H6.555c-.396 0-.762.253-.96.596L.149 11.509a1.127 1.127 0 0 0 0 1.117l5.447 9.398c.197.342.563.517.959.517h10.893c.395 0 .76-.17.959-.512l5.446-9.413a1.069 1.069 0 0 0 0-1.086m-4.51 4.556a.4.4 0 0 1-.204.338L12.2 20.426a.395.395 0 0 1-.392 0l-6.943-4.002a.4.4 0 0 1-.205-.338V8.08c0-.14.083-.269.204-.338L11.8 3.74c.12-.07.272-.07.392 0l6.943 4.003a.4.4 0 0 1 .206.338z" />
    </svg>
  );
};

export default ESLintSVG;
