import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';
import Cursor from './lib/components/Cursor';
import { SkillSection } from './lib/components/SkillSection';

const App: React.FC = (): ReactNode => {
  // const NavBarRef = React.useRef<React.FC>(null);
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <IntroSection name="Aadit Harshal Baldha" />
      <SkillSection />
      <TempSpace />
      <TempSpace />
      <Cursor />
    </ThemeProvider>
  );
};

const TempSpace = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
