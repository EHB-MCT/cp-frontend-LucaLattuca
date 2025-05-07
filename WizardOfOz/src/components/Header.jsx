import React from 'react';
import { Link } from "react-router";


const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h1>Wizard Of Oz</h1>
            </div>

            <div className="navigation">
                <h2><Link to="/">Home</Link></h2>
                {/* <h2><Link to="/makingof">Making Of</Link></h2> */}
                <h2><Link to="/portal">Sprookjes</Link></h2>
                {/* <h2><Link to="/story">Story</Link></h2> */}
                <h2><Link to="/story">About</Link></h2>
            </div>
        </header>
    );
};


export default Header;