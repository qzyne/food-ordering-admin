import React from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='d-flex'>
            <Sidebar className = 'col-1'/>
            <Outlet className='col-11'/>
        </div>
    );
};

export default AppLayout;