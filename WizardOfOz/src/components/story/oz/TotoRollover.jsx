import React, {useState} from 'react';
import { motion } from 'framer-motion';


const TotoRollover = () => {

    const [hovered, setHovered] = useState(false);

  return (

    <div className="toto-rollover-container">
      <motion.div
        className="toto-rollover"
        initial={{ x: '-100%' }}
        animate={{ x: hovered ? "-40%" : '-100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
      >

        <img src="/cp-frontend-LucaLattuca/story/characters/toto-color.svg" alt="toto-color" className="toto-color" />

      </motion.div>

      <div className="hover-target" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        
      </div>
    </div>
  );
};

export default TotoRollover;