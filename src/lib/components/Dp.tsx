import styled, { css } from 'styled-components';
import React from 'react';
import DpImg from '../../../static/dp.jpeg';
import { forwardRef } from 'react';

interface DpProps {
  animateDpClick: boolean;
}

const Dp = forwardRef<HTMLDivElement, DpProps>(({ animateDpClick }, ref) => {
  return (
    <Content ref={ref}>
      <DpImage data-testid="Dp-img-test-id" animateDpClick={animateDpClick} />
    </Content>
  );
});
Dp.displayName = 'Dp';
export default Dp;

const Content = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin: 0em 1em;

  @media (max-width: 640px) {
    width: 100%;
    margin: 0em;
  }
`;

const DpImage = styled.div<{ animateDpClick: boolean }>`
  width: 228px;
  height: 228px;
  background-image: url(${DpImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: ${(props) => `5px solid ${props.theme.blue}`};
  transform: scale(1);
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease,
    border 0.5s ease;

  animation: auraPulse 2s infinite alternate;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
    cursor: pointer;
    ${(props) =>
      props.animateDpClick &&
      css`
        animation: auraPulseDischarge 0.25s linear forwards;
      `}
  }

  @keyframes auraPulse {
    from {
      transform: scale(1);
      box-shadow: 0 0 40px 5px ${(props) => props.theme.darker_blue};
      border: ${(props) => `5px solid ${props.theme.blue}`};
    }
    to {
      transform: scale(1.05);
      box-shadow: 0 0 60px 10px ${(props) => props.theme.blue};
      border: ${(props) => `5px solid ${props.theme.blue}`};
    }
  }

  @keyframes auraPulseDischarge {
    0% {
      transform: scale(0.95);
      box-shadow: var(--box-shadow-value);
      text-shadow: initial;
    }
    50% {
      transform: scale(1.05);
      text-shadow: initial;
    }
    100% {
      transform: scale(1);
      text-shadow: initial;
    }
  }
`;
