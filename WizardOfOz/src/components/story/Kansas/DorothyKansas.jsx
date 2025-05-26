import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const DorothyKansas = () => {
    // const { scrollYProgress } = useScroll();


    // scrollYProgress.onChange((latest) => {
    //     console.log("Scroll progress:", latest);
    // });
    return (
        <>
            <motion.img
                className='dorothy-fence'
                src="/cp-frontend-LucaLattuca/story/characters/dorothy/dorothy-fence.svg"
                alt='dorothy-fence'
                initial={{y:0}}
            />

            <motion.img
                className='toto-fence'
                src="/cp-frontend-LucaLattuca/story/characters/toto.svg"
                alt='toto-fence'
                initial={{y:0}}
            />
        </>
    );
};

export default DorothyKansas;