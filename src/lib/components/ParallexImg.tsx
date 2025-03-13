import { motion, useMotionValue } from 'framer-motion';
import React, { memo } from 'react';
import styled from 'styled-components';

interface ParallexImgProps {
  src: string;
  alt: string;
}

const ParallexImg: React.FC<ParallexImgProps> = (props) => {
  const y = useMotionValue(0);

  React.useEffect(() => {
    const handleScroll = () => {
      y.set(window.scrollY * 0.5); // Adjust multiplier for smooth effect
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);
  return (
    <motion.div
      style={{
        position: 'absolute',
        right: 0,
        transform: 'translateX(50%)',
        y,
      }}
    >
      <Img src={props.src} alt={props.alt} />
    </motion.div>
  );
};

const Img = styled.img`
  display: flex;
`;

export default memo(ParallexImg);
