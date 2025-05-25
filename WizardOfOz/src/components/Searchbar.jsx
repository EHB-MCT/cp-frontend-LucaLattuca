import React from "react";
import searchIcon from '/cp-frontend-LucaLattuca/searchIcon.svg';

const Searchbar = ({ query, setQuery }) => {


    return (
        <div className="searchBar">
            
            <img src={searchIcon} alt="Search icon" />
           
            <input type="text" placeholder="  Zoek hier naar een sprookje..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button type="submit">Zoek</button>
        </div>
    );
}

export default Searchbar;