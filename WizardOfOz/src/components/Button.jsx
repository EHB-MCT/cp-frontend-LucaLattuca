import React from "react";
import  { useState } from "react";
import '../app.css';

const Button = ({name, active}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
    className="header-button" 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
        style={{
            backgroundColor: isHovered ? "black" : "white",
            color: isHovered ? "white" : "black",
            border: isHovered? "white solid 2px" : "black solid 2px",
            boxShadow: isHovered ? "0px 0px" : "3px 3px",
            top: isHovered ? "3px" : "0px",
            left: isHovered ? "3px" : "0px",

        }}
    >
        {name}
    </button>
  );
}

export default Button;