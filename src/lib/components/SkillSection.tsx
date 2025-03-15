import React from 'react';
import styled from 'styled-components';
import { SkillCard } from './SkillCard';
import { SkillNotification } from './SkillNotification';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';

export const SkillSection: React.FC = (props) => {
  const notificationDataMap: Record<
    string,
    {
      skillName: string;
      proficiency_level: string;
      category: string;
      attributes: string[];
      origins: string;
    }
  > = React.useMemo(
    () => ({
      Java: {
        skillName: 'Java',
        proficiency_level: 'Low',
        category: 'programming',
        attributes: ['Java 1', 'Java 2'],
        origins:
          'Created by James Gosling and his team at Sun Microsystems in 1991',
      },
      Python: {
        skillName: 'Python',
        proficiency_level: 'Medium',
        category: 'programming',
        attributes: ['Python 1', 'Python 2'],
        origins: 'Created by Guido van Rossum in the late 1980s',
      },
      JavaScript: {
        skillName: 'JavaScript',
        proficiency_level: 'High',
        category: 'programming',
        attributes: ['JavaScript 1', 'JavaScript 2'],
        origins: 'Created by Brendan Eich in 1995',
      },
      Typescript: {
        skillName: 'Typescript',
        proficiency_level: 'High',
        category: 'programming',
        attributes: ['Typescript 1', 'Typescript 2'],
        origins: 'Created by Steven Williams in 2011',
      },
      MySQL: {
        skillName: 'MySQL',
        proficiency_level: 'High',
        category: 'database',
        attributes: ['MySQL 1', 'MySQL 2'],
        origins:
          'created by Michael "Monty" Widenius, Allan Larsson, and David Axmark in 1995',
      },
      PostgreSQL: {
        skillName: 'PostgreSQL',
        proficiency_level: 'High',
        category: 'database',
        attributes: ['PostgreSQL 1', 'PostgreSQL 2'],
        origins: 'created by Michael Stonebraker in 1986',
      },
      MongoDB: {
        skillName: 'MongoDB',
        proficiency_level: 'Medium',
        category: 'database',
        attributes: ['MongoDB 1', 'MongoDB 2'],
        origins:
          'MongoDB was created by Dwight Merriman, Eliot Horowitz, and Kevin Ryan in 2007',
      },
      Oracle: {
        skillName: 'Oracle',
        proficiency_level: 'Low',
        category: 'database',
        attributes: ['Oracle 1', 'Oracle 2'],
        origins: 'Created byLarry Ellison, Bob Miner, and Ed Oates in 1977.',
      },
      Git: {
        skillName: 'Git',
        proficiency_level: 'High',
        category: 'version control',
        attributes: ['Git 1', 'Git 2'],
        origins: 'Created by Linus Torvalds in 2005',
      },
      Github: {
        skillName: 'Github',
        proficiency_level: 'High',
        category: 'version control',
        attributes: ['Github 1', 'Github 2'],
        origins:
          'created by Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon in 2008',
      },
      React: {
        skillName: 'React',
        proficiency_level: 'High',
        category: 'front-end framework',
        attributes: ['React 1', 'React 2'],
        origins:
          'created by Jordan Walke, a software engineer at Facebook, in 2011',
      },
      ExpressJS: {
        skillName: 'ExpressJS',
        proficiency_level: 'High',
        category: 'back-end framework',
        attributes: ['ExpressJS 1', 'ExpressJS 2'],
        origins: 'created by TJ Holowaychuk in 2010',
      },
      Stylus: {
        skillName: 'Stylus',
        proficiency_level: 'High',
        category: 'CSS preprocessor',
        attributes: ['Stylus 1', 'Stylus 2'],
        origins: 'created by TJ Holowaychuk in 2010',
      },
      SASS: {
        skillName: 'SASS',
        proficiency_level: 'High',
        category: 'CSS preprocessor',
        attributes: ['SASS 1', 'SASS 2'],
        origins: 'created by Hampton Catlin in 2006',
      },
    }),
    [],
  );
  const [cardIndexShowed, setCardIndexShowed] = React.useState(-1);
  const [skillPopupName, setSkillPopupName] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(PopupMP3));

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
      <Title>SKILLS</Title>
      <SkillCardsWrapper>
        <SkillCard
          type={'LANGUAGES'}
          cardIndex={0}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
        <SkillCard
          type={'DATABASES'}
          cardIndex={1}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
        <SkillCard
          type={'TECHNOLOGY'}
          cardIndex={2}
          showCard={cardIndexShowed}
          currentSkillPopup={skillPopupName}
          handleBtnClick={handleBtnClick}
        />
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
  padding: 3em 1em;
  background: ${(props) =>
    `radial-gradient(${props.theme.darkest_blue},${props.theme.black})`};
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  row-gap: 5em;
  height: fit-content;
  background-repeat: repeat-y;
  color: ${(props) => props.theme.white};
`;

const Title = styled.div`
  display: flex;
  padding: 1em 2em;
  border: 1px solid ${(props) => props.theme.white};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;
`;

const SkillCardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  height: fit-content;
  background-repeat: repeat-y;
  width: 100%;
`;
