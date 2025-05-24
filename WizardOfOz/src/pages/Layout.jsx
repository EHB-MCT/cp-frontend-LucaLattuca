import React, {useState} from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = () => {
    const [query, setQuery] = useState("");

    

    return (
        <>
        <Header query={query} setQuery={setQuery}/>

        <Outlet context={{ query, setQuery }}/>
        <Footer/>
        </>
    );
};

export default Layout;