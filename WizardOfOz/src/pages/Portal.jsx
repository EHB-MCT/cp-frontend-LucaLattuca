import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Stories from '../components/Stories';
import Searchbar from '../components/Searchbar';
import ThemeButton from '../components/ThemeButton';

const Portal = () => {
    const { query, setQuery } = useOutletContext(); 

    return (
        <main>
            <div className="main-top">
                <Searchbar query={query} setQuery={setQuery} />
                <ThemeButton/>
            </div>      

            <div className="filters"></div>
            <h1>Sprookjes</h1>        

            <Stories  query={query}/>

        </main>
    );
};

export default Portal;