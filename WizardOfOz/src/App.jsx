import { ThemeProvider } from './components/ThemeProvider';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <HashRouter>
        <Routes>

          {/* portal page routes */}
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
            <Route path="portal" element={<Portal />} />
            <Route path="makingof/:id" element={<MakingOf />} />
          </Route>

          {/* story route */}
          <Route path="story" element={<Story />} />
        </Routes>
      </HashRouter>
      </ThemeProvider>
    </>
   
  );
}

export default App
