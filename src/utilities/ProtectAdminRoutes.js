import React from 'react'
import { useSelector } from 'react-redux';
// import Userroutes from '../routes/Userroutes';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectAdminRoutes = () => {
    const isAuth = Boolean(useSelector((state) => state.user.token));
    return (
        isAuth ? <Outlet /> : <Navigate to='/admin' />
    )
}

export default ProtectAdminRoutes
