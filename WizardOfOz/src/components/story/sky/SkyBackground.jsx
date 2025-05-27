import { motion, useTransform } from 'framer-motion';

const SkyBackground = ({progress}) => {
   

    // Animate x and scale based on scrollYProgress (0 to 1)
    // const x = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [20, -30, 0, -100, -1600]);
    // const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 0, 0, -300]);
    // const scale = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0.4, 0.8, 1.2, 2, 5]);
    // const backgroundColor = useTransform(progress, [0, 1], ["#ffffff", "#87ceeb"]);

    const height = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], ["0%", "100%", "0%", "100%", "100%"]);


    return (   

         <motion.div
            className="sky-background"
            alt="sky-background"
            style={{
                position: 'absolute',  
                bottom: 0,
                left: 0,
                width: '100%',
                height,
                width: "100%",
                background: "linear-gradient(to top,rgb(108, 200, 236), transparent)",
            }}
        />

    );
};

export default SkyBackground;