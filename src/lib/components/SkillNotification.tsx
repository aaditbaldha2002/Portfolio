import React, { ReactElement } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';
import { popUp } from './SkillCard';
import SvgProps from '../../../static/icons/type';

export type NotificationData = {
  skillName: string;
  proficiency_level: string;
  category: string;
  attributes: string[];
  origins: string;
  iconSVG: ReactElement<SvgProps>;
};
interface SkillNotificationProps {
  notificationData: NotificationData;
  handlePopupClose: () => void;
  showPopup: boolean;
  skillPopupName: string;
}

export const SkillNotification: React.FC<SkillNotificationProps> = (props) => {
  const {
    skillName,
    proficiency_level,
    category,
    attributes,
    origins,
    iconSVG,
  } = props.notificationData;

  return (
    <Wrapper showPopup={props.showPopup}>
      <UpperBorder />
      <ContentWrapper>
        <DescriptionWrapper>
          <IconWrapper>{iconSVG}</IconWrapper>
          <SkillDescriptionWrapper>
            <TitleWrapper>{skillName}</TitleWrapper>
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
        <OriginWrapper>{origins}</OriginWrapper>
        <CloseBtn onClick={() => props.handlePopupClose()} type="button">
          Close
        </CloseBtn>
      </ContentWrapper>
      <LowerBorder />
    </Wrapper>
  );
};

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
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Tektur', sans-serif;
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
  width: 90%;
  padding: 3em 0em;
  background: ${(props) =>
    `linear-gradient(to right,transparent 0%,${props.theme.black_75_translucent} 5%,${props.theme.black_75_translucent} 95%,transparent 100%)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
  backdrop-filter: blur(10px);
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
  width: 80%;
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
  .path {
    filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)); /* Red glow */
  }
`;

const SkillDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;
  box-sizing: border-box;
  padding: 1em 1em;
`;

const SkillLevelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 2em;
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
  flex-direction: column;
  width: 80%;
`;

const AbilityWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.25em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  color: ${(props) => props.theme.white};
`;

const OriginWrapper = styled.div`
  display: flex;
  width: 80%;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1em;
  color: ${(props) => props.theme.white};
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
  font-size: 1.5em;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  background: transparent;
  font-family: 'Tektur', sans-serif;
  color: inherit;
  &:hover {
    background: ${(props) => props.theme.white};
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
