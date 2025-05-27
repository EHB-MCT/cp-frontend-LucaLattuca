import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const Title = ({progress}) => {
 

    const scale = useTransform(progress, [0, 0.7, 1], ["100%", "100%", "1%"]);
    const rotate = useTransform(progress, [0, 0.7, 1], ["0deg", "0deg", "1080deg"]);

    
    return (
        <>
            <motion.img
                className='story-title'
                src="/cp-frontend-LucaLattuca/story/story-title.svg"
                alt='story-title'
                style={{
                    scale,
                    rotate
                }}
            />
        </>
    );
};

export default Title;