import React, {useRef} from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const DorothyHouseSky = ({progress}) => {
    
     const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-1600, -1600, -1600, 400, 300]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 0.90, 1], [0, 0, 500, -100, 0, 1000]);
    const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [2, 2, 2.5, 2.5, 2]);
    return (   

         <motion.img
            className="dorothy-house-sky"
            src="/cp-frontend-LucaLattuca/story/buildings/dorothy-house-oz.svg"
            alt="dorothy-house-oz"
            style={{
                scale,
                x,
                y,
                position: 'absolute',   
                width: '150px',
                top:"50vh",       
                pointerEvents: 'none'
            }}
        />

    );
};

export default DorothyHouseSky;