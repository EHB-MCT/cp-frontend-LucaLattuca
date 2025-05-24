import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

   
      <ThemeProvider>
      <BrowserRouter basename='/cp-frontend-LucaLattuca'>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
            {/* <Route path="makingof" element={<MakingOf />} /> */}
            <Route path="portal" element={<Portal />} />
            <Route path="story/:id" element={<Story />} />
            <Route path="makingof" element={<MakingOf />} />

          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
   
  );
}

export default App
