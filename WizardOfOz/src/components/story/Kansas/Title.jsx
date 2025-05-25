import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Title = () => {
    const { scrollYProgress } = useScroll();


    scrollYProgress.onChange((latest) => {
        console.log("Scroll progress:", latest);
    });
    return (
        <>
            <motion.img
                className='story-title'
                src="/cp-frontend-LucaLattuca/story/story-title.svg"
                alt='story-title'
                initial={{y:13, x:13}}
            />

          

        </>
    );
};

export default Title;