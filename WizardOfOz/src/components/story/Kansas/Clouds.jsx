import { motion, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Clouds = ({progress}) => {
    
  

    const cloud1 = useTransform(progress, [0, 0.5, 0.75, 1], [850, 700, 400,-1300]);
    const cloud2 = useTransform(progress, [0, 0.5, 0.75, 1], [580, 300, 100,-1000]);
    const cloud3 = useTransform(progress, [0, 0.5, 0.75, 1], [1200, 800, 400, -1350]);



    progress.on("change", (latest) => {
        console.log("Scroll progress:", latest);
    });

    

    return (
        <section className="clouds-container">

{/* Clouds */}
            <motion.img
            className='cloud-1'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-1.svg"
            alt='cloud-1'
            style= {{
                x: cloud1
            }}
            />

            <motion.img
            className='cloud-2'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-2.svg"
            alt='cloud-2'
            style= {{
                x: cloud2
            }}
            />

            <motion.img
            className='cloud-3'
            src="/cp-frontend-LucaLattuca/story/clouds/cloud-3.svg"
            alt='cloud-3'
            style= {{
                x: cloud3
            }}
            /> 
            </section>
    );
};

export default Clouds;