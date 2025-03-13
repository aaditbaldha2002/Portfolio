import React, { ReactNode } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { ContactMe } from './lib/components/ContactMe';

export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ContactMe LinkedIn="#" Github="#" Email="#" />
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
  /* overflow-y: clip; */
  /* overflow-x: clip; */
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
