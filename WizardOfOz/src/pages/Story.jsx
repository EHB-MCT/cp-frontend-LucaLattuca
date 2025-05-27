import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


import "../styles/Kansas.styles.scss"
import "../styles/Story.styles.scss"
import "../styles/Oz.styles.scss"


import Fence from '../components/story/Kansas/Fence';
import Clouds from '../components/story/Kansas/Clouds';
import Kansas from '../components/story/Kansas/KansasBackground';
import Title from '../components/story/Kansas/Title';
import Dorothykansas from '../components/story/Kansas/DorothyKansas';
import Tornado from '../components/story/Kansas/Tornado';
import KansasText from '../components/story/Kansas/KansasText';

import DorothyHouseKansas from  '../components/story/kansas/DorothyHouseKansas';
import SkyBackground from  '../components/story/sky/SkyBackground';
import DorothyHouseSky from  '../components/story/sky/DorothyHouseSky.jsx';
import TornadoOz from '../components/story/sky/TornadoOz';

import MunchkinLandGround from '../components/story/oz/MunchkinLandGround'
import DorothyHouseOz from '../components/story/oz/DorothyHouseOz.jsx'
import DorothyOzBlackShoes from '../components/story/oz/DorothyOzBlackShoes.jsx';
import DorothyOzRedShoes from '../components/story/oz/DorothyOzRedShoes.jsx';
import WitchFeetRed from '../components/story/oz/WitchFeetRed.jsx';
import WitchFeetBlack from '../components/story/oz/WitchFeetBlack.jsx';
import TotoRollover from '../components/story/oz/TotoRollover.jsx';
import Sparkle from '../components/story/oz/Sparkle.jsx';


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


    const ozWrapperRef = useRef(null);

    const { scrollYProgress: ozProgress } = useScroll({
        target: ozWrapperRef,
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
                    <KansasText progress={kansasProgress}/>
                </div>
            </div>
        
            <div className='sky-wrapper' ref={skyWrapperRef}>
                <div className='sky'>
                    <SkyBackground progress={skyProgress}/>
                    <DorothyHouseKansas progress={skyProgress}/>
                    <DorothyHouseSky progress={skyProgress}/>
                    <TornadoOz progress={skyProgress}/>

                </div> 
            </div>

            <div className='munchkinLand-wrapper' ref={ozWrapperRef}>
                <div className='munchkinLand' >
                    <MunchkinLandGround progress={ozProgress}/>
                    <WitchFeetRed progress={ozProgress}/>
                    <WitchFeetBlack progress={ozProgress}/>

                    <TotoRollover progress={ozProgress}/>
                    <DorothyHouseOz progress={ozProgress}/>
                    <DorothyOzBlackShoes progress={ozProgress}/>
                    <DorothyOzRedShoes progress={ozProgress}/>
                    <Sparkle progress={ozProgress}/>
                </div>
            </div>
            
            <h1 className='to-be-continued'>To Be Continued...</h1>
            
            </div>
       </>
    );
};


export default Story;