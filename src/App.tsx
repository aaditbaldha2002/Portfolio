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
  width: 100%;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: stretch;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

const SkillCardsWrapper = styled.div`
  padding: 2em 2em;
  background: url(${SkillBg});
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
`;
export default App;
