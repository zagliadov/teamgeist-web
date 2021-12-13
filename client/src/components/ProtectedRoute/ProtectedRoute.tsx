import { FC, useState, useEffect, useContext } from 'react';
import { Route, useNavigate, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import AppLayout from '../AppLayout/AppLayout';



 const ProtectedRoute: FC = (): any => {
    const [auth, ] = useContext(AuthContext);

    return auth ? <AppLayout /> : <Navigate to='/login' />;

};

export default ProtectedRoute;

