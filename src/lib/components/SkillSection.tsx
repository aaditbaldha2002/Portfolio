import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SkillCard } from './SkillCard';
import { SkillNotification } from './SkillNotification';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
import { notificationData, NotifyData } from '../data/notificationData';
import IceDaggerPNG from '../../../static/pictures/ice_dagger.png';
import SplitDaggerJPEG from '../../../static/pictures/split_dagger.png';

export const SkillSection: React.FC = () => {
  const notificationDataMap: Record<string, NotifyData> = React.useMemo(
    () => notificationData,
    [],
  );
  const [cardIndexShowed, setCardIndexShowed] = React.useState(-1);
  const [skillPopupName, setSkillPopupName] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(PopupMP3));
  const typeArr: string[] = ['FRONT END', 'REPO SYNC', 'DEV TOOLS'];

  const handleBtnClick = React.useCallback(() => {
    return (props: string) => {
      if (audioRef.current) {
        if (props !== skillPopupName && skillPopupName !== '') {
          setShowNotification(false);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
          setTimeout(() => {
            setSkillPopupName(props);
            setShowNotification(true);
          }, 350);
        } else {
          setShowNotification(true);
          audioRef.current.currentTime = 0;
          audioRef.current.play();
          setSkillPopupName(props);
        }
      }
    };
  }, [skillPopupName]);

  const handleCloseNotification = React.useCallback(() => {
    setShowNotification(false);
    setTimeout(() => {
      setSkillPopupName('');
    }, 350);
  }, []);

  React.useEffect(() => {
    const tempInterval = setInterval(() => {
      setCardIndexShowed((prevIndex) => prevIndex + 1);
    }, 300);
    const tempTimeout = setTimeout(() => {
      clearInterval(tempInterval);
    }, 900);

    return () => {
      clearInterval(tempInterval);
      clearTimeout(tempTimeout);
    };
  }, []);

  return (
    <Wrapper>
      <IceDaggerImgWrapper>
        <IceDagger src={IceDaggerPNG} alt="Ice Dagger" />
      </IceDaggerImgWrapper>
      <SplitDaggerImgWrapper>
        <SplitDagger src={SplitDaggerJPEG} alt="Split Dagger" />
      </SplitDaggerImgWrapper>
      <SkillCardsWrapper>
        {typeArr.map((value, index) => {
          return (
            <SkillCard
              key={index}
              type={value}
              cardIndex={index}
              showCard={cardIndexShowed}
              currentSkillPopup={skillPopupName}
              handleBtnClick={handleBtnClick}
            />
          );
        })}
        {skillPopupName !== '' && (
          <SkillNotification
            notificationData={notificationDataMap[skillPopupName]}
            handlePopupClose={handleCloseNotification}
            skillPopupName={skillPopupName}
            showPopup={showNotification}
          />
        )}
      </SkillCardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 93px 3rem 3rem;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 1420px) {
    height: fit-content;
    padding: 93px 1rem 1rem;
  }
  row-gap: 5rem;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  background-repeat: repeat-y;
  color: ${(props) => props.theme.white};
  scroll-snap-align: start;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
`;

const SkillCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 4rem;
  row-gap: 5rem;
  height: fit-content;
  background-repeat: repeat-y;
  width: 100%;
`;

const leftAppear = keyframes`
  from {
    transform: scale(1.5, 1.5) translate(-100%, 100%) rotateY(180deg) rotateZ(-20deg);
  }
  to {
    transform: scale(1.5, 1.5) translate(-10px, -25px) rotateY(180deg) rotateZ(-20deg);
  }
`;

const IceDaggerImgWrapper = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: fit-content;
  height: fit-content;
  transform: scale(1.5, 1.5) rotateY(180deg) rotateZ(-20deg);
  top: -25px;
  left: -10px;
  animation: ${leftAppear} 1s ease-in-out forwards;
`;

const IceDagger = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: auto;
  user-select: none;
`;

const rightAppearDefault = keyframes`
  from {
    transform: scale(1.5) translate(100%,-100%) rotateZ(-110deg);
  }
  to {
    transform: scale(1.5) translate(0,0) rotateZ(-110deg);
  }
`;

const SplitDaggerImgWrapper = styled(IceDaggerImgWrapper)`
  top: auto;
  left: auto;
  bottom: -50px;
  right: -10px;
  animation: ${rightAppearDefault} 1s ease-in-out forwards;
`;

const SplitDagger = styled(IceDagger)``;
