import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Fence = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -500]);

    scrollYProgress.onChange((latest) => {
        console.log("Scroll progress:", latest);
    });
    return (
        <motion.img
        className='kansas-fence'
            src="/cp-frontend-LucaLattuca/story/objects/fence.svg"
            alt='kansas-fence'
            style={{x}}
        />
    );
};

export default Fence;