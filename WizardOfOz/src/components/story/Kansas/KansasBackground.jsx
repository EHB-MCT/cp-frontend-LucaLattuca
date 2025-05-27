import React from 'react';
import { motion, useTransform } from 'framer-motion';

const kansas = ({progress}) => {
    

    const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, 500]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, 300]);


    const dorothyHouseRotate = useTransform(progress, [0, 0.65, 0.75,0.80,1], ["0deg","0deg","0deg","-15deg","0deg"]);
    
    const dorothyHouseScale = useTransform(progress, [0, 0.65, 0.80,1], ["100%","100%","100%","1%"]);
    
    const dorothyHouseY = useTransform(progress, [0, 0.65, 0.75,0.80,1], ["0px","0px","0px","60px","-300px"]);
    
    const dorothyHouseX= useTransform(progress, [0, 0.65, 0.75,0.80,1], ["0px","0px","0px","100px","-100px"]);
 
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
                style={{
                    rotate:dorothyHouseRotate,
                    scale: dorothyHouseScale,
                    y: dorothyHouseY,
                    x: dorothyHouseX,
                }}
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