import React, { lazy, Suspense } from 'react';
import { ReactNode } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import Loading from './lib/components/Loading';

const ContactMe = lazy(() => import('./lib/components/ContactMe'));

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Suspense fallback={<Loading />}>
          <ContactMe />
        </Suspense>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black}, ${props.theme.light_black})`};
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0;
  }
`;

export default App;
