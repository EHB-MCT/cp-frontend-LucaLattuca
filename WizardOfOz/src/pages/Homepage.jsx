import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import {useTheme} from "../components/ThemeProvider"

import ThemeButton from "../components/ThemeButton";
import Stories from "../components/Stories";


function Homepage() {
  const {theme} = useTheme();
  const { query } = useOutletContext();
  return (
    
    <main>
      <div className={`container ${theme}`}>
        <div className="main-top">
          <h1>Populair</h1>  
          <ThemeButton/>
        </div>      
   
        <Stories query={query}/>
      </div>
    </main>
  );
}
// class=
export default Homepage;