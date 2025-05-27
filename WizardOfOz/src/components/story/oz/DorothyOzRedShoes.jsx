

import { motion, useTransform } from 'framer-motion';

const DorothyOzRedShoes = ({progress}) => {
    
    
    const opacity = useTransform(progress, [ 0.3, 0.4, 1], ["0%", "100%", "100%" ])
    
    return (
        <>
            <motion.img
                className='dorothy-oz-shoes-red'
                src="/cp-frontend-LucaLattuca/story/characters/dorothy/oz/dorothy-oz-shoes-red.svg"
                alt='dorothy-oz-shoes-red'
                style={{
                    opacity,
                }}     
            />

           
        </>
    );
};

export default DorothyOzRedShoes;