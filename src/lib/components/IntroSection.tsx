import React from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components';
import { TextTyper } from './TextTyper';
import DpImg from '../../../static/dp.jpeg';
import MonarchPNG from '../../../static/pictures/Monarch.png';
import ParallexImg from './ParallexImg';
interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  const theme = useTheme();

  const [gateOpened, setGateOpened] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setGateOpened(true);
    }, 1500);
    setTimeout(() => {});
  }, [gateOpened]);
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
          <DpImage data-testid="Dp-img-test-id" />
        </DpWrapper>
        <ParallexImg src={MonarchPNG} alt="Sung Jin woo" bottom="0px" />
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
  background: ${(props) =>
    `linear-gradient(135deg,${props.theme.black} 50%,transparent 50.1%)`};
  background-size: 250%;
  background-position: 100% 0%;
  animation: ${changeBg} 0.75s linear forwards;
  display: flex;
  flex-direction: row;
  gap: 1em;
  overflow: hidden;
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

const GateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.25s linear forwards;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  overflow-x: hidden;
  height: 326px;
`;

const goLeft = keyframes`
  from{
    transform: translateX(0%);
  }to{
    transform: translateX(-100%);
  }
`;

const LeftGate = styled.div`
  display: flex;
  justify-content: left;
  background: ${(props) => `linear-gradient(
    -135deg,
    ${props.theme.gate_blue},
    ${props.theme.black} 90%
  )`};
  width: 50vw;
  align-self: stretch;
  animation: ${goLeft} 1s ease-in forwards;
  box-shadow: -10px 0 30px ${(props) => props.theme.purple};
`;

const goRight = keyframes`
  from{
    transform: translateX(0%);
  }to{
    transform: translateX(100%);
  }
`;

const RightGate = styled.div`
  display: flex;
  background: ${(props) => `linear-gradient(
    135deg,
    ${props.theme.gate_blue},
    ${props.theme.black} 90%
  )`};
  width: 50vw;
  align-self: stretch;
  animation: 1s ${goRight} ease-in forwards;
  box-shadow: 10px 0 30px ${(props) => props.theme.purple};
`;

const ContentWrapper = styled.div<{ gateOpened: boolean }>`
  width: 100%;
  display: flex;
  position: relative;
  padding: 2em;
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

const DpImage = styled.div`
  width: 228px;
  height: 228px;
  background-image: url(${DpImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: ${(props) => `5px solid ${props.theme.purple}`};
  animation: auraPulse 2s infinite alternate;
  @keyframes auraPulse {
    from {
      transform: scale(1);
      box-shadow: 0 0 40px 5px ${(props) => props.theme.darker_blue};
      border: ${(props) => `5px solid ${props.theme.darker_blue}`};
    }
    to {
      transform: scale(1.05);
      box-shadow: 0 0 60px 10px ${(props) => props.theme.blue};
      border: ${(props) => `5px solid ${props.theme.blue}`};
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 0em 2em;
`;

const NameWrapper = styled.div<{ gateOpened: boolean }>`
  position: relative;
  margin: 1em 0em 2em;
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
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  word-spacing: 0.25em;
  line-height: 0.75em;
`;

const SummaryWrapper = styled.div<{ gateOpened: boolean }>`
  font-size: 25px;
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
