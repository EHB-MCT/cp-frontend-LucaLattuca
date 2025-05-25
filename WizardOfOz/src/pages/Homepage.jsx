import React, {useState} from "react";
import {useTheme} from "../components/ThemeProvider"

import ThemeButton from "../components/ThemeButton";
import Stories from "../components/Stories";


function Homepage() {
  const {theme} = useTheme();

  return (
    
    <main>
      <div className={`container ${theme}`}>
        <div className="main-top">
          <h1>Populair</h1>  
          <ThemeButton/>
        </div>      
   
        <Stories/>
      </div>
    </main>
  );
}
// class=
export default Homepage;