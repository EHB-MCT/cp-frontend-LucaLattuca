import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Title = () => {
    const { scrollYProgress } = useScroll();

    // const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [300, 300, 300, 300, 300]);

    scrollYProgress.onChange((latest) => {
        console.log("Scroll progress:", latest);
    });
    return (
        <>
            <motion.img
                className='story-title'
                src="/cp-frontend-LucaLattuca/story/story-title.svg"
                alt='story-title'
                style={{
                    
                }}
            />
        </>
    );
};

export default Title;