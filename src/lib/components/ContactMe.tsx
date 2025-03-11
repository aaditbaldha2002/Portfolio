import React from 'react';
import styled from 'styled-components';
import GithubSVG from '../../../static/icons/github.svg';
import LinkedinSVG from '../../../static/icons/linkedin.svg';
import EmailSVG from '../../../static/icons/mail.svg';
import ResumeSVG from '../../../static/icons/file-user.svg';
import IgrisPNG from '../../../static/pictures/Igris_face.png';
import MonarchPNG from '../../../static/pictures/Mage_face.png';

interface ContactMeProps {
  LinkedIn: string;
  Github: string;
  Email: string;
}

type contactMethod = {
  name: string;
  svg: string;
};

export const ContactMe: React.FC<ContactMeProps> = (props) => {
  const contact_methods: contactMethod[] = [
    { name: 'Github', svg: GithubSVG },
    { name: 'Linkedin', svg: LinkedinSVG },
    { name: 'Email', svg: EmailSVG },
    { name: 'Resume', svg: ResumeSVG },
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>LET&apos;S CONNECT</TitleWrapper>
        <MethodsWrapper>
          {contact_methods.map((value, index) => {
            return (
              <>
                <MethodElementWrapper>
                  {index === 0 && (
                    <ImgWrapper className="ImgWrapper-class">
                      <Igris src={IgrisPNG} id="Igris-id" />
                    </ImgWrapper>
                  )}
                  {index === 1 && (
                    <ImgWrapper className="ImgWrapper-class">
                      <Monarch src={MonarchPNG} id="Monarch-id" />
                    </ImgWrapper>
                  )}
                  <MethodWrapper key={index}>
                    <IconWrapper className="IconWrapper-class">
                      <IconImg src={value.svg} />
                    </IconWrapper>
                    <MethodNameWrapper>
                      <NameWrapper className="NameWrapper-class">
                        {value.name}
                      </NameWrapper>
                    </MethodNameWrapper>
                  </MethodWrapper>
                </MethodElementWrapper>
                {index < contact_methods.length - 1 && <Divider />}
              </>
            );
          })}
        </MethodsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  background: ${(props) => props.theme.black};
  z-index: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3em 0em;
  row-gap: 2em;
`;

const TitleWrapper = styled.div`
  width: fit-content;
  text-align: center;
  padding: 1em 2em;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  color: ${(props) => props.theme.white};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.blue};
  font-size: 2em;
`;

const MethodsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  position: relative;
`;

const MethodElementWrapper = styled.div`
  position: relative;
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
    }
  }
  z-index: 2;
`;

const Divider = styled.div`
  display: flex;
  align-self: stretch;
  width: 2px;
  border-right: 1px solid ${(props) => props.theme.white};
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
  text-align: center;
  font-size: 2em;
  color: ${(props) => props.theme.white};
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.blue};
`;

const IconImg = styled.img``;

const ImgWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  transform: translate(-50%);
  left: 50%;
  z-index: -1;
`;

const Igris = styled.img`
  max-width: 200px;
`;

const Monarch = styled.img`
  max-width: 200px;
`;
