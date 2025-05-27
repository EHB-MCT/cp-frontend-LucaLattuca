import React from 'react';
import { motion, transform, useScroll, useTransform } from 'framer-motion';

const DorothyKansas = ({progress}) => {

    const dorothyRotate = useTransform(progress, [0, 0.65, 0.80,1], ["0deg","0deg","8deg","360deg"]);

    const dorothyScale = useTransform(progress, [0, 0.65, 0.80,1], ["100%","100%","90%","1%"]);

    const dorothyY = useTransform(progress, [0, 0.65, 0.80,1], ["0px","0px","-50px","-300px"]);

    const dorothyX= useTransform(progress, [0, 0.65, 0.80,1], ["0px","0px","0px","-100px"]);


    const totoRotate = useTransform(progress, [0, 0.65, 0.80,1], ["0deg","0deg","8deg","360deg"]);

    const totoScale = useTransform(progress, [0, 0.65, 0.80,1], ["100%","100%","90%","1%"]);

    const totoY = useTransform(progress, [0, 0.65, 0.80,1], ["0px","0px","-50px","-300px"]);

    const totoX = useTransform(progress, [0, 0.65, 0.80,1], ["0px","0px","0px","300px"]);
    
    return (
        <>
            <motion.img
                className='dorothy-fence'
                src="/cp-frontend-LucaLattuca/story/characters/dorothy/dorothy-fence.svg"
                alt='dorothy-fence'
                style={{
                    rotate:dorothyRotate ,
                    scale:dorothyScale ,
                    y: dorothyY,
                    x:dorothyX,
                }}     
            />

            <motion.img
                className='toto-fence'
                src="/cp-frontend-LucaLattuca/story/characters/toto.svg"
                alt='toto-fence'
                style={{
                    rotate: totoRotate,
                    scale: totoScale,
                    y: totoY,
                    x: totoX,
                }}
            />
        </>
    );
};

export default DorothyKansas;