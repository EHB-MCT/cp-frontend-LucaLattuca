
import { motion, useTransform } from 'framer-motion';

const DorothyOzBlackShoes = ({progress}) => {

  
    const opacity = useTransform(progress, [ 0.2, 0.3, 1], ["100%", "0%", "0%" ]);

    return (
        <>
            <motion.img
                className='dorothy-oz-shoes-black'
                src="/cp-frontend-LucaLattuca/story/characters/dorothy/oz/dorothy-oz-shoes-black.svg"
                alt='dorothy-oz-shoes-black'
                style={{
                    opacity,
                }}     
            />

           
        </>
    );
};

export default DorothyOzBlackShoes;