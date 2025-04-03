import React from 'react';
import styled from 'styled-components';

type Position = { x: number; y: number };

const Cursor: React.FC = () => {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const trailRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let mousePos: Position = { x: 0, y: 0 };
    const delayedPos: Position = { x: 0, y: 0 };

    const updateCursor = (event: MouseEvent) => {
      mousePos = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      delayedPos.x += (mousePos.x - delayedPos.x) * 0.1;
      delayedPos.y += (mousePos.y - delayedPos.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePos.x - cursorRef.current.offsetWidth / 2}px, ${mousePos.y - cursorRef.current.offsetHeight / 2}px)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${delayedPos.x - trailRef.current.offsetWidth / 2}px, ${delayedPos.y - trailRef.current.offsetHeight / 2}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateCursor);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      <CursorCircle ref={cursorRef} />
      <TrailCircle ref={trailRef} />
    </>
  );
};

export default Cursor;

const CursorCircle = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 32px;
  height: 32px;
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 9999;
`;

const TrailCircle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.white_50_translucent};
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-out;
  z-index: 9999;
`;
