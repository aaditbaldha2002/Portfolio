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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BorderImg = styled.img`
  width: 100%;
`;
