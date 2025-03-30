import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
import Confirm from '../../../static/icons/Confirm';
import resume from '../../assets/AaHB_resume.pdf';

interface EmailNotificationProps {
  handlePopupClose: () => void;
  showPopup: boolean;
}

const DownloadNotification: React.FC<EmailNotificationProps> = (props) => {
  const audio = React.useMemo(() => new Audio(PopupMP3), []);
  const handleDownload = React.useCallback(() => {
    const url = resume;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AaHB_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  React.useEffect(() => {
    audio.play();
    handleDownload();
  }, [audio, handleDownload]);

  return (
    <Wrapper showPopup={props.showPopup}>
      <UpperBorder />
      <ContentWrapper>
        <Content>
          <Title>NOTIFICATION</Title>
          <Description>Resume Downloaded Successfully</Description>
          <IconWrapper>
            <Confirm height="50px" width="50px" />
          </IconWrapper>
          <CloseBtn
            onClick={() => {
              props.handlePopupClose();
            }}
          >
            Close
          </CloseBtn>
        </Content>
      </ContentWrapper>
      <LowerBorder />
    </Wrapper>
  );
};

export default DownloadNotification;

const popUp = keyframes`
  0% {
    transform: scaleY(0.1);
    opacity: 0;
  }
  60% {
    transform: scaleY(1.05);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
  }
`;
const popDown = keyframes`
      0% {
        transform: scaleY(1);
      }
      40% {
        transform: scaleY(1.05);
        opacity: 1;
      }
    100% {
    transform: scaleY(0.1);
    opacity: 0;
  }
`;

const Wrapper = styled.div<{ showPopup: boolean }>`
  position: fixed;
  width: 50vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 10vh;
  left: 25vw;
  transform: translate(-50%, -50%);
  z-index: 9999;
  ${(props) =>
    props.showPopup &&
    css`
      animation: ${popUp} 0.35s ease-out forwards;
    `}
  ${(props) =>
    !props.showPopup &&
    css`
      animation: ${popDown} 0.35s ease-out forwards;
    `}
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  width: 95%;
  background: ${(props) =>
    `linear-gradient(to right,transparent 0%,${props.theme.black_75_translucent} 5%,${props.theme.black_75_translucent} 95%,transparent 100%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em 0em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 2em;
`;

const Title = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 0.5em 2em;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 1em;
`;

const Description = styled.div`
  display: flex;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;
`;

const CloseBtn = styled.button`
  display: flex;
  text-align: center;
  width: fit-content;
  padding: 0.5em 2em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.5em;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  background: transparent;
  color: inherit;
  &:hover {
    background: ${(props) => props.theme.white};
    cursor: pointer;
    color: ${(props) => props.theme.black};
    text-shadow: none;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 2px 2px ${(props) => props.theme.white_50_translucent};
    transition: transform 0.2s ease-out;
  }
`;
