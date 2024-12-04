import React from 'react';
import HeaderLayout from './layoutComponent/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <HeaderLayout></HeaderLayout>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;