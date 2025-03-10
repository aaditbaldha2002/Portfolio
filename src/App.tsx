import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillCard } from './lib/components/SkillCard';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  const [cardIndexShowed, setCardIndexShowed] = React.useState(-1);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCardIndexShowed((prevIndex) => prevIndex + 1);
    }, 250);

    setTimeout(() => {
      clearInterval(intervalId);
      setCardIndexShowed(2);
    }, 1500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillCardsWrapper>
          <SkillCard
            type={'LANGUAGES'}
            cardIndex={0}
            showCard={cardIndexShowed}
          />
          <SkillCard
            type={'DATABASES'}
            cardIndex={1}
            showCard={cardIndexShowed}
          />
          <SkillCard
            type={'TECHNOLOGY'}
            cardIndex={2}
            showCard={cardIndexShowed}
          />
        </SkillCardsWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
`;

const SkillCardsWrapper = styled.div`
  padding: 3em 1em;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
`;
export default App;
