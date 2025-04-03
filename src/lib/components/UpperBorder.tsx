import React from 'react';
import styled from 'styled-components';
import UpperBorderSVG from '../../../static/UpperBorder.svg';

export const UpperBorder: React.FC = () => {
  return (
    <Wrapper>
      <BorderImg src={UpperBorderSVG} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1em;
  z-index: 1;
`;

const BorderImg = styled.img`
  width: 100%;
`;
