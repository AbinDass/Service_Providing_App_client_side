import React from "react";
import { Route, Routes } from "react-router-dom";
import NearByServices from "../pages/NearByServices";
import Subscribtion from "../pages/Subscribtion";
import Profile from "../pages/Profile";
import ServiceList from "../pages/ServiceList";
import ControlPanel from "../pages/ControlPanel";
import About from "../pages/About";
import Messenger from "../pages/Messenger";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forbidden from "../pages/Forbidden";
import ProtectUserRoutes from "../utilities/ProtectUserRoutes";
const Userroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/post" element={<Home />}></Route>
                <Route path="/servicelist/:title" element={<ServiceList />}></Route>
                <Route path="/nearbyservices" element={<NearByServices />}></Route>
                <Route path="/profile/:profileid" element={<Profile />}></Route>

                <Route element={<ProtectUserRoutes />} >
                <Route path="/subscribe" element={<Subscribtion />}></Route>
                <Route path="/controlpanel" element={<ControlPanel />}></Route>
                <Route path="/chat" element={<Messenger />}></Route>
                </Route >

                <Route path="/*" element={<Forbidden />}></Route>
                <Route path="/login/*" element={<Forbidden />}></Route>
                <Route path="/signup/*" element={<Forbidden />}></Route>
                <Route path="/about/*" element={<Forbidden />}></Route>
                <Route path="/post/*" element={<Forbidden />}></Route>
                <Route path="/servicelist/:title/*" element={<Forbidden />}></Route>
                <Route path="/nearbyservices/*" element={<Forbidden />}></Route>
                <Route path="/subscribe/*" element={<Forbidden />}></Route>
                <Route path="/profile/:profileid/*" element={<Forbidden />}></Route>
                <Route path="/controlpanel/*" element={<Forbidden />}></Route>
                <Route path="/chat/*" element={<Forbidden />}></Route>
            </Routes>
        </div>
    );
};

export default Userroutes;
