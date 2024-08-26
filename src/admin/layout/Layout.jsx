import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';
import SideBar from './sideBar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <SideBar/>
            <main>
                
                <Outlet /> 
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
