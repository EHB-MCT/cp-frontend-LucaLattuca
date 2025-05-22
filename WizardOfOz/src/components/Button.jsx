import React from "react";
import  { useState } from "react";
import '../app.css';

const Button = ({name, active}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
    className="nav-button" 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
        style={{
            backgroundColor: isHovered ? "black" : "white",
            color: isHovered ? "white" : "black",
            border: isHovered? "white solid 3px" : "black solid 3px",
            boxShadow: isHovered ? "0px 0px" : "4px 4px",
            top: isHovered ? "3px" : "0px",
            left: isHovered ? "3px" : "0px",

        }}
    >
        {name}
    </button>
  );
}

export default Button;