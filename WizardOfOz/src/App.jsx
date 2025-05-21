import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import logo from './assets/portal/logo.svg'
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
