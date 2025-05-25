import React, { useEffect, useState } from 'react';
import { motion, transform, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clouds = () => {
    const { scrollYProgress } = useScroll();

    scrollYProgress.onChange((latest) => {
        console.log("Scroll progress:", latest);
    });





    return (
        <>

{/* Clouds */}
            <motion.img
            className='cloud-1'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-1.svg"
            alt='cloud-1'
            initial={{y:0, x: 0}}
            />

            <motion.img
            className='cloud-2'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-2.svg"
            alt='cloud-2'
            initial={{y:0, x:0}}
            />

            <motion.img
            className='cloud-3'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-3.svg"
            alt='cloud-3'
            initial={{y:0, x:0}}
            /> 
        </>
    );
};

export default Clouds;