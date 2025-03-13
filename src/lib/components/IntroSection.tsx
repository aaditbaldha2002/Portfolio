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

  const [gateOpened, setGetOpened] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setGetOpened(true);
    }, 1500);
    setTimeout(() => {});
  }, [gateOpened]);
  return (
    <Wrapper data-testid="wrapper-test-id">
      <GateWrapper data-testid="gatewrapper-test-id" id="gatewrapper-id">
        <LeftGate data-testid="leftgate-test-id" />
        <RightGate data-testid="rightgate-test-id" />
      </GateWrapper>
      <ContentWrapper gateOpened={gateOpened}>
        <DpWrapper data-testid="Dp-wrapper-test-id">
          <DpImage data-testid="Dp-img-test-id" />
        </DpWrapper>
        <InfoWrapper data-testid="Info-wrapper-test-id">
          <NameWrapper
            data-testid="Name-wrapper-test-id"
            gateOpened={gateOpened}
          >
            <TextTyper
              text={name}
              size="45px"
              weight="normal"
              color={theme.white}
              margin="30px"
              data-testid="Name-texttyper-test-id"
              letterSpacing="5px"
            />
          </NameWrapper>
          <ParallexImg src={MonarchPNG} alt="Sung Jin woo" />

          <SummaryWrapper
            gateOpened={gateOpened}
            data-testid="summaryWrapper-test-id"
          >
            I am a passionate Web Developer and Machine Learning student,
            constantly exploring the intersection of frontend development and
            AI-driven solutions. With a strong foundation in React.js,
            JavaScript, and modern web technologies, I build seamless user
            experiences while also delving into the world of machine learning to
            create intelligent and data-driven applications.
          </SummaryWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const changeBg = keyframes`
  from {
    background-position: 100% 0%;
  }
  to {
    background-position: 50% 0%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to left,${props.theme.darkest_blue},${props.theme.black})`};
  animation: ${changeBg} 1.25s ease-in forwards;
  background-size: 200%;
  background-position: 100% 0;
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
  height: 311px;
  width: 100%;
  overflow-x: hidden;
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
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin-right: 1em;

  @media (max-width: 640px) {
    width: 100%;
    margin-right: 0em;
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
  @media (max-width: 640px) {
    text-align: center;
  }
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
        0px 0px 2em ${(props) => props.theme.blue},
        0px 0px 1em ${(props) => props.theme.light_blue};
    }
  }
`;

const SummaryWrapper = styled.div<{ gateOpened: boolean }>`
  font-size: 25px;
  color: ${(props) => props.theme.white};
  margin-bottom: 20px;
  position: relative;
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
        0px 0px 0.75em ${(props) => props.theme.blue},
        0px 0px 0.35em ${(props) => props.theme.light_blue};
    }
  }
`;
