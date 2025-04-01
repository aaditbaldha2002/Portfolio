import React, { ReactNode } from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';
import NavBar from './lib/components/NavBar';
import BlueDaggerPNG from '../static/pictures/blue_dagger.png';

const App: React.FC = (): ReactNode => {
  const [activeSection, SetActiveSection] = React.useState<number>(0);
  // const [scrollY, SetScrollY] = React.useState(window.scrollY);

  React.useEffect(() => {
    // SetScrollY(window.innerHeight * activeSection);
    window.scrollTo({
      left: 0,
      top: window.innerHeight * activeSection,
      behavior: 'smooth',
    });
  }, [activeSection]);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <NavBar
          activeSection={activeSection}
          changeActiveSection={(num: number) => SetActiveSection(num)}
        />
        <IntroSection name="Aadit Harshal Baldha" />
        <TempSpace />
        <TempSpace />
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
  cursor: url(${BlueDaggerPNG}), auto;
`;

const TempSpace = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
