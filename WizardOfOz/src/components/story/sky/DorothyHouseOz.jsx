import React, {useRef} from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const DorothyHouseOz = ({progress}) => {
    
    const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-300, -30, 0, -100, -1600]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, -300]);
    const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [2, 2, 2, 2, 2]);
    return (   

         <motion.img
            className="dorothy-house-oz"
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

export default DorothyHouseOz;