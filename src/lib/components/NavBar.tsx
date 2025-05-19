import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Hamburger from '../../../static/icons/Hamburger';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(
    () => window.innerWidth <= 865,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 865);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabs = React.useMemo(
    () => ['About Me', 'Skills', 'Experience', 'Certificates'],
    [],
  );
  const [activeSection, setActiveSection] = React.useState<number>(0);
  const scrollingDisabled = React.useRef<boolean>(false);
  const tabRefs = React.useRef<(HTMLElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({});

  const handleScroll = React.useCallback(() => {
    if (scrollingDisabled.current) return;
    requestAnimationFrame(() => {
      const scrollPos = window.scrollY;
      const newSection = Math.round(scrollPos / window.innerHeight);

      if (newSection !== activeSection) {
        setActiveSection(newSection);
      }
    });
  }, [activeSection]);

  const handleTabClick = React.useCallback(
    (index: number) => {
      if (activeSection === index) return;
      scrollingDisabled.current = true;
      window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
      setActiveSection(index);
      const onScrollEnd = () => {
        scrollingDisabled.current = false;
        window.removeEventListener('scrollend', onScrollEnd);
      };

      window.addEventListener('scrollend', onScrollEnd);
    },
    [activeSection],
  );

  const handleTabsPopup = React.useCallback(() => {}, []);

  React.useEffect(() => {
    const currentTab = tabRefs.current[activeSection];
    if (currentTab) {
      const style = window.getComputedStyle(currentTab);
      const ml = style.getPropertyValue('margin-left');
      const margin = Number.parseInt(ml.replace('px', ''));
      setIndicatorStyle({
        height: currentTab.clientHeight + 2 * 8,
        width: currentTab.clientWidth + 2 * 16,
        transform: `translate(${currentTab.offsetLeft - margin / 2}px,-50%)`,
      });
    }
  }, [activeSection]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Wrapper>
      <Portfolio>Portfolio</Portfolio>
      {isMobile ? (
        <IconWrapper onClick={handleTabsPopup}>
          <Hamburger width="28px" height="28px" />
        </IconWrapper>
      ) : (
        <>
          <SelectedBox style={indicatorStyle} />
          {tabs.map((value, index) => {
            return (
              <Tab
                key={index}
                onClick={() => handleTabClick(index)}
                ref={(el) => (tabRefs.current[index] = el)}
                tabActive={index === activeSection}
              >
                {value}
              </Tab>
            );
          })}
        </>
      )}{' '}
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

const Portfolio = styled.div`
  display: flex;
  color: ${(props) => props.theme.white};
  margin-right: auto;
`;

const Wrapper = styled.nav`
  padding: 1em 1em;
  color: ${(props) => props.theme.white};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9999;
  background: ${(props) => props.theme.black_75_translucent};
  backdrop-filter: blur(0.25em);
  display: flex;
  justify-content: flex-end;
  font-size: 1.75rem;
  animation: ${fadeIn} 1.5s ease-out forwards;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5em 1em;
  }
`;

const IconWrapper = styled.div``;

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
