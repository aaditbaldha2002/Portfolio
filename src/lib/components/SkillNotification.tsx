import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';
import { popUp } from './SkillCard';
import GithubSVG from '../../../static/icons/github.svg';
import { ActionType } from '../reducer/reducer';
interface SkillNotificationProps {
  notificationData: NotificationData;
  dispatch: Dispatch<ActionType>;
}

export type NotificationData = {
  skillName: string;
  proficiency_level: string;
  category: string;
  attributes: string[];
};

export const SkillNotification: React.FC<SkillNotificationProps> = (props) => {
  const { skillName, proficiency_level, category, attributes } =
    props.notificationData;

  return (
    <Wrapper>
      <UpperBorder />
      <ContentWrapper>
        <DescriptionWrapper>
          <IconWrapper>
            <IconImg src={GithubSVG} />
          </IconWrapper>
          <SkillDescriptionWrapper>
            <TitleWrapper>SKILL: {skillName}</TitleWrapper>
            <SkillLevelWrapper>
              <ProficiencyWrapper>
                <ProficiencyTitleWrapper>
                  Proficiency Level:
                </ProficiencyTitleWrapper>
                <ProficiencyLevelValue>
                  {proficiency_level}
                </ProficiencyLevelValue>
              </ProficiencyWrapper>
              <CategoryWrapper>
                <CategoryTitleWrapper>Category:</CategoryTitleWrapper>
                <CategoryValue>{category}</CategoryValue>
              </CategoryWrapper>
            </SkillLevelWrapper>
          </SkillDescriptionWrapper>
        </DescriptionWrapper>
        <AbilitiesWrapper>
          {attributes.map((value, index) => {
            return <AbilityWrapper key={index}>- {value}</AbilityWrapper>;
          })}
        </AbilitiesWrapper>
        <OriginWrapper>Created by Microsoft</OriginWrapper>
        <CloseBtn
          onClick={() =>
            props.dispatch({ type: 'CLOSE_SKILL_POPUP', payload: '' })
          }
        >
          Close
        </CloseBtn>
      </ContentWrapper>
      <LowerBorder />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 50vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 25%;
  left: 25%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  animation: ${popUp} 0.35s ease-out forwards;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  width: 90%;
  background: ${(props) =>
    `linear-gradient(to right,transparent 0%,${props.theme.black_75_translucent} 10%,${props.theme.black_75_translucent} 90%,transparent 100%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em 0em;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  gap: 1em;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 2em;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
`;

const IconImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const SkillDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3em;
`;

const TitleWrapper = styled.div`
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

const SkillLevelWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 2em;
  justify-content: center;
  padding: 0em 1em;
`;

const ProficiencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ProficiencyTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.25em;
  white-space: nowrap;
`;

const ProficiencyLevelValue = styled.div`
  display: flex;
  width: 100%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.5em;
`;

const CategoryWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const CategoryTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.25em;
`;

const CategoryValue = styled.div`
  display: flex;
  width: 100%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.5em;
`;

const AbilitiesWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 80%;
  flex-direction: column;
  padding: 1.25em 4em;
`;

const AbilityWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.25em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const OriginWrapper = styled.div`
  display: flex;
  width: 80%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1em;
  color: ${(props) => props.theme.white};
  padding: 1.25em 4em;
  box-sizing: border-box;
`;

const CloseBtn = styled.button`
  display: flex;
  text-align: center;
  width: fit-content;
  padding: 0.5em 2em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.25em;
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
