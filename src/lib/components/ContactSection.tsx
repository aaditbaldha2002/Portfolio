import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Github from '../../../static/icons/Github';
import Linkedin from '../../../static/icons/Linkedin';

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
  ];

  return (
    <Content>
      {socialLinks.map((value, index) => {
        return <IconWrapper key={index}>{value.Icon}</IconWrapper>;
      })}
    </Content>
  );
};
export default ContactSection;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0em;
  column-gap: 1em;
`;
const IconWrapper = styled.div`
  height: 50px;
  width: 50px;
`;
