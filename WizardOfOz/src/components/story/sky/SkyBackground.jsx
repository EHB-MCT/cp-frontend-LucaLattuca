import { motion, useTransform } from 'framer-motion';

const SkyBackground = ({progress}) => {
   


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