import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';
import Cursor from './lib/components/Cursor';
import { SkillSection } from './lib/components/SkillSection';
import { CertSection } from './lib/components/CertSection';

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <NavBar />
        <IntroSection name="Aadit Harshal Baldha" />
        <SkillSection />
        <CertSection />
        <Cursor />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;

const AppWrapper = styled.div`
  padding-top: 93px;
`;
