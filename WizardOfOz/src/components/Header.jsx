import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from './Button';
import SearchBar from './Searchbar';

import logo from '../assets/portal/logo.svg';
import divider from '../assets/portal/divider.svg';

const Header = ({ query, setQuery }) => {
    const location = useLocation();


    const isHomePage = location.pathname === '/';
    const isMakingOfPage = location.pathname === '/makingof';

    return (
        <header className={`header ${isHomePage ? "large-header" : "small-header"}`} >
            <div id='header-nav'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>

                <div id="header-btns">
                    <Link to="/">
                        <Button name="Home"/>
                    </Link>
                    <Link to="/portal">
                        <Button name="Sprookjes"/>
                    </Link>
                    {isMakingOfPage ? (
                    
                    <Link to="/makingof">
                        <Button name="Making Of"/>
                    </Link>
                    
                    ) : (
                        <Button name="About"/>
                    )}
                </div>
                
            </div>
            {isHomePage && (
                <section className="hero">
                <div className='hero-text'>
                    
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                        </div>
            
                        <h1>De sprookjes portaalsite voor alle interactieve sprookjeservaringen</h1>


                </div>
                <SearchBar query={query} setQuery={setQuery} />
            </section>
            )}
            
            

            {/*TODO  Searchbar appears when om home page */}
            
                <img id='header-divider' src={divider} alt="headerDivider" />
         
            
        </header>
    );
};


export default Header;