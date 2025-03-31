import styled, { css, keyframes } from 'styled-components';
import React, { Dispatch } from 'react';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';
import { ActionType } from '../reducer/reducer';

interface SkillCardProps {
  type: 'FRONTEND' | 'CODE MANAGEMENT' | 'DEV TOOLS';
  cardIndex: number;
  showCard: number;
  // dispatch: Dispatch<ActionType>;
  currentSkillPopup: string;
  handleBtnClick: () => (props: string) => void;
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  const frontend: string[] = React.useMemo(
    () => ['HTML', 'CSS3', 'JavaScript', 'Typescript', 'React', 'SASS'],
    [],
  );
  const codeManagement: string[] = React.useMemo(
    () => ['Git', 'Github', 'ESLint', 'Prettier'],
    [],
  );
  const devTools: string[] = React.useMemo(
    () => ['Webpack', 'Babel', 'Jest', 'Cypress'],
    [],
  );

  const [showContent, setShowContent] = React.useState(false);

  const handleShowContent = React.useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <SkillCardWrapper
        id="SkillCardWrapper-id"
        cardIndex={props.cardIndex}
        showCard={props.showCard}
        onAnimationEnd={handleShowContent}
      >
        <UpperBorder />
        <ContentWrapper id="Conent-Wrapperid">
          <ContentGridWrapper showContent={showContent}>
            <TitleBoxWrapper>
              <TitleWrapper id="TitleWrapper-id">{props.type}</TitleWrapper>
            </TitleBoxWrapper>
            <BtnGridWrapper id="BtnGridWrapper-id">
              {props.type == 'FRONTEND' &&
                frontend.map((tool, index) => (
                  <BtnWrapper
                    key={index}
                    className="BtnWrapper-class"
                    onClick={() => props.handleBtnClick()(tool)}
                  >
                    {tool}
                  </BtnWrapper>
                ))}
              {props.type == 'CODE MANAGEMENT' &&
                codeManagement.map((cm, index) => (
                  <BtnWrapper
                    key={index}
                    className="BtnWrapper-class"
                    onClick={() => props.handleBtnClick()(cm)}
                  >
                    {cm}
                  </BtnWrapper>
                ))}
              {props.type == 'DEV TOOLS' &&
                devTools.map((devTool, index) => (
                  <BtnWrapper
                    key={index}
                    className="BtnWrapper-class"
                    onClick={() => props.handleBtnClick()(devTool)}
                  >
                    {devTool}
                  </BtnWrapper>
                ))}
            </BtnGridWrapper>
          </ContentGridWrapper>
        </ContentWrapper>
        <LowerBorder />
      </SkillCardWrapper>
    </>
  );
};

export const popUp = keyframes`
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

const SkillCardWrapper = styled.div<{ cardIndex: number; showCard: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) =>
    props.cardIndex <= props.showCard &&
    css`
      animation: ${popUp} 0.35s ease-in;
    `}
  opacity: ${(props) => (props.cardIndex <= props.showCard ? 1 : 0)};
  height: fit-content;
  color: ${(props) => props.theme.white};
  &:hover {
    transform: perspective(1000px)
      ${(props) => (props.cardIndex !== 1 ? `scale(1.1)` : `scale(1.05)`)}
      ${(props) =>
        props.cardIndex === 0
          ? `rotateY(25deg)`
          : props.cardIndex === 2
            ? `rotateY(-25deg)`
            : `rotateY(0deg)`}
      ${(props) => (props.cardIndex !== 1 ? `rotateX(15deg)` : `rotateX(0deg)`)};
    z-index: 9999;
    transition: transform 0.3s ease-out;

    #TitleWrapper-id,
    #BtnGridWrapper-id .BtnWrapper-class {
      text-shadow:
        ${(props) =>
            props.cardIndex === 0
              ? '-5px'
              : props.cardIndex === 2
                ? '5px'
                : '0px'}
          ${(props) => (props.cardIndex !== 1 ? '3px' : '0px')}
          ${(props) => props.theme.white_25_translucent},
        0px 0px 2em ${(props) => props.theme.blue},
        0px 0px 1em ${(props) => props.theme.light_blue};
    }

    #BtnGridWrapper-id .BtnWrapper-class {
      &:hover {
        text-shadow: none;
      }
    }
  }

  &:not(:hover) {
    transform: perspective(1000px) scale(1) rotateY(0deg) rotateX(0deg);
    transition: transform 0.35s ease-in;
  }
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 0em 1em;
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%,${props.theme.black_75_translucent} 10%,  ${props.theme.black_75_translucent} 90%, transparent 100%)`};
`;

const fadeIn = keyframes`
  0%{
    opacity:0;
    transform: scale(0.97);
  }
  50%{
    opacity:0;
    transform: scale(0.97);
  }100%{
    opacity:1;
    transform: scale(1);
  }
`;
const ContentGridWrapper = styled.div<{ showContent: boolean }>`
  padding: 2em;
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 90%;
  ${(props) =>
    props.showContent &&
    css`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `};
  opacity: ${(props) => (props.showContent ? 1 : 0)};
`;

const TitleBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white_75_translucent};
  color: ${(props) => props.theme.white};
  text-shadow:
    0px 0px 0.5em ${(props) => props.theme.light_blue},
    0px 0px 1em ${(props) => props.theme.blue};
  padding: 1em 2em;
  font-size: 1.75em;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  user-select: none;
  transition: text-shadow 0.3s ease-out;
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
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  padding: 10px 0px;
  font-size: 20px;
  text-shadow:
    0px 0px 20px ${(props) => props.theme.blue},
    0px 0px 20px ${(props) => props.theme.light_blue};
  text-align: center;
  user-select: none;
  transition: text-shadow 0.3s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    color: ${(props) => props.theme.black};
    text-shadow: none;
    transition: background-color 0.25s;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 2px 2px ${(props) => props.theme.white_50_translucent};
    transition: transform 0.2s ease-out;
  }
`;
