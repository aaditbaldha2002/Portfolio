import React from 'react';
import styled, { keyframes } from 'styled-components';

const NavBar: React.FC = (props) => {
  const tabs = React.useMemo(
    () => ['About Me', 'Skills', 'Projects', 'Certificates'],
    [],
  );
  const [activeSection, setActiveSection] = React.useState(0);
  const tabRefs = React.useRef<(HTMLElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const currentTab = tabRefs.current[activeSection];
    if (currentTab) {
      setIndicatorStyle({
        height: currentTab.clientHeight + 2 * 16,
        width: currentTab.clientWidth + 2 * 16,
        transform: `translateX(${currentTab.offsetLeft}px)`,
      });
    }
  }, [activeSection]);

  return (
    <Wrapper>
      <SelectedBox style={indicatorStyle} />
      {tabs.map((value, index) => {
        return (
          <Tab
            key={index}
            onClick={() => setActiveSection(index)}
            ref={(el) => (tabRefs.current[index] = el)}
            tabActive={index == activeSection}
          >
            {value}
          </Tab>
        );
      })}
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

const SelectedBox = styled.div`
  background: ${(props) => props.theme.white};
  position: absolute;
  top: 16px;
  left: -16px;
  transition: all 0.3s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 1em;
  color: ${(props) => props.theme.white};
  position: fixed;
  top: 0px;
  background: ${(props) => props.theme.black_75_translucent};
  backdrop-filter: blur(0.25em);
  display: flex;
  justify-content: flex-end;
  font-size: 1.75rem;
  z-index: 9999;
  animation: ${fadeIn} 1.5s ease-out forwards;
  box-sizing: border-box;
`;

const Tab = styled.div<{ tabActive: boolean }>`
  margin: 0em 1em;
  color: ${(props) =>
    props.tabActive ? `${props.theme.black}` : `${props.theme.white}`};
  transition: color 0.3s ease;
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
  z-index: 1;
`;
