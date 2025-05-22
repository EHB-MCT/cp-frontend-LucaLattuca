import React from 'react';
import { Link } from "react-router";
import Button from './Button';
import logo from '../assets/portal/logo.svg';
import divider from '../assets/portal/divider.svg';

const Header = () => {
    return (
        <header>
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
                    <Link to="/About">
                    {/* take to the bottom of the home page + clicked in when on a sprookje */}
                        <Button name="About"/>
                    </Link>
                </div>
                
            </div>

            {/* Searchbar appears when om home page */}
            

            
                <img id='header-divider' src={divider} alt="headerDivider" />
         
            
        </header>
    );
};


export default Header;