import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';
import Cursor from './lib/components/Cursor';
import { SkillSection } from './lib/components/SkillSection';

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <IntroSection name="Aadit Harshal Baldha" />
        <SkillSection />
        <TempSpace />
        <TempSpace />
        <TempSpace />
        <NavBar />
        <Cursor />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  font-family: 'Tektur', sans-serif;
  cursor: none;
`;

const TempSpace = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
