import { motion, useScroll, useTransform } from 'framer-motion';
import React, { memo } from 'react';
import styled from 'styled-components';

interface ParallexImgProps {
  src: string;
  alt: string;
  bottom: string;
}

const ParallexImg: React.FC<ParallexImgProps> = (props) => {
  const { src, alt, bottom } = props;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <motion.div
      style={{
        position: 'absolute',
        right: 0,
        y: y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Img src={props.src} alt={props.alt} />
    </motion.div>
  );
};

const Img = styled.img`
  display: flex;
`;

export default memo(ParallexImg);
