import { motion, useTransform } from 'framer-motion';

const DorothyHouseKansas = ({progress}) => {
    
    const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-200, 200, -1600, -1600, -1600]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [300, -100, 100, 0, 0]);
    const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [2, 2.5, 2, 2, 2]);
    return (   

        <motion.img
                className='dorothy-house'
                src="/cp-frontend-LucaLattuca/story/buildings/dorothy-house.svg"
                alt='dorothy-house'
                style={{
                   scale,
                    x,
                    y,
                }}
            />


    );
};

export default DorothyHouseKansas;