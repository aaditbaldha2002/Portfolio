import styled from 'styled-components';
import React from 'react';
import { ReactNode } from 'react';

interface CMBtnProps {
  onClick: () => void;
  svg: ReactNode;
  name: string;
}

const CMBtn: React.FC<CMBtnProps> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <MethodWrapper>
        <IconWrapper className="IconWrapper-class">{props.svg}</IconWrapper>
        <MethodNameWrapper>
          <NameWrapper className="NameWrapper-class">{props.name}</NameWrapper>
        </MethodNameWrapper>
      </MethodWrapper>
    </Wrapper>
  );
};

export default CMBtn;
const Wrapper = styled.div`
  display: flex;
`;

const MethodWrapper = styled.div`
  position: relative;
  display: flex;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 2em;
  gap: 2em;
  &:hover {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    cursor: pointer;
    user-select: none;

    .NameWrapper-class {
      color: ${(props) => props.theme.black};
      text-shadow: none;
    }

    .IconWrapper-class {
      border: 1px solid ${(props) => props.theme.black};
      svg,
      g {
        fill: ${(props) => props.theme.black};
      }
    }
  }
  z-index: 2;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.white};
  padding: 1em;
  background: transparent;
`;

const MethodNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  text-align: left;
  font-size: 2em;
  color: ${(props) => props.theme.white};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.blue};
  white-space: pre-wrap;
`;
