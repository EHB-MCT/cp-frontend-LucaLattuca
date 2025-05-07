import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import MakingOf from './pages/Makingof';
import Portal from './pages/Portal';
import Story from './pages/Story';

function App() {

  return (
    <>

   

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
            {/* <Route path="makingof" element={<MakingOf />} /> */}
            <Route path="portal" element={<Portal />} />
            <Route path="story" element={<Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App
