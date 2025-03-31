import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { SkillCard } from './SkillCard';
import { SkillNotification } from './SkillNotification';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
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
import SvgProps from '../../../static/icons/type';

export const SkillSection: React.FC = (props) => {
  const notificationDataMap: Record<
    string,
    {
      skillName: string;
      proficiency_level: string;
      category: string;
      attributes: string[];
      origins: string;
      iconSVG: ReactElement<SvgProps>;
    }
  > = React.useMemo(
    () => ({
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
        category: 'stylesheet language',
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
        category: 'programming',
        attributes: [
          'Enhancing user experiences with DOM manipulation and event handling.',
          'Writing clean and optimized code with arrow functions, destructuring, and modules.',
        ],
        origins: 'Created by Brendan Eich in 1995',
        iconSVG: <JS height="200px" width="200px" />,
      },
      Typescript: {
        skillName: 'Typescript',
        proficiency_level: 'Medium',
        category: 'programming',
        attributes: [
          'Enhancing code reliability with static typing and type inference.',
          'Leveraging interfaces, generics, and decorators for better development',
        ],
        origins: 'created by Microsoft and first released in 2012',
        iconSVG: <TS height="200px" width="200px" />,
      },
      React: {
        skillName: 'React',
        proficiency_level: 'High',
        category: 'front-end framework',
        attributes: [
          ' Building scalable and reusable UIs with functional components and hooks.',
          'Improving performance with React.memo, lazy loading, and code splitting.',
        ],
        origins:
          'created by Jordan Walke, a software engineer at Facebook, in 2011',
        iconSVG: <ReactIcon height="200px" width="200px" />,
      },
      SASS: {
        skillName: 'SASS',
        proficiency_level: 'Low',
        category: 'CSS Preprocessor',
        attributes: [
          ' Utilizing variables, mixins, and nesting to write reusable and maintainable styles.',
          'Enhancing CSS with mathematical operations and custom functions for dynamic designs.',
        ],
        origins: 'created by Hampton Catlin in 2006',
        iconSVG: <SASS height="200px" width="200px" />,
      },
      Git: {
        skillName: 'Git',
        proficiency_level: 'Medium',
        category: 'version control',
        attributes: [
          'Efficiently managing project versions and tracking changes with commit history.',
          'Collaborating seamlessly through branches and handling merge conflicts effectively.',
        ],
        origins: 'Created by Linus Torvalds in 2005',
        iconSVG: <Git height="200px" width="200px" />,
      },
      Github: {
        skillName: 'Github',
        proficiency_level: 'Medium',
        category: 'web platform',
        attributes: [
          ' Organizing tasks, bugs, and feature requests with issues and project',
          ' Automating workflows and deployments through GitHub Actions for efficient development pipelines',
        ],
        origins:
          'Created by Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon in 2008',
        iconSVG: <Github height="200px" width="200px" />,
      },
      ESLint: {
        skillName: 'ESLint',
        proficiency_level: 'High',
        category: 'code linter',
        attributes: [
          'Enforcing consistent code style and best practices across projects.',
          'Catching syntax and logical errors early in the development process.',
        ],
        origins: 'created by Nicholas C. Zakas in 2013',
        iconSVG: <ESLintSVG height="200px" width="200px" />,
      },
      Prettier: {
        skillName: 'Prettier',
        proficiency_level: 'Medium',
        category: 'code formatter',
        attributes: [
          'Automatically formats code to maintain a consistent style across the project',
          'Reduces formatting debates in teams by enforcing a unified code style',
        ],
        origins: 'Created by James Long in 2017.',
        iconSVG: <Prettier width="200px" height="200px" />,
      },
      Webpack: {
        skillName: 'Webpack',
        proficiency_level: 'Low',
        category: 'bundler',
        attributes: [
          'Efficiently combining and optimizing JavaScript, CSS, and assets for faster load times.',
          'Improving performance by breaking large files into smaller, on-demand bundles',
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
        origins: 'created by the Babel team in 2014',
        iconSVG: <Babel height="200px" width="200px" />,
      },
      Jest: {
        skillName: 'Jest',
        proficiency_level: 'Low',
        category: 'testing framework',
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
        category: 'e2e testing',
        attributes: [
          'Automating user interactions to validate entire workflows and ensure application reliability.',
          'Running tests directly in the browser for faster feedback and accurate results.',
        ],
        origins: 'Created by Brian Mann in 2015',
        iconSVG: <Cypress height="200px" width="200px" />,
      },
    }),
    [],
  );
  const [cardIndexShowed, setCardIndexShowed] = React.useState(-1);
  const [skillPopupName, setSkillPopupName] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(PopupMP3));

  const handleBtnClick = React.useCallback(() => {
    return (props: string) => {
      if (audioRef.current) {
        if (props !== skillPopupName && skillPopupName !== '') {
          setShowNotification(false);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
          setTimeout(() => {
            setSkillPopupName(props);
            setShowNotification(true);
          }, 350);
        } else {
          setShowNotification(true);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
          setSkillPopupName(props);
        }
      }
    };
  }, [skillPopupName]);

  const handleCloseNotification = React.useCallback(() => {
    setShowNotification(false);
    setTimeout(() => {
      setSkillPopupName('');
    }, 350);
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCardIndexShowed((prevIndex) => prevIndex + 1);
    }, 250);

    const timeOutId = setTimeout(() => {
      clearInterval(intervalId);
      setCardIndexShowed(2);
    }, 1500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>SKILLS</Title>
      </TitleWrapper>
      <SkillCardsWrapper>
        <SkillCard
          type={'FRONTEND'}
          cardIndex={0}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
        <SkillCard
          type={'REPO SYNC'}
          cardIndex={1}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
        <SkillCard
          type={'DEV TOOLS'}
          cardIndex={2}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
        {skillPopupName !== '' && (
          <SkillNotification
            notificationData={notificationDataMap[skillPopupName]}
            handlePopupClose={handleCloseNotification}
            skillPopupName={skillPopupName}
            showPopup={showNotification}
          />
        )}
      </SkillCardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 3em 1em;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100vw;
  flex-direction: column;
  row-gap: 5em;
  justify-content: space-around;
  align-items: center;
  background-repeat: repeat-y;
  color: ${(props) => props.theme.white};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2em;
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(10px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  display: flex;
  padding: 1em 2em;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;

  animation: ${fadeIn} 1s ease-out;
`;

const SkillCardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
  width: 100%;
`;
