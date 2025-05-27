import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const KansasText = ({progress}) => {
 

    const opacity = useTransform(progress, [0,0.5], ["100%","0%"])

    
    return (
        <>
            <motion.h2
                className='kansas-text'
                alt='kansas-text'
                style={{
                    opacity
                }}
                
            >
              Dorothy lives on a farm in kansas with her dog Toto.
              A tornado aproaches...
            </motion.h2>
        </>
    );
};

export default KansasText;