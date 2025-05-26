import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Fence = () => {
    const { scrollYProgress } = useScroll();
   
    const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, 500]);
    const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1],[0, 0, 0, 0, 300]);
   
    return (
        <motion.img
        className='kansas-fence'
            src="/cp-frontend-LucaLattuca/story/objects/fence.svg"
            alt='kansas-fence'
        style={{
            
            y,
        }}
        />
    );
};

export default Fence;