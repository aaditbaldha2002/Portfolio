import React from 'react';
import styled, { keyframes } from 'styled-components';

const NavBar: React.FC = (props) => {
  const [activeSection, setActiveSection] = React.useState('About Me');
  return (
    <Wrapper>
      <About>About Me</About>
      <Skills>Skills</Skills>
      <Projects>Projects</Projects>
      <Certifications>Certificates</Certifications>
    </Wrapper>
  );
};

export default NavBar;

const fadeIn = keyframes`
  0% {
    opacity:0;
  }90%{
    opacity:0;
  }100%{
    opacity:1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 1em;
  color: ${(props) => props.theme.white};
  position: fixed;
  top: 0px;
  background: ${(props) => props.theme.black};
  backdrop-filter: blur(0.4);
  display: flex;
  justify-content: flex-end;
  font-size: 1.75rem;
  z-index: 9999;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

const About = styled.div`
  margin: 0em 1em;
  &:hover {
    text-shadow:
      0px 0px 4rem ${(props) => props.theme.blue},
      0px 0px 2rem ${(props) => props.theme.blue},
      0px 0px 1rem ${(props) => props.theme.blue};
    cursor: pointer;
    transition: text-shadow 0.25s;
  }
  &:not(hover) {
    text-shadow: none;
    transition: text-shadow 0.25s;
  }
`;
const Skills = styled.div`
  margin: 0em 1em;
  &:hover {
    text-shadow:
      0px 0px 4rem ${(props) => props.theme.blue},
      0px 0px 2rem ${(props) => props.theme.blue},
      0px 0px 1rem ${(props) => props.theme.blue};
    cursor: pointer;
    transition: text-shadow 0.25s;
  }
  &:not(hover) {
    text-shadow: none;
    transition: text-shadow 0.25s;
  }
`;
const Projects = styled.div`
  margin: 0em 1em;
  &:hover {
    text-shadow:
      0px 0px 4rem ${(props) => props.theme.blue},
      0px 0px 2rem ${(props) => props.theme.blue},
      0px 0px 1rem ${(props) => props.theme.blue};
    cursor: pointer;
    transition: text-shadow 0.25s;
  }
  &:not(hover) {
    text-shadow: none;
    transition: text-shadow 0.25s;
  }
`;
const Certifications = styled.div`
  margin: 0em 1em;
  &:hover {
    text-shadow:
      0px 0px 4rem ${(props) => props.theme.blue},
      0px 0px 2rem ${(props) => props.theme.blue},
      0px 0px 1rem ${(props) => props.theme.blue};
    cursor: pointer;
    transition: text-shadow 0.25s;
  }
  &:not(hover) {
    text-shadow: none;
    transition: text-shadow 0.25s;
  }
`;
