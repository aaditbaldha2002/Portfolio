import { ReactElement } from 'react';
import SvgProps from '../../../static/icons/type';
import React from 'react';
import HTML5 from '../../../static/icons/HTML5';
import CSS3 from '../../../static/icons/CSS3';
import JS from '../../../static/icons/JS';
import TS from '../../../static/icons/TS';
import ReactIcon from '../../../static/icons/ReactIcon';
import SASS from '../../../static/icons/SASS';
import Git from '../../../static/icons/Git';
import Github from '../../../static/icons/Github';
import ESLintSVG from '../../../static/icons/ESLintSVG';
import Prettier from '../../../static/icons/Prettier';
import Webpack from '../../../static/icons/Webpack';
import Babel from '../../../static/icons/Babel';
import Jest from '../../../static/icons/Jest';
import Cypress from '../../../static/icons/Cypress';

export type NotifyData = {
  skillName: string;
  proficiency_level: 'Low' | 'Medium' | 'High'; // more specific string literals
  category: string;
  attributes: string[]; // Already fine
  origins: string;
  iconSVG: ReactElement<SvgProps>; // Ensure SvgProps is properly typed for SVG icons
};

export const notificationData: Record<string, NotifyData> = {
  HTML: {
    skillName: 'HTML',
    proficiency_level: 'Medium',
    category: 'Markup Language',
    attributes: [
      'Writing clean and structured HTML for better SEO and accessibility.',
      'Building adaptable web pages with modern HTML5 elements.',
    ],
    origins: 'Created by Tim Berners-Lee in 1991',
    iconSVG: <HTML5 height="200px" width="200px" />,
  },
  CSS3: {
    skillName: 'CSS3',
    proficiency_level: 'Medium',
    category: 'Stylesheet Language',
    attributes: [
      'Creating adaptive layouts using Flexbox, Grid, and media queries.',
      'Designing visually appealing UIs with CSS variables, animations, and transitions.',
    ],
    origins: 'Developed by the World Wide Web Consortium (W3C)',
    iconSVG: <CSS3 height="200px" width="200px" />,
  },
  JavaScript: {
    skillName: 'JavaScript',
    proficiency_level: 'High',
    category: 'Language',
    attributes: [
      'Enhancing user experiences with DOM manipulation and event handling.',
      'Writing clean and optimized code with arrow functions, destructuring, and modules.',
    ],
    origins: 'Created by Brendan Eich in 1995',
    iconSVG: <JS height="200px" width="200px" />,
  },
  TypeScript: {
    skillName: 'TypeScript',
    proficiency_level: 'Medium',
    category: 'Language',
    attributes: [
      'Enhancing code reliability with static typing and type inference.',
      'Leveraging interfaces, generics, and decorators for better development.',
    ],
    origins: 'Created by Microsoft and first released in 2012',
    iconSVG: <TS height="200px" width="200px" />,
  },
  React: {
    skillName: 'React',
    proficiency_level: 'High',
    category: 'Framework',
    attributes: [
      'Building scalable and reusable UIs with functional components and hooks.',
      'Improving performance with React.memo, lazy loading, and code splitting.',
    ],
    origins:
      'Created by Jordan Walke, a software engineer at Facebook, in 2011',
    iconSVG: <ReactIcon height="200px" width="200px" />,
  },
  SASS: {
    skillName: 'SASS',
    proficiency_level: 'Low',
    category: 'CSS Preprocessor',
    attributes: [
      'Utilizing variables, mixins, and nesting to write reusable and maintainable styles.',
      'Enhancing CSS with mathematical operations and custom functions for dynamic designs.',
    ],
    origins: 'Created by Hampton Catlin in 2006',
    iconSVG: <SASS height="200px" width="200px" />,
  },
  Git: {
    skillName: 'Git',
    proficiency_level: 'Medium',
    category: 'Version Control',
    attributes: [
      'Efficiently managing project versions and tracking changes with commit history.',
      'Collaborating seamlessly through branches and handling merge conflicts effectively.',
    ],
    origins: 'Created by Linus Torvalds in 2005',
    iconSVG: <Git height="200px" width="200px" />,
  },
  GitHub: {
    skillName: 'GitHub',
    proficiency_level: 'Medium',
    category: 'Web Platform',
    attributes: [
      'Organizing tasks, bugs, and feature requests with issues and projects.',
      'Automating workflows and deployments through GitHub Actions for efficient development pipelines.',
    ],
    origins:
      'Created by Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon in 2008',
    iconSVG: <Github height="200px" width="200px" />,
  },
  ESLint: {
    skillName: 'ESLint',
    proficiency_level: 'High',
    category: 'Linter',
    attributes: [
      'Enforcing consistent code style and best practices across projects.',
      'Catching syntax and logical errors early in the development process.',
    ],
    origins: 'Created by Nicholas C. Zakas in 2013',
    iconSVG: <ESLintSVG height="200px" width="200px" />,
  },
  Prettier: {
    skillName: 'Prettier',
    proficiency_level: 'Medium',
    category: 'Formatter',
    attributes: [
      'Automatically formats code to maintain a consistent style across the project.',
      'Reduces formatting debates in teams by enforcing a unified code style.',
    ],
    origins: 'Created by James Long in 2017.',
    iconSVG: <Prettier width="200px" height="200px" />,
  },
  Webpack: {
    skillName: 'Webpack',
    proficiency_level: 'Low',
    category: 'Bundler',
    attributes: [
      'Efficiently combining and optimizing JavaScript, CSS, and assets for faster load times.',
      'Improving performance by breaking large files into smaller, on-demand bundles.',
    ],
    origins: 'Created by Tobias Koppers in 2012.',
    iconSVG: <Webpack height="200px" width="200px" />,
  },
  Babel: {
    skillName: 'Babel',
    proficiency_level: 'Low',
    category: 'Transpiler',
    attributes: [
      'Converting modern JavaScript code into backward-compatible versions for wider browser support.',
      'Customizing builds with a rich set of plugins and presets to optimize JavaScript code for different use cases.',
    ],
    origins: 'Created by the Babel team in 2014',
    iconSVG: <Babel height="200px" width="200px" />,
  },
  Jest: {
    skillName: 'Jest',
    proficiency_level: 'Low',
    category: 'Unit Testing',
    attributes: [
      'Automating JavaScript testing with a rich set of assertions, mocks, and spies.',
      'Ensuring code quality and reliability by providing tools for debugging, code coverage, and more.',
    ],
    origins: 'Created by Facebook in 2014',
    iconSVG: <Jest height="200px" width="200px" />,
  },
  Cypress: {
    skillName: 'Cypress',
    proficiency_level: 'Low',
    category: 'E2E Testing',
    attributes: [
      'Automating user interactions to validate entire workflows and ensure application reliability.',
      'Running tests directly in the browser for faster feedback and accurate results.',
    ],
    origins: 'Created by Brian Mann in 2015',
    iconSVG: <Cypress height="200px" width="200px" />,
  },
};
