import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const kansas = () => {
    const { scrollYProgress } = useScroll();


    scrollYProgress.onChange((latest) => {
        console.log("Scroll progress:", latest);
    });
    return (
        <>
            <motion.img
                className='background-kansas'
                src="/cp-frontend-LucaLattuca/story/backgrounds/kansas-background.svg"
                alt='background-kansas'
                initial={{y:0}}
            />

            {/* Houses */}

            <motion.img
                className='dorothy-house'
                src="/cp-frontend-LucaLattuca/story/buildings/dorothy-house.svg"
                alt='dorothy-house'
                initial={{y:0, x:0}}
            />
            <motion.img
                className='farm-house'
                src="/cp-frontend-LucaLattuca/story/buildings/farm-house.svg"
                alt='farm-house'
                initial={{y:0, x:0}}
            />

        </>
    );
};

export default kansas;