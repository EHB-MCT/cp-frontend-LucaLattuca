import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clouds = () => {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef, 
        offset: ["start end", "end start"],
    });
    

    const cloud1 = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [850, 700, 400,-1300]);
    const cloud2 = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [580, 300, 100,-100]);
    const cloud3 = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [1200, 800, 400, -1350]);



    scrollYProgress.on("change", (latest) => {
        console.log("Scroll progress:", latest);
    });


    return (
        <section ref={targetRef} className="clouds-container">

{/* Clouds */}
            <motion.img
            className='cloud-1'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-1.svg"
            alt='cloud-1'
            style= {{
                x: cloud1
            }}
            />

            <motion.img
            className='cloud-2'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-2.svg"
            alt='cloud-2'
            style= {{
                x: cloud2
            }}
            />

            <motion.img
            className='cloud-3'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-3.svg"
            alt='cloud-3'
            style= {{
                x: cloud3
            }}
            /> 
            </section>
    );
};

export default Clouds;