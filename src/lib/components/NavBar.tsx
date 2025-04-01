import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface NavBarProps {
  activeSection: number;
  changeActiveSection: (_num: number) => void;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const tabs = React.useMemo(
    () => ['About Me', 'Skills', 'Projects', 'Certificates'],
    [],
  );
  const [activeSection, setActiveSection] = React.useState<number>(
    props.activeSection,
  );
  const tabRefs = React.useRef<(HTMLElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const currentTab = tabRefs.current[activeSection];
    if (currentTab) {
      const style = window.getComputedStyle(currentTab);
      const ml = style.getPropertyValue('margin-left');
      const margin = Number.parseInt(ml.replace('px', ''));
      setIndicatorStyle({
        height: currentTab.clientHeight + 2 * 16,
        width: currentTab.clientWidth + 2 * 16,
        transform: `translate(${currentTab.offsetLeft - margin / 2}px,-50%)`,
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
            onClick={() => {
              setActiveSection(index);
              props.changeActiveSection(index as number);
            }}
            ref={(el) => (tabRefs.current[index] = el)}
            tabActive={index === activeSection}
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
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  clip-path: polygon(
    10px 0px,
    calc(100% - 10px) 0px,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0px calc(100% - 10px),
    0px 10px
  );
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
  margin-left: 1em;
  margin-right: 1em;
  transition: color 0.3s ease;
  color: ${(props) =>
    props.tabActive ? `${props.theme.black}` : `${props.theme.white}`};
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    !props.tabActive &&
    css`
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
    `}
  z-index: 1;
`;
