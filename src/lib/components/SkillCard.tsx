import styled, { keyframes } from 'styled-components';
import React from 'react';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';

interface SkillCardProps {
  type: 'LANGUAGES' | 'DATABASES' | 'TECHNOLOGY';
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  const languages = ['Java', 'Python', 'JavaScript', 'Typescript'];
  const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'];
  const technologies = [
    'Git',
    'Github',
    'React',
    'ExpressJS',
    'Stylus',
    'SASS',
  ];

  return (
    <SkillCardWrapper id="SkillCardWrapper-id">
      <UpperBorder />
      <ContentWrapper id="Conent-Wrapperid">
        <ContentGridWrapper>
          <TitleBoxWrapper>
            <TitleWrapper>{props.type}</TitleWrapper>
          </TitleBoxWrapper>
          <BtnGridWrapper>
            {props.type == 'LANGUAGES' &&
              languages.map((language, index) => (
                <BtnWrapper key={index}>{language}</BtnWrapper>
              ))}
            {props.type == 'DATABASES' &&
              databases.map((db, index) => (
                <BtnWrapper key={index}>{db}</BtnWrapper>
              ))}
            {props.type == 'TECHNOLOGY' &&
              technologies.map((technology, index) => (
                <BtnWrapper key={index}>{technology}</BtnWrapper>
              ))}
          </BtnGridWrapper>
        </ContentGridWrapper>
      </ContentWrapper>
      <LowerBorder />
    </SkillCardWrapper>
  );
};

const popUp = keyframes`
  0%{
    transform: scaleY(5%);
  }
  100%{
    transform: scaleY(100%);
  }
`;

const SkillCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${popUp} 0.35s ease-in;
  height: fit-content;
  color: ${(props) => props.theme.white};
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 0em 1em;
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%,${props.theme.black_75_translucent} 5%,  ${props.theme.black_75_translucent} 95%, transparent 100%)`};
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
  }to{
    opacity:1;
  }
`;
const ContentGridWrapper = styled.div`
  padding: 1em;
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 90%;
  animation: ${fadeIn} 0.35s ease-in;
`;

const TitleBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white_25_translucent};
  color: ${(props) => props.theme.white};
  text-shadow:
    0px 0px 2em ${(props) => props.theme.light_blue},
    0px 0px 1em ${(props) => props.theme.light_blue};
  padding: 1em 2em;
  font-size: 1.75em;
  width: 100%;
  text-align: center;
`;

const BtnGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;

const BtnWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white_25_translucent};
  padding: 10px 0px;
  font-size: 20px;
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue};
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    color: ${(props) => props.theme.black};
    text-shadow: none;
  }
`;
