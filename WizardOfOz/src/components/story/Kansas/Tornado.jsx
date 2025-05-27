import { motion, useTransform } from 'framer-motion';

const Tornado = ({progress}) => {
   

    // Animate x and scale based on scrollYProgress (0 to 1)
    const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [20, -30, 0, -100, -1600]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, -300]);
    const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0.4, 0.8, 1.2, 2, 5]);

    return (   

         <motion.img
            className="tornado"
            src="/cp-frontend-LucaLattuca/story/objects/tornado-black-white.svg"
            alt="tornado"
            style={{
                y,
                x,
                scale,
                position: 'absolute',   
                bottom: '20vh',
                right: '0vw',
                width: '150px',       
                pointerEvents: 'none'
            }}
        />

    );
};

export default Tornado;