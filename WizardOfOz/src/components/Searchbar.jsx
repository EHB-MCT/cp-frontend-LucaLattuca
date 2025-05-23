import React from "react";

const Searchbar = () => {


    return (
        <div className="searchbar">
            <input type="text" placeholder="Zoek hier naar een sprookje..." />
            <button type="submit">Zoek</button>
        </div>
    );
}

export default Searchbar;