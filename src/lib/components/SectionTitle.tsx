import React from 'react';
import styled from 'styled-components';
import SectionTitleSVG from '../../../static/SectionTitle.svg';

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = () => {
  return (
    <Wrapper>
      <TitleImg src={SectionTitleSVG} />
    </Wrapper>
  );
};

export default SectionTitle;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 2em;
  z-index: 1;
`;

const TitleImg = styled.svg`
  width: 100%;
`;
