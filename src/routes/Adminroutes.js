import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Workers from "../pages/admin/Workers";
import Services from "../pages/admin/Services";
import Subscribe from "../pages/admin/Subscribe";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectAdminRoutes from "../utilities/ProtectAdminRoutes";
import Forbidden from "../pages/Forbidden";

const Adminroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/worker" element={<Workers />}></Route>
                <Route path="/service" element={<Services />}></Route>
                <Route path="/subscribe" element={<Subscribe />}></Route>
              
                <Route path="/admin/*" element={<Forbidden />}></Route>
            </Routes>
        </div>
    );
};

export default Adminroutes;
