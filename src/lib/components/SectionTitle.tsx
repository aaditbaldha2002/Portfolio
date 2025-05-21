import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitleSVG from '../../../static/SectionTitle.svg';

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return <Wrapper>{props.text}</Wrapper>;
};

export default SectionTitle;

const appear = keyframes`
  from{
    opacity:0;
    transform: translateY(20px);
  }to{
    opacity:1;
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 2px solid ${(props) => props.theme.white};
  font-size: 3rem;
  padding: 1rem 3rem;
  animation: 1s ${appear} ease-out forwards;
`;
