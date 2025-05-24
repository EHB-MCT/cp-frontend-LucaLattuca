import React, {useState} from "react";

import ThemeButton from "../components/ThemeButton";
import Stories from "../components/Stories";


function Homepage() {

  return (
    
    <main>
      <div className="main-top">
        <h1>Populair</h1>  
        <ThemeButton/>
      </div>      
   
      <Stories/>
    </main>
  );
}

export default Homepage;