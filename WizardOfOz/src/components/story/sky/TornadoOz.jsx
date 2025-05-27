import { motion, useTransform } from 'framer-motion';

const TornadoOz = ({progress}) => {
   

    const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [600, -100, 100, -100, 1600]);
    const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, -300]);
    const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [7,7,7,7,7]);

    return (   

         <motion.img
            className="tornado"
            src="/cp-frontend-LucaLattuca/story/objects/tornado-color.svg"
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

export default TornadoOz;