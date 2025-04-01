import React from 'react';
import styled from 'styled-components';
import Github from '../../../static/icons/Github';
import Linkedin from '../../../static/icons/Linkedin';

const ContactSection: React.FC = () => {
  return (
    <Content>
      <IconWrapper>
        <Github height="50px" width="50px" />
      </IconWrapper>
      <IconWrapper>
        <Linkedin height="50px" width="50px" />
      </IconWrapper>
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
