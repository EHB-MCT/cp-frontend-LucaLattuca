import React from "react";
import thumbnail from "../assets/fairytale/thumbnail.jpg";
import ThemeButton from "../components/ThemeButton";
import Stories from "../components/Stories";


function Homepage() {
  return (
    
    <main>
      <ThemeButton/>

      <h1>Populair</h1>  
    
      <Stories/>
    </main>
  );
}

export default Homepage;