import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div id='logo'>
                <img src="" alt="" />
            </div>
           <div id='aboutText'>
            <h1>About</h1>
            <p>Deze website is een portaalsite van een verzameling van sprookjesverhalen, vertelt in de vorm van een interactieve parallax website. Elk sprookje heeft zijn eigen website waarin het sprookje verteld wordt terwijl je scrollt.
            <br />
            Elke sprookjessite is gemaakt door een student aan de Erasmushogeschool Brussel in het academiejaar 2024-2025, voor het vak Front-End.</p>
           </div>
        <button>Home</button>
        <button>Sprookjes</button>
        </footer>
    );
};


export default Footer;