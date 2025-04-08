import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CertCard } from './CertCard';
import AIPractitionerImg from '../../../static/aws-certified-ai-practitioner.png';
import CCPractitionerImg from '../../../static/aws-certified-cloud-practitioner.png';
import UdemyLogoImg from '../../../static/udemy.png';

export type CertInfo = {
  image_url: string;
  img_alt: string;
  verification_url: string;
  issued_at: string;
  expires_at: string;
};

export const CertSection: React.FC = () => {
  const certArr: string[] = [
    'AWS Certified Cloud Practitioner',
    'AWS Certified AI Practitioner',
    'Udemy ML Completion Certificate',
  ];

  const image_url_arr: CertInfo[] = [
    {
      image_url: AIPractitionerImg,
      img_alt: 'AWS Certified AI Practitioner Img',
      verification_url:
        'https://www.credly.com/badges/c312cc66-cbe2-4e20-a207-33ce23ff5bdb',
      issued_at: 'Feb 2025',
      expires_at: 'Feb 2028',
    },
    {
      image_url: CCPractitionerImg,
      img_alt: 'AWS Certified Cloud Practitioner Img',
      verification_url:
        'https://www.credly.com/earner/earned/badge/e1f0c726-78a5-4ee8-a427-8145fe6c5b52',
      issued_at: 'Jan 2025',
      expires_at: 'Jan 2028',
    },
    {
      image_url: UdemyLogoImg,
      img_alt: 'Udemy Logo Img',
      verification_url:
        'https://www.udemy.com/certificate/UC-68cbccd3-3941-424e-afde-cd777dc409ed/',
      issued_at: '',
      expires_at: '',
    },
  ];
  const [activeKey, setActiveKey] = React.useState(0);

  const handleCertSelection = React.useCallback((key: number) => {
    setActiveKey(key);
  }, []);

  React.useEffect(() => {}, [activeKey]);

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>CERTIFICATIONS</TitleWrapper>
        <OptionContentWrapper>
          <OptionGridWrapper>
            {certArr.map((content, key) => {
              return (
                <CertOptionWrapper
                  isActive={activeKey}
                  optionKey={key}
                  key={key}
                  onClick={() => handleCertSelection(key)}
                >
                  <CertOption key={key}>{content}</CertOption>
                </CertOptionWrapper>
              );
            })}
          </OptionGridWrapper>
          <CertCardAreaWrapper id="CertCardAreaWrapper">
            <CertCardWrapper id="CertCardWrapper">
              {image_url_arr.map((content, key) => {
                return (
                  <CertCard
                    key={key}
                    optionKey={key}
                    activeKey={activeKey}
                    image_url={content.image_url}
                    img_alt={content.img_alt}
                    verification_url={content.verification_url}
                    issued_at={content.issued_at}
                    expires_at={content.expires_at}
                  />
                );
              })}
            </CertCardWrapper>
          </CertCardAreaWrapper>
        </OptionContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black},${props.theme.darkest_blue})`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: start;
  @media (max-width: 775px) {
    padding: 0em;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.black_75_translucent};
  border-radius: 0.5em;
  row-gap: 2em;
  width: 100%;
  max-width: 75%;
  padding: 2em;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 1em;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 0.5em 1em;
  color: ${(props) => props.theme.white};
  text-shadow:
    0em 0em 1em ${(props) => props.theme.blue},
    0em 0em 0.5em ${(props) => props.theme.light_blue};
  font-size: 2em;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  letter-spacing: 2px;
`;

const OptionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  width: 100%;
  max-width: 75%;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 1em;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const OptionGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 1em;
  row-gap: 1em;
  align-self: stretch;
`;

const CertOptionWrapper = styled.div<{ isActive: number; optionKey: number }>`
  display: flex;
  padding: 1em;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  text-align: center;
  color: ${(props) => props.theme.white};
  transition: text-shadow 0.3s ease-out;
  text-shadow:
    0rem 0rem 2rem ${(props) => props.theme.blue},
    0rem 0rem 1rem ${(props) => props.theme.light_blue};
  &:hover {
    background-color: ${(props) => props.theme.white};
    transition: background-color 0.25s;
    color: ${(props) => props.theme.black};
    cursor: pointer;
    text-shadow: none;
  }

  ${(props) =>
    props.isActive === props.optionKey &&
    css`
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.black};
      cursor: pointer;
      text-shadow: none;
    `}
`;

const CertOption = styled.div`
  display: flex;
  font-size: 1.5em;
`;

const CertCardAreaWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-self: stretch;
`;

const CertCardWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-y: hidden;
`;
