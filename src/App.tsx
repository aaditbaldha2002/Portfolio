import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillSection } from './lib/components/SkillSection';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  // const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillSection />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  position: relative;
  font-family: 'Tektur', sans-serif;
  overflow-x: hidden;
`;

export default App;
