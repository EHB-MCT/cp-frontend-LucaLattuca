import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


import "../styles/Kansas.styles.scss"
import "../styles/Story.styles.scss"
import Fence from '../components/story/Kansas/Fence';
import Clouds from '../components/story/Kansas/Clouds';
import Kansas from '../components/story/Kansas/KansasBackground';
import Title from '../components/story/Kansas/Title';
import Dorothykansas from '../components/story/Kansas/DorothyKansas';
import Tornado from '../components/story/Kansas/Tornado';

import DorothyHouseKansas from  '../components/story/kansas/DorothyHouseKansas';
import SkyBackground from  '../components/story/sky/SkyBackground';
import DorothyHouseOz from  '../components/story/sky/DorothyHouseOz';


// import Cloud from './Cloud';
// import Character from './Character';
const Story = () => {
    const kansasWrapperRef = useRef(null);
    
    const { scrollYProgress: kansasProgress } = useScroll({
        target: kansasWrapperRef,
        offset: ['start start', 'end end'],
    });
    
    const skyWrapperRef = useRef(null);

    const { scrollYProgress: skyProgress } = useScroll({
        target: skyWrapperRef,
        offset: ['start start', 'end end'],
    });
    return (
        <>
        <div className='parallax-content'>
    
    <div className="kansas-wrapper" ref={kansasWrapperRef}>
       <div className="kansas">
            <Clouds progress={kansasProgress}/>
            <Kansas progress={kansasProgress}/>
            <Fence progress={kansasProgress}/>
            <Title progress={kansasProgress}/>
            
            <Dorothykansas progress={kansasProgress}/>
            <Tornado progress={kansasProgress}/>
        </div>
    </div>
        
    <div className='sky-wrapper' ref={skyWrapperRef}>
        <div className='sky'>
            <SkyBackground progress={skyProgress}/>
            <DorothyHouseKansas progress={skyProgress}/>
            {/* <DorothyHouseOz progress={skyProgress}/> */}

        </div> 
    </div>

    <div className='munchkinLand' >
        
    </div>
    
        </div>
       </>
    );
};


export default Story;