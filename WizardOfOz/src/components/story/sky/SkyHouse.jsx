import React, {useRef} from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const SkyHouse = () => {
      // No target ref, use full page scroll progress
    const { scrollYProgress } = useScroll();

    const remappedProgress = useTransform(scrollYProgress, [0.6, 1], [0, 1], {
    clamp: false,  // let it go beyond 0 or 1 if needed
  });

  // Now use remappedProgress to control x, scale, etc.
  const y = useTransform(remappedProgress, [0, 0.5, 1], [0, 0, -500]);
  const scale = useTransform(remappedProgress, [0, 1], [0.5, 2]);
    return (   

         <motion.img
            className="tornado"
            src="/cp-frontend-LucaLattuca/story/objects/tornado-black-white.svg"
            alt="tornado"
            style={{
                y,
                scale,
                position: 'fixed',   
                bottom: '-200vh',
                right: '0vw',
                width: '150px',       
                pointerEvents: 'none'
            }}
        />

    );
};

export default SkyHouse;