import React from 'react';
import { Link } from "react-router";
import Button from './Button';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>

            <div className="navigation">
                <Link to="/">
                    <Button name="Home"/>
                </Link>
                <Link to="/portal">
                    <Button name="Sprookje"/>
                </Link>
                <Link to="/About">
                {/* take to the bottom of the home page + clicked in when on a sprookje */}
                    <Button name="About"/>
                </Link>
            </div>
            <img src="" alt="" />
        </header>
    );
};


export default Header;