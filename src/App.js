import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Userroutes from "./routes/Userroutes";
import Adminroutes from "./routes/Adminroutes";


// admin

function App() {
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
