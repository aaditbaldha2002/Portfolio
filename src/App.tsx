import React, { ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillCard } from './lib/components/SkillCard';
import SkillBg from '../static/Skill_Bg.svg';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillCardsWrapper>
          <SkillCard type={'LANGUAGES'} />
          <SkillCard type={'DATABASES'} />
          <SkillCard type={'TECHNOLOGY'} />
        </SkillCardsWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

const SkillCardsWrapper = styled.div`
  padding: 1em 1em;
  background: url(${SkillBg});
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
