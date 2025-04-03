import React from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components';
import { TextTyper } from './TextTyper';
import DpImg from '../../../static/dp.jpeg';
import ContactSection from './ContactSection';
interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  const theme = useTheme();

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
        <DpWrapper data-testid="Dp-wrapper-test-id">
          <DpImage
            data-testid="Dp-img-test-id"
            animateDpClick={animateDpClick}
            ref={dpRef}
          />
        </DpWrapper>
        <InfoWrapper data-testid="Info-wrapper-test-id">
          <NameWrapper
            data-testid="Name-wrapper-test-id"
            gateOpened={gateOpened}
          >
            <TextTyper
              text={name}
              size="4rem"
              weight="normal"
              color={theme.white}
              margin="0.5em"
              data-testid="Name-texttyper-test-id"
              letterSpacing="5px"
            />
            <Role>Frontend Developer</Role>
          </NameWrapper>

          <SummaryWrapper
            gateOpened={gateOpened}
            data-testid="summaryWrapper-test-id"
          >
            Creating dynamic web applications with React and TypeScript.
            Passionate about blending technology and design to craft seamless
            user experiences
          </SummaryWrapper>
        </InfoWrapper>
        <ContactSection />
      </ContentWrapper>
    </Wrapper>
  );
};

const changeBg = keyframes`
  from {
    background-position:100% 0%;
  }
  to {
    background-position: 0% 0%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: flex-end;
  background: ${(props) =>
    `linear-gradient(135deg,${props.theme.black} 50%,transparent 50.1%)`};
  background-size: 250%;
  background-position: 100% 0%;
  animation: ${changeBg} 1s ease-in forwards;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 1em;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }
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
`;

const DpWrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin: 0em 1em;

  @media (max-width: 640px) {
    width: 100%;
    margin: 0em;
  }
`;

const DpImage = styled.div<{ animateDpClick: boolean }>`
  width: 228px;
  height: 228px;
  background-image: url(${DpImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: ${(props) => `5px solid ${props.theme.blue}`};
  transform: scale(1);
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease,
    border 0.5s ease;

  animation: auraPulse 2s infinite alternate;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
    cursor: pointer;
    ${(props) =>
      props.animateDpClick &&
      css`
        animation: auraPulseDischarge 0.25s linear forwards;
      `}
  }

  @keyframes auraPulse {
    from {
      transform: scale(1);
      box-shadow: 0 0 40px 5px ${(props) => props.theme.darker_blue};
      border: ${(props) => `5px solid ${props.theme.blue}`};
    }
    to {
      transform: scale(1.05);
      box-shadow: 0 0 60px 10px ${(props) => props.theme.blue};
      border: ${(props) => `5px solid ${props.theme.blue}`};
    }
  }

  @keyframes auraPulseDischarge {
    0% {
      transform: scale(0.95);
      box-shadow: var(--box-shadow-value);
      text-shadow: initial;
    }
    50% {
      transform: scale(1.05);
      text-shadow: initial;
    }
    100% {
      transform: scale(1);
      text-shadow: initial;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0em 2em;
`;

const NameWrapper = styled.div<{ gateOpened: boolean }>`
  position: relative;
  margin: 1em 0em 2em;
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
`;

const Role = styled.div`
  color: ${(props) => props.theme.blue};
  font-size: 2rem;
  word-spacing: 0.25em;
  line-height: 0.75em;
  text-shadow: none;
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
