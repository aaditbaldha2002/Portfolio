import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SkillCard } from './SkillCard';
import { SkillNotification } from './SkillNotification';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
import { notificationData, NotifyData } from '../data/notificationData';
import SectionTitle from './SectionTitle';
import LeftArrow from '../../../static/icons/LeftArrow';
import RightArrow from '../../../static/icons/RightArrow';

export const SkillSection: React.FC = () => {
  const notificationDataMap: Record<string, NotifyData> = React.useMemo(
    () => notificationData,
    [],
  );
  const [cardIndexShowed, setCardIndexShowed] = React.useState(0);
  const [skillPopupName, setSkillPopupName] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(PopupMP3));
  // const typeArr: string[] = ['FRONT END', 'REPO SYNC', 'DEV TOOLS'];
  const typeArr: string[] = ['FRONT END'];

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

  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle text="SKILLS" />
      </TitleWrapper>
      <ConnectionLink />
      <LeftArrow height="50px" width="50px" />
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
      <RightArrow height="50px" width="50px" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 93px;
  height: 100vh;
  padding: 93px 3rem 3rem;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100%;
  row-gap: 5em;
  justify-content: space-around;
  align-items: center;
  background-repeat: repeat-y;
  color: ${(props) => props.theme.white};
  scroll-snap-align: start;
  box-sizing: border-box;
`;

const elongate = keyframes`
  from{
    transform:scaleX(0%);
  }to{
    transform: scaleX(100%);
  }
`;

const ConnectionLink = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  padding: 0.15rem 2rem;
  animation: 1s ${elongate} ease-in-out forwards;
  flex-grow: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 33%;
`;

const SkillCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 2rem;
  row-gap: 5rem;
  height: fit-content;
  background-repeat: repeat-y;
  width: 33%;
`;
