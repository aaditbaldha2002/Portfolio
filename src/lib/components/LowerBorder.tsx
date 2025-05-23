import React from 'react';
import styled from 'styled-components';
import LowerBorderSVG from '../../../static/LowerBorder.svg';

export const LowerBorder: React.FC = () => {
  return (
    <Wrapper>
      <BorderImg src={LowerBorderSVG} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -1em;
  height: 2em;
  z-index: 1;
`;

const BorderImg = styled.img`
  width: 100%;
`;
