import React from 'react'
import { useSelector } from 'react-redux';
// import Userroutes from '../routes/Userroutes';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectUserRoutes = () => {
    const isAuth = Boolean(useSelector((state) => state.user.token));
    return (
        isAuth ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectUserRoutes
