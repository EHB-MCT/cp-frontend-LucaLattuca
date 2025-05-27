import React from 'react';
import { motion, useTransform } from 'framer-motion';

const WitchFeetBlack = ({progress}) => {
    

    
    const opacity = useTransform(progress, [ 0.3, 0.4, 1], ["0%", "100%", "100%" ])
    return (
        <>
            <motion.img
                className='witch-feet-red'
                src="/cp-frontend-LucaLattuca/story/characters/witch-feet-black.svg"
                alt='witch-feet-red'
                style={{
                   opacity
                }}
            />

        

        </>
    );
};

export default WitchFeetBlack;