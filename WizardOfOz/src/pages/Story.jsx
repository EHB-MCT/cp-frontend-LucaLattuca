import React from 'react';

import "../styles/Kansas.styles.scss"
import "../styles/Story.styles.scss"
import Fence from '../components/story/Kansas/Fence';
import Clouds from '../components/story/Kansas/Clouds';
import Kansas from '../components/story/Kansas/Kansas';
import Title from '../components/story/Kansas/Title';
import Dorothykansas from '../components/story/Kansas/DorothyKansas';
import Tornado from '../components/story/Kansas/Tornado';
import SkyHouse from '../components/story/sky/SkyHouse';


// import Cloud from './Cloud';
// import Character from './Character';
const Story = () => {
    return (
        <>
        <div className='story-screen'>
            <Clouds/>
            <Kansas/>
            <Fence/>
            <Title/>
            
            <Dorothykansas/>
            <Tornado/>
        </div>
        <div style={{ height: '200vh' }} />
        <div className='sky'>
            <SkyHouse/>    
        </div> 
        </>
    );
};

export default Story;