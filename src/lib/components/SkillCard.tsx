import styled from 'styled-components';
import React from 'react';
import { SkillCircle } from './SkillCircle';
import CodeSnippetIcon from '../../../static/CodeSnippet';
import DatabaseIcon from '../../../static/Database';
import MonitorSettingsIcon from '../../../static/MonitorSettings';

interface SkillCardProps {
  type: 'Languages' | 'Databases' | 'Tech';
  onHover: () => void;
  onHoverLeave: () => void;
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
    <SkillCardWrapper
      onMouseEnter={props.onHover}
      onMouseLeave={props.onHoverLeave}
    >
      <OuterBg id="OuterBg-id">
        <FrontContent id="FrontConent-id">
          {props.type === 'Languages' && <CodeSnippetIcon />}
          {props.type === 'Databases' && <DatabaseIcon />}
          {props.type === 'Tech' && <MonitorSettingsIcon />}
        </FrontContent>

        <BackContent id="BackContent-id">
          {props.type === 'Languages' ? (
            <>
              <SkillCircleArray>
                {languages.map((language) => {
                  return <SkillCircle key={language} text={language} />;
                })}
              </SkillCircleArray>
            </>
          ) : props.type === 'Databases' ? (
            <>
              <SkillCircleArray>
                {databases.map((database) => {
                  return <SkillCircle key={database} text={database} />;
                })}
              </SkillCircleArray>
            </>
          ) : (
            <>
              <SkillCircleArray>
                {technologies.map((technologies) => {
                  return <SkillCircle key={technologies} text={technologies} />;
                })}
              </SkillCircleArray>
            </>
          )}
        </BackContent>
      </OuterBg>
    </SkillCardWrapper>
  );
};

const SkillCardWrapper = styled.div`
  display: inline-block;
  position: relative;
  perspective: 1000px;
`;

const OuterBg = styled.div`
  width: 320px;
  height: 400px;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  background: ${(props) =>
    `conic-gradient(${props.theme.yellow},${props.theme.cyan},${props.theme.purple},${props.theme.pink},${props.theme.yellow})`};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s;
  &:hover {
    transform: rotateY(180deg);
  }
  transform-style: preserve-3d;
  box-shadow: ${(props) => `0px 0px 5px 1px ${props.theme.red}`};
`;

const FrontContent = styled.div`
  background-color: ${(props) => props.theme.black};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  width: auto;
  height: auto;
  backface-visibility: hidden;
  transition: transform 0.6s;
  ${OuterBg}:hover & {
    transform: rotateY(180deg);
  }
  z-index: 2;
  transform-style: preserve-3d;
`;

const BackContent = styled.div`
  background-color: ${(props) => props.theme.black};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  width: auto;
  height: auto;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const SkillCircleArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
