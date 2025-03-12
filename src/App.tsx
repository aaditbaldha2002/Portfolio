import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillCard } from './lib/components/SkillCard';
import { SkillNotification } from './lib/components/SkillNotification';
import { reducer } from './lib/reducer/reducer';
import { AppState, initState } from './lib/state/initState';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  const notificationDataMap: Record<
    string,
    {
      skillName: string;
      proficiency_level: string;
      category: string;
      attributes: string[];
    }
  > = React.useMemo(
    () => ({
      Java: {
        skillName: 'Java',
        proficiency_level: 'Low',
        category: 'programming',
        attributes: ['Java 1', 'Java 2'],
      },
      Python: {
        skillName: 'Python',
        proficiency_level: 'Medium',
        category: 'programming',
        attributes: ['Python 1', 'Python 2'],
      },
      JavaScript: {
        skillName: 'JavaScript',
        proficiency_level: 'High',
        category: 'programming',
        attributes: ['JavaScript 1', 'JavaScript 2'],
      },
      Typescript: {
        skillName: 'Typescript',
        proficiency_level: 'High',
        category: 'programming',
        attributes: ['Typescript 1', 'Typescript 2'],
      },
      MySQL: {
        skillName: 'MySQL',
        proficiency_level: 'High',
        category: 'database',
        attributes: ['MySQL 1', 'MySQL 2'],
      },
      PostgreSQL: {
        skillName: 'PostgreSQL',
        proficiency_level: 'High',
        category: 'database',
        attributes: ['PostgreSQL 1', 'PostgreSQL 2'],
      },
      MongoDB: {
        skillName: 'MongoDB',
        proficiency_level: 'Medium',
        category: 'database',
        attributes: ['MongoDB 1', 'MongoDB 2'],
      },
      Oracle: {
        skillName: 'Oracle',
        proficiency_level: 'Low',
        category: 'database',
        attributes: ['Oracle 1', 'Oracle 2'],
      },
      Git: {
        skillName: 'Git',
        proficiency_level: 'High',
        category: 'version control',
        attributes: ['Git 1', 'Git 2'],
      },
      Github: {
        skillName: 'Github',
        proficiency_level: 'High',
        category: 'version control',
        attributes: ['Github 1', 'Github 2'],
      },
      React: {
        skillName: 'React',
        proficiency_level: 'High',
        category: 'front-end framework',
        attributes: ['React 1', 'React 2'],
      },
      ExpressJS: {
        skillName: 'ExpressJS',
        proficiency_level: 'High',
        category: 'back-end framework',
        attributes: ['ExpressJS 1', 'ExpressJS 2'],
      },
      Stylus: {
        skillName: 'Stylus',
        proficiency_level: 'High',
        category: 'CSS preprocessor',
        attributes: ['Stylus 1', 'Stylus 2'],
      },
      SASS: {
        skillName: 'SASS',
        proficiency_level: 'High',
        category: 'CSS preprocessor',
        attributes: ['SASS 1', 'SASS 2'],
      },
    }),
    [],
  );

  const [cardIndexShowed, setCardIndexShowed] = React.useState(-1);
  const [state, dispatch] = React.useReducer(reducer, initState);

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
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillCardsWrapper>
          <SkillCard
            type={'LANGUAGES'}
            cardIndex={0}
            showCard={cardIndexShowed}
            dispatch={dispatch}
          />
          <SkillCard
            type={'DATABASES'}
            cardIndex={1}
            showCard={cardIndexShowed}
            dispatch={dispatch}
          />
          <SkillCard
            type={'TECHNOLOGY'}
            cardIndex={2}
            showCard={cardIndexShowed}
            dispatch={dispatch}
          />
        </SkillCardsWrapper>
        {state.showSkillPopup && (
          <SkillNotification
            notificationData={notificationDataMap[state.skillPopupName]}
            dispatch={dispatch}
          />
        )}
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  position: relative;
`;

const SkillCardsWrapper = styled.div`
  padding: 3em 1em;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
`;
export default App;
