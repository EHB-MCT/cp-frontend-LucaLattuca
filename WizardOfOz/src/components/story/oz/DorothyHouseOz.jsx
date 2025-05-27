import React, {useRef} from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const DorothyHouseOz = ({progress}) => {
    
     
    return (   

         <motion.img
            className="dorothy-house-oz"
            src="/cp-frontend-LucaLattuca/story/buildings/dorothy-house-oz.svg"
            alt="dorothy-house-oz"
            style={{
                
            }}
        />

    );
};

export default DorothyHouseOz;