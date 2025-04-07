import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SkillCard } from './SkillCard';
import { SkillNotification } from './SkillNotification';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
import { notificationData, NotifyData } from '../data/notificationData';
import SectionTitle from './SectionTitle';

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
    const intervalId = setInterval(() => {
      setCardIndexShowed((prevIndex) => prevIndex + 1);
    }, 250);

    const timeOutId = setTimeout(() => {
      clearInterval(intervalId);
      setCardIndexShowed(2);
    }, 1500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle text="SKILLS" />
      </TitleWrapper>
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
  height: 100vh;
  padding: 3em 1em;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 5em;
  justify-content: space-around;
  align-items: center;
  background-repeat: repeat-y;
  color: ${(props) => props.theme.white};
  scroll-snap-align: start;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: fit-content;
  gap: 2em;
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(10px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  display: flex;
  padding: 1em 2em;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;

  animation: ${fadeIn} 1s ease-out;
`;

const SkillCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
  width: 100%;
`;
