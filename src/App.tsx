import React, { ReactNode } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <NavBar />
        <IntroSection name="Aadit Harshal Baldha" />
        <TempSpace />
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
  overflow-x: hidden;
`;

const TempSpace = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
