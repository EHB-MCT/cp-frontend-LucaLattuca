import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const kansas = () => {
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, 500]);
    const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, 300]);

    // scrollYProgress.onChange((latest) => {
    //     console.log("Scroll progress:", latest);
    // });
    return (
        <>
            <motion.img
                className='background-kansas'
                src="/cp-frontend-LucaLattuca/story/backgrounds/kansas-background.svg"
                alt='background-kansas'
                style={{
                    y,
                }}
            />

            {/* Houses */}

            <motion.img
                className='dorothy-house'
                src="/cp-frontend-LucaLattuca/story/buildings/dorothy-house.svg"
                alt='dorothy-house'

            />
            <motion.img
                className='farm-house'
                src="/cp-frontend-LucaLattuca/story/buildings/farm-house.svg"
                alt='farm-house'
                style={{
                    y,
                    x,
                }}
            />

        </>
    );
};

export default kansas;