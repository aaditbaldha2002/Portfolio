import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CertCard } from './CertCard';
import AIPractitionerImg from '../../../static/aws-certified-ai-practitioner.png';
import CCPractitionerImg from '../../../static/aws-certified-cloud-practitioner.png';

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
  ];
  const [activeKey, setActiveKey] = React.useState(0);

  const handleCertSelection = React.useCallback((key: number) => {
    setActiveKey(key);
  }, []);

  React.useEffect(() => {}, [activeKey]);

  return (
    <Wrapper>
      <ContentWrapper>
        <OptionGridWrapper>
          <OptionGrid>
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
          </OptionGrid>
        </OptionGridWrapper>
        <Divider />
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
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black},${props.theme.darkest_blue})`};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.black_75_translucent};
  align-self: stretch;
  justify-content: space-around;
`;

const OptionGrid = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const CertOptionWrapper = styled.div<{ isActive: number; optionKey: number }>`
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.black_75_translucent};
  transition: background-color 0.15s;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.white};
  border-right: 5px solid ${(props) => props.theme.black_75_translucent};
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 10px ${(props) => props.theme.light_blue};
  &:hover {
    background-color: ${(props) => props.theme.white_75_translucent};
    color: ${(props) => props.theme.black};
    border-right: 5px solid ${(props) => props.theme.darker_blue};
    cursor: pointer;
    text-shadow: none;
  }

  ${(props) =>
    props.isActive == props.optionKey &&
    css`
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.black};
      border-right: 5px solid ${(props) => props.theme.darker_blue};
      cursor: pointer;
      text-shadow: none;
    `}
`;

const CertOption = styled.li`
  margin: 10px;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 2px;
  border-left: 1px solid ${(props) => props.theme.white};
  align-self: stretch;
`;

const CertCardAreaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const CertCardWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 448px;
`;
