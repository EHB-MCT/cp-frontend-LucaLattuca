
import { motion, useTransform } from 'framer-motion';

const Sparkle = ({progress}) => {
 

    const opacity = useTransform(progress, [0,0.1, 0.2, 0.3, 0.4], ["0%","0%", "100%", "100%", "0%"])
    const scale = useTransform(progress, [0,0.1, 0.2, 0.3, 0.4], ["0%","10%", "150%", "150%", "0%"])
    
    return (
        <>
            <motion.img
                        className="sparkle"
                        src="/cp-frontend-LucaLattuca/story/effects/sparkle.svg"
                        alt="sparkle"
                        style={{
                            opacity,
                            scale,
                        }}
                    />
        </>
    );
};

export default Sparkle;