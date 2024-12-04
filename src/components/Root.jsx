import React from 'react';
import HeaderLayout from './layoutComponent/HeaderLayout';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <HeaderLayout></HeaderLayout>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;