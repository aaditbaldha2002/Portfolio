import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CertCardProps {
  activeKey: number;
  optionKey: number;
  image_url: string;
  img_alt: string;
  verification_url: string;
  issued_at: string;
  expires_at: string;
}

interface VerifyBtnProps {
  url: string;
}

const VerifyBtn: React.FC<VerifyBtnProps> = ({ url }) => {
  const handleRedirect = () => {
    if (url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    } else {
      alert('Invalid URL');
    }
  };
  return <VerifyBtnWrapper onClick={handleRedirect}>Verify</VerifyBtnWrapper>;
};

export const CertCard: React.FC<CertCardProps> = (props) => {
  return (
    <Wrapper optionKey={props.optionKey} activeKey={props.activeKey}>
      <ImgWrapper>
        <CertImg src={props.image_url} alt={props.img_alt} />
      </ImgWrapper>
      <DateWrapper>
        {props.issued_at} - {props.expires_at}
      </DateWrapper>
      <VerifyBtn url={props.verification_url} />
    </Wrapper>
  );
};

const goUp = keyframes`
  from{
    transform: translateY(0%);
  }to{
    transform: translateY(-100%);
  }
`;

const goDown = keyframes`
  from{
    transform: translateY(-100%);
  }to{
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div<{ optionKey: number; activeKey: number }>`
  display: flex;
  background-color: transparent;
  /* padding: 20px; */
  border-radius: 5px;
  border: ${(props) => props.theme.white};
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 408px;

  position: absolute;
  /* left: 25%; */
  /* transform: translate(-50%, -50%); */

  ${({ optionKey, activeKey }) => css`
    animation: 0.5s ${optionKey === activeKey ? goDown : goUp} ease-out forwards;
    opacity: ${optionKey === activeKey ? 1 : 0};
    transition: opacity 0.5s ease-out;
  `}
`;

const ImgWrapper = styled.div`
  display: flex;
  max-width: 300px;
`;

const CertImg = styled.img`
  display: flex;
  width: 100%;
`;

const DateWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.white};
  font-size: 2em;
  margin: 0.5em 0em;
  text-shadow:
    0px 0px 1em ${(props) => props.theme.blue},
    0px 0px 0.5em ${(props) => props.theme.light_blue};
`;

const VerifyBtnWrapper = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  padding: 0.5em 1em;
  font-size: 1.5em;
  text-shadow:
    0px 0px 2em ${(props) => props.theme.blue},
    0px 0px 1em ${(props) => props.theme.light_blue};
  &:hover {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    cursor: pointer;
    text-shadow: none;
  }
`;
