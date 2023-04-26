import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SbscriptionCards from "../components/SbscriptionCards";
import { getSubscriptions } from "../API/servicesApi";
import Footer from "../components/Footer";
import NavBarListPage from "../components/NavBarListPage";

const Subscribtion = () => {
    // const [sub, setSub] =
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        getSubscriptions().then((res) => {
            console.log(res.data.plans, "function call subscribe");
            setPlans(res.data.plans);
        });
    }, []);
    return (
        <div>
            <Navbar />
            <div className=" pt-16">
            <NavBarListPage />
            </div>
            <div className="bg-white mx-auto p-24 ">
                <div className="md:flex gap-10">
                    {plans.map((item) => (
                        <SbscriptionCards item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Subscribtion;
