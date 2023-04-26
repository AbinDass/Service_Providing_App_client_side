import React from "react";
import HeroAbout from "../components/HeroAbout";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import NavbarBeforeLogin from "../components/NavbarBeforeLogin";


const LandingPage = () => {
   
    const isAuth = Boolean(useSelector((state) => state.user.token));

    return (
        <div>
            <div>
                {isAuth ? <Navbar /> : <NavbarBeforeLogin />}
            </div>
            
            <div className="pt-32">
                <HeroContent />
            </div>
            <HeroAbout />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default LandingPage;
