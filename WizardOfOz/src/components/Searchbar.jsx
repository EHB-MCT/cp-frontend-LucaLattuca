import React from "react";
import searchIcon from '/cp-frontend-LucaLattuca/searchIcon.svg';

const Searchbar = () => {


    return (
        <div className="searchBar">
            
            <img src={searchIcon} alt="Search icon" />
            <input type="text" placeholder="  Zoek hier naar een sprookje..." />
            <button type="submit">Zoek</button>
        </div>
    );
}

export default Searchbar;