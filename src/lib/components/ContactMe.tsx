import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import Github from '../../../static/icons/Github';
import LinkedIn from '../../../static/icons/LinkedIn';
import Email from '../../../static/icons/Email';
import Resume from '../../../static/icons/Resume';
import CMBtn from './CMBtn';
import Loading from './Loading';
type contactMethod = {
  name: string;
  svg: React.ReactElement;
  onClick: () => void;
};

const EmailNotification = lazy(() => import('./EmailNotification'));
const DownloadNotification = lazy(() => import('./DownloadNotification'));

const ContactMe: React.FC = () => {
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
      {
        name: 'Download \n Resume',
        svg: <Resume height="50px" width="50px" />,
        onClick: () => setShowDownloadNotification(true),
      },
    ],
    [],
  );

  const handleEmailPopup = () => {
    setShowEmailContent(false);
    setTimeout(() => {
      setShowEmailNotification(false);
      setShowEmailContent(true);
    }, 400);
  };

  const handleDownloadPopup = () => {
    setShowDownloadContent(false);
    setTimeout(() => {
      setShowDownloadNotification(false);
      setShowDownloadContent(true);
    }, 400);
  };

  const [showEmailContent, setShowEmailContent] = React.useState(true);
  const [showEmailNotification, setShowEmailNotification] =
    React.useState(false);

  const [showDownloadContent, setShowDownloadContent] = React.useState(true);
  const [showDownloadNotification, setShowDownloadNotification] =
    React.useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>LET&apos;S CONNECT</TitleWrapper>
        <MethodsWrapper>
          {contact_methods.map((value, index) => {
            return (
              <>
                <CMBtn
                  onClick={value.onClick}
                  name={value.name}
                  svg={value.svg}
                />
                {index < contact_methods.length - 1 && <Divider />}
              </>
            );
          })}
        </MethodsWrapper>
      </ContentWrapper>
      {showEmailNotification && (
        <Suspense fallback={<Loading />}>
          <EmailNotification
            to="aaditbaldha2002@gmail.com"
            handlePopupClose={handleEmailPopup}
            showPopup={showEmailContent}
          />
        </Suspense>
      )}
      {showDownloadNotification && (
        <Suspense fallback={<Loading />}>
          <DownloadNotification
            handlePopupClose={handleDownloadPopup}
            showPopup={showDownloadContent}
          />
        </Suspense>
      )}
    </Wrapper>
  );
};

export default ContactMe;

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

const Divider = styled.div`
  display: flex;
  align-self: stretch;
  width: 2px;
  border-right: 1px solid ${(props) => props.theme.white};
`;
