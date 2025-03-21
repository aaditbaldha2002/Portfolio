import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { UpperBorder } from './UpperBorder';
import { LowerBorder } from './LowerBorder';
import PopupMP3 from '../../../static/sounds/popup_sound.mp3';
import emailjs from 'emailjs-com';

interface EmailNotificationProps {
  to: string;
  handlePopupClose: () => void;
  showPopup: boolean;
}

const EmailNotification: React.FC<EmailNotificationProps> = (props) => {
  const audio = React.useMemo(() => new Audio(PopupMP3), []);
  const [emailContent, setEmailContent] = React.useState({
    from: '',
    subject: '',
    message: '',
  });

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setEmailContent((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: emailContent.from,
        to_name: props.to,
        subject: emailContent.subject,
        message: emailContent.message,
      };

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
      );

      props.handlePopupClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  React.useEffect(() => {
    audio.play();
  }, [audio]);

  return (
    <Wrapper showPopup={props.showPopup}>
      <UpperBorder />
      <ContentWrapper>
        <FormWrapper onSubmit={handleSendEmail}>
          <Content>
            <Title>Send an Email</Title>
            <From>From:</From>
            <FromValue
              type="email"
              value={emailContent.from}
              name="from"
              onChange={handleChange}
              required
            />
            <To>To:</To>
            <ToValue>{props.to}</ToValue>
            <Subject>Subject:</Subject>
            <SubjectValue
              type="text"
              value={emailContent.subject}
              name="subject"
              onChange={handleChange}
              required
            />
            <TextArea
              type="text"
              name="message"
              value={emailContent.message}
              onChange={handleChange}
              required
            />
            <SendBtn
              onClick={() => {
                props.handlePopupClose();
              }}
              type="submit"
            >
              Send
            </SendBtn>
          </Content>
        </FormWrapper>
      </ContentWrapper>
      <LowerBorder />
    </Wrapper>
  );
};
const popUp = keyframes`
  0% {
    transform: scaleY(0.1);
    opacity: 0;
  }
  60% {
    transform: scaleY(1.05);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
  }
`;
const popDown = keyframes`
      0% {
        transform: scaleY(1);
      }
      40% {
        transform: scaleY(1.05);
        opacity: 1;
      }
    100% {
    transform: scaleY(0.1);
    opacity: 0;
  }
`;

const Wrapper = styled.div<{ showPopup: boolean }>`
  position: fixed;
  width: 50vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 10vh;
  left: 25vw;
  transform: translate(-50%, -50%);
  z-index: 9999;
  ${(props) =>
    props.showPopup &&
    css`
      animation: ${popUp} 0.35s ease-out forwards;
    `}
  ${(props) =>
    !props.showPopup &&
    css`
      animation: ${popDown} 0.35s ease-out forwards;
    `}
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  width: 95%;
  background: ${(props) =>
    `linear-gradient(to right,transparent 0%,${props.theme.black_75_translucent} 5%,${props.theme.black_75_translucent} 95%,transparent 100%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em 0em;
`;

const FormWrapper = styled.form`
  display: flex;
  width: fit-content;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2em;
`;

const Title = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.white_50_translucent};
  padding: 0.5em 2em;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 2em;
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
`;

const To = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 3;
  font-size: 2em;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const From = styled(To)`
  grid-row: 2;
`;

const ToValue = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 3;
  font-size: 1.5em;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const SendBtn = styled.button`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: center;
  width: fit-content;
  padding: 0.5em 2em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
  font-size: 1.5em;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  background: transparent;
  color: inherit;
  &:hover {
    background: ${(props) => props.theme.white};
    cursor: pointer;
    color: ${(props) => props.theme.black};
    text-shadow: none;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 2px 2px ${(props) => props.theme.white_50_translucent};
    transition: transform 0.2s ease-out;
  }
`;

const Subject = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 4;
  font-size: 2em;
  text-align: center;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const SubjectValue = styled.input`
  all: unset;
  border-bottom: 1px solid ${(props) => props.theme.white_50_translucent};
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 4;
  font-size: 1.5em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

const FromValue = styled(SubjectValue)`
  grid-row: 2;
`;

const TextArea = styled.input`
  all: unset;
  border-bottom: 1px solid ${(props) => props.theme.white_50_translucent};
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 5;
  font-size: 1.5em;
  text-shadow:
    0em 0em 2em ${(props) => props.theme.blue},
    0em 0em 1em ${(props) => props.theme.light_blue};
`;

export default EmailNotification;
