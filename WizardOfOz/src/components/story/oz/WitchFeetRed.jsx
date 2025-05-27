import React from 'react';
import { motion, useTransform } from 'framer-motion';

const WitchFeetRed = ({progress}) => {
    

    
    const opacity = useTransform(progress, [ 0.2, 0.3, 1], ["100%", "100%", "100%" ]);

    return (
        <>
            <motion.img
                className='witch-feet-red'
                src="/cp-frontend-LucaLattuca/story/characters/witch-feet-red.svg"
                alt='witch-feet-red'
                style={{
                   opacity,
                }}
            />

        

        </>
    );
};

export default WitchFeetRed;