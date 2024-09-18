import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthenLayout = () => {
    if(window.localStorage.getItem("token") == null && window.location.pathname !== "/login") {
        window.location.href = "/login";
    }
    return (
        <Outlet/>
    );
};

export default AuthenLayout;