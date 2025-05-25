import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Stories from '../components/Stories';
import Searchbar from '../components/Searchbar';
import ThemeButton from '../components/ThemeButton';
import {useTheme} from "../components/ThemeProvider"

const Portal = () => {
    const { query, setQuery } = useOutletContext(); 
    const {theme} = useTheme();
    return (
        <main>
            <div className={`container ${theme}`}>

            <div className="main-top">
                <Searchbar query={query} setQuery={setQuery} />
                <ThemeButton/>
            </div>      

            <div className="filters"></div>
            <h1>Sprookjes</h1>        

            <Stories  query={query}/>

            </div>
        </main>
    );
};

export default Portal;