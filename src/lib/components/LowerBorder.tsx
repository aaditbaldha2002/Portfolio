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
  bottom: -10px;
`;

const BorderImg = styled.img`
  width: 100%;
`;
