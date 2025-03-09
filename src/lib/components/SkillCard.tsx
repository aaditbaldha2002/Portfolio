import styled, { keyframes } from 'styled-components';
import React from 'react';

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
      <ContentWrapper id="Conent-Wrapperid">
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
      </ContentWrapper>
    </SkillCardWrapper>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(40px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillCardWrapper = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;
  height: fit-content;
  border-top: 2em solid ${(props) => props.theme.darker_blue_50_translucent};
  border-left: 2em solid transparent;
  border-right: 2em solid transparent;
  border-bottom: 2em solid ${(props) => props.theme.darker_blue_50_translucent};
  color: ${(props) => props.theme.white};
  height: 370px;
  width: 340px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%,${props.theme.black_75_translucent} 10%,  ${props.theme.black_75_translucent} 90%, transparent 100%)`};
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
