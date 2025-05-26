import React, {useRef} from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Tornado = () => {
      // No target ref, use full page scroll progress
    const { scrollYProgress } = useScroll();

    // Animate x and scale based on scrollYProgress (0 to 1)
    const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [20, -30, 0, -100, -1700]);
    const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, -300]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.4, 0.8, 1.2, 2, 5]);

    return (   

         <motion.img
            className="tornado"
            src="/cp-frontend-LucaLattuca/story/objects/tornado-black-white.svg"
            alt="tornado"
            style={{
                y,
                x,
                scale,
                position: 'fixed',   
                bottom: '20vh',
                right: '0vw',
                width: '150px',       
                pointerEvents: 'none'
            }}
        />

    );
};

export default Tornado;