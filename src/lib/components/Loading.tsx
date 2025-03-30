import React from 'react';
import styled from 'styled-components';

const Loading: React.FC = () => {
  return <Wrapper>Loading ...</Wrapper>;
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;
