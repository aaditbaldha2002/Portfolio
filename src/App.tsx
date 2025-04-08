import React, { ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';
import Cursor from './lib/components/Cursor';
import { SkillSection } from './lib/components/SkillSection';
import { CertSection } from './lib/components/CertSection';

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <IntroSection name="Aadit Harshal Baldha" />
      <SkillSection />
      <CertSection />

      <Cursor />
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black}, ${props.theme.darkest_blue})`};
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: 'Tektur', sans-serif;
  cursor: none;
`;

export default App;
