import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { DistrictContext } from "./context/DistrictNow";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";

// import { AppContext } from './pages/Context';
// import AdminSidebar from './components/admin/AdminSidebar';
// import Sidebar from './components/Sidebar';
// import Addpost from './components/AddPost';
// import PostComponent from './components/PostComponent';
// import ChatComponent from './components/ChatComponent';
import Workers from "./pages/admin/Workers";
import Services from "./pages/admin/Services";

import Subscribe from "./pages/admin/Subscribe";
import Userroutes from "./routes/Userroutes";
import Adminroutes from "./routes/Adminroutes";
import NavbarBeforeLogin from "./components/NavbarBeforeLogin";


// admin

function App() {
    const isAuth = Boolean(useSelector((state) => state.user.token));
    return (
        <Routes>
            <Route path="/admin/*" element={<Adminroutes />}></Route>
            {/* <Route path="/" element={isAuth ? <LandingPage /> : <NavbarBeforeLogin />}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/*" element={<Userroutes />}></Route>
        </Routes>
    );
}

export default App;
