import React from 'react';
import styled from 'styled-components';
import Download from '../../../static/icons/Download';

const ResumeBtn: React.FC = () => {
  const handleDownloadResume = React.useCallback(() => {}, []);

  return (
    <Content title="Download my resume" onClick={handleDownloadResume}>
      <Title>Resume</Title>
      <Download width="2rem" height="2rem" />
    </Content>
  );
};

export default ResumeBtn;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.white};
  padding: 1em;
  color: white;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.white};
    color: black;
    transition: all 0.3s ease-in-out;
    svg {
      fill: ${(props) => props.theme.black};
      transition: all 0.3s ease-in-out;
    }
  }
  &:not(hover) {
    transition: all 0.3s ease-in-out;
    svg {
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Title = styled.div`
  display: flex;
  font-size: 2rem;
`;
