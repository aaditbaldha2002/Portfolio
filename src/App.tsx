import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <IntroSection name="AADIT HARSHAL BALDHA" />
      </AppWrapper>
      <TempSpace />
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
`;

const TempSpace = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
