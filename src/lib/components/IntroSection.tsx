import React from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components';
import { TextTyper } from './TextTyper';
import ContactSection from './ContactSection';
import Dp from './Dp';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useWindowHeight } from '../hooks/useWindowHeight';
interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  const theme = useTheme();
  const width = useWindowWidth();
  const height = useWindowHeight();
  const isMobile = width < 768;
  const heightOk = height > 600;

  const [gateOpened, setGateOpened] = React.useState(false);
  const [animateDpClick, setAnimateDpClick] = React.useState(false);
  const dpRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setGateOpened(true);
    }, 1500);
    setTimeout(() => {});
  }, [gateOpened]);

  React.useEffect(() => {
    if (!dpRef.current) return;
    else {
      const element = dpRef.current;
      const handleDpClick = () => {
        if (dpRef.current) {
          const computedStyle = window.getComputedStyle(element);
          const boxShadow = computedStyle.getPropertyValue('box-shadow');
          element.style.setProperty('--box-shadow-value', boxShadow);
          setAnimateDpClick(true);
          setTimeout(() => setAnimateDpClick(false), 250);
        } else {
          return;
        }
      };
      element.addEventListener('click', handleDpClick);
    }
  }, []);

  return (
    <Wrapper
      data-testid="wrapper-test-id"
      onAnimationEnd={() => setGateOpened(true)}
    >
      <ContentWrapper
        gateOpened={gateOpened}
        data-testid="ContentWrapper-test-id"
      >
        <Dp ref={dpRef} animateDpClick={animateDpClick} />
        <InfoWrapper data-testid="Info-wrapper-test-id">
          <NameWrapper
            data-testid="Name-wrapper-test-id"
            gateOpened={gateOpened}
          >
            <TextTyper
              text={name}
              size={isMobile ? '2rem' : '4rem'}
              weight="normal"
              color={theme.white}
              margin="0.5em"
              data-testid="Name-texttyper-test-id"
              letterSpacing="5px"
            />
          </NameWrapper>
          <Role>Frontend Developer</Role>

          {!isMobile && heightOk && (
            <SummaryWrapper
              gateOpened={gateOpened}
              data-testid="summaryWrapper-test-id"
            >
              Frontend developer crafting performant, accessible, and responsive
              interfaces using React and TypeScript. Focused on clean
              architecture, reusable components, and user-centered design
            </SummaryWrapper>
          )}
        </InfoWrapper>
        <ContactSection />
      </ContentWrapper>
    </Wrapper>
  );
};

const slideBg = keyframes`
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${(props) =>
    `linear-gradient(135deg,${props.theme.black} 49%,transparent 50%)`};
  background-size: 500% 100%;
  background-position: 100% 100%;
  animation: ${slideBg} 1s ease-in forwards;
  will-change: background-position;

  box-sizing: border-box;
  scroll-snap-align: start;
  gap: 1em;
  padding: 93px 1em 1em;
`;

const fadeIn = keyframes`
  from{
    opacity:0;
  }to{
    opacity:1;
  }
`;

const ContentWrapper = styled.div<{ gateOpened: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2em;
  box-sizing: border-box;
  opacity: 0;
  ${(props) =>
    props.gateOpened &&
    css`
      animation: 0.15s ${fadeIn} linear forwards;
    `};
  user-select: none;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  gap: 1em;
`;

const NameWrapper = styled.div<{ gateOpened: boolean }>`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.white};
  @media (max-width: 640px) {
    text-align: center;
  }
  ${(props) =>
    props.gateOpened &&
    css`
      animation: textGlitchTitle 1.5s linear forwards;
    `}
  @keyframes textGlitchTitle {
    10% {
      text-shadow: -10px -10px 0px ${(props) => props.theme.red};
    }
    11% {
      text-shadow: 0px 0px 0px;
    }
    15% {
      text-shadow: -10px 10px 0px ${(props) => props.theme.light_blue};
    }
    16% {
      text-shadow: 0px 0px 0px;
    }
    100% {
      text-shadow:
        0px 0px 4em ${(props) => props.theme.blue},
        0px 0px 2em ${(props) => props.theme.blue},
        0px 0px 0.75em ${(props) => props.theme.blue};
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Role = styled.div`
  color: ${(props) => props.theme.blue};
  font-size: 2rem;
  word-spacing: 0.25em;
  line-height: 0.75em;
  text-shadow: none;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SummaryWrapper = styled.div<{ gateOpened: boolean }>`
  text-align: center;
  font-size: 1.25em;
  color: ${(props) => props.theme.white_75_translucent};
  margin-bottom: 0.75em;
  position: relative;
  width: 62.5%;
  ${(props) =>
    props.gateOpened &&
    css`
      animation: textGlitch 1.5s linear forwards;
    `}

  @keyframes textGlitch {
    10% {
      text-shadow: -10px -10px 0px ${(props) => props.theme.red};
    }
    11% {
      text-shadow: 0px 0px 0px;
    }
    15% {
      text-shadow: -10px 10px 0px ${(props) => props.theme.light_blue};
    }
    16% {
      text-shadow: 0px 0px 0px;
    }
    100% {
      text-shadow:
        0px 0px 1em ${(props) => props.theme.blue},
        0px 0px 0.5em ${(props) => props.theme.blue};
    }
  }
`;
