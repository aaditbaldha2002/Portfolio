import React from 'react';
import styled from 'styled-components';

import Github from '../../../static/icons/Github';
import LinkedIn from '../../../static/icons/LinkedIn';
import Email from '../../../static/icons/Email';
import Resume from '../../../static/icons/Resume';
import { useNavigate } from 'react-router-dom';
import EmailNotification from './EmailNotification';
interface ContactMeProps {
  LinkedIn: string;
  Github: string;
  Email: string;
}

type contactMethod = {
  name: string;
  svg: React.ReactElement;
  onClick?: () => void;
};

export const ContactMe: React.FC<ContactMeProps> = () => {
  const contact_methods: contactMethod[] = React.useMemo(
    () => [
      {
        name: 'Github',
        svg: <Github height="50px" width="50px" />,
        onClick: () => {
          window.open('https://github.com/aaditbaldha2002', '_blank');
        },
      },
      {
        name: 'Linkedin',
        svg: <LinkedIn height="50px" width="50px" />,
        onClick: () => {
          window.open(
            'https://www.linkedin.com/in/aaditharshalbaldha/',
            '_blank',
          );
        },
      },
      {
        name: 'Email',
        svg: <Email height="50px" width="50px" />,
        onClick: () => setShowEmailNotification(true),
      },
      { name: 'Resume', svg: <Resume height="50px" width="50px" /> },
    ],
    [],
  );

  const [showEmailNotification, setShowEmailNotification] =
    React.useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>LET&apos;S CONNECT</TitleWrapper>
        <MethodsWrapper>
          {contact_methods.map((value, index) => {
            return (
              <>
                <MethodElementWrapper onClick={value.onClick}>
                  <MethodWrapper key={index}>
                    <IconWrapper className="IconWrapper-class">
                      {value.svg}
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
      {showEmailNotification && (
        <EmailNotification
          to="aaditbaldha2002@gmail.com"
          handlePopupClose={() => {
            setShowEmailNotification(false);
          }}
          showPopup={showEmailNotification}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  background: ${(props) => props.theme.black};
  z-index: 0;
  margin-top: 100vh;
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
      svg,
      g {
        fill: ${(props) => props.theme.black};
      }
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
