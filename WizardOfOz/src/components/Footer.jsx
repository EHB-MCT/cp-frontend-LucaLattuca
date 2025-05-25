import React from 'react';
import logo from '../assets/portal/logo.svg';
import Button from './Button';
import divider from '../assets/portal/divider.svg';

import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer id='footer'>
            {/* TODO footer theme  */}
          
            <img id='footer-divider' src={divider} alt="footerDivider" />  
            


            <div id='footer-nav'>
                
                    <img id='footer-logo' src={logo} alt="footerLogo" />
                

                <div id='aboutText'>
                    <h1>About</h1>
                    <p>Deze website is een portaalsite van een verzameling van sprookjesverhalen, vertelt in de vorm van een interactieve parallax website. Elk sprookje heeft zijn eigen website waarin het sprookje verteld wordt terwijl je scrollt.
                    <br />
                    <br />
                    Elke sprookjessite is gemaakt door een student aan de Erasmushogeschool Brussel in het academiejaar 2024-2025, voor het vak Front-End.</p>
                </div>
                <div id='footer-btns'>

                    <Link to="/">
                        <Button name="Home"/>
                    </Link>
                    <Link to="/portal">
                        <Button name="Sprookjes"/>
                    </Link>
                </div>

            </div>

        </footer>
    );
};


export default Footer;