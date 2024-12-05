import React from 'react';
import HeaderLayout from './layoutComponent/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <HeaderLayout></HeaderLayout>
             <div className='min-h-svh '>
                 <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;