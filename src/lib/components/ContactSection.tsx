import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Github from '../../../static/icons/Github';
import Linkedin from '../../../static/icons/Linkedin';
import Email from '../../../static/icons/Email';
import ResumeBtn from './ResumeBtn';

interface SocialLink {
  name: string;
  url: string;
  Icon: ReactNode;
}

const ContactSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Github',
      url: 'https://github.com/aaditbaldha2002',
      Icon: <Github height="50px" width="50px" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aaditharshalbaldha/',
      Icon: <Linkedin height="50px" width="50px" />,
    },
    {
      name: 'Email',
      url: 'mailto:aaditbaldha2002@gmail.com?subject=Portfolio Inquiry&body=Hi Aadit,',
      Icon: <Email height="50px" width="50px" />,
    },
  ];

  return (
    <Content>
      {socialLinks.map((value, index) => {
        return (
          <IconWrapper
            key={index}
            onClick={() => {
              window.open(value.url);
            }}
          >
            {value.Icon}
          </IconWrapper>
        );
      })}
      <ResumeBtn />
    </Content>
  );
};
export default ContactSection;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em 0em;
  column-gap: 1em;
  row-gap: 1em;
`;
const IconWrapper = styled.div`
  height: 50px;
  width: 50px;
  &:hover {
    cursor: pointer;
    svg {
      filter: ${({ theme }) =>
        `drop-shadow(0 0 1em ${theme.blue}) drop-shadow(0 0 0.5em ${theme.blue})`};
      transition: all 0.3s ease-in-out;
      scale: 1.05 1.05;
    }
  }
  &:not(hover) {
    svg {
      transition: all 0.3s ease-in-out;
      scale: 0.95 0.95;
    }
  }
`;
