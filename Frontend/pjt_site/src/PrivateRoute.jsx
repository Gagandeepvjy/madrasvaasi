import React from 'react';
import {Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { token } = useAuth();
    console.log(token);
    if (!token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default PrivateRoute;