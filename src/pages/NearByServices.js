/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
// import Sidebar from '../components/Sidebar'
import { CheckSubscriptionExpired, getNearbyServices } from "../API/servicesApi";
import Footer from "../components/Footer";
import ProvidingServiceCard from "../components/ProvidingServiceCard";
import NavBarListPage from "../components/NavBarListPage";
import { useSelector } from "react-redux";
import moment from "moment";
import AddService from "../components/AddService";

const NearByServices = () => {
    const user = useSelector((state) => state.user.data.user);
    const userid = user?._id;
    const isAuth = Boolean(useSelector((state) => state.user.token));
    const subscriptionExpiry = user?.subscriptionexpirydate;
    // const [refresh, setRefresh] = useState(false);
    const [allServices, setAllservices] = useState([]);
    useEffect(() => {
        getNearbyServices(userid).then((res) => {
            setAllservices(res.data.services);
        });
        CheckSubscriptionExpired(userid)
    }, []);

    return (
        <div className="">
            <div>
                <Navbar />
            </div>

            <div className="pt-16">
                <NavBarListPage />
            </div>

            {!isAuth ? null
             : 
             subscriptionExpiry? <div className=" flex justify-center items-center w-full ">
                <div className="flex space-x-5 pt-10 capitalize">
                   <h1 className="text-md"> your subscription plan will be end on </h1>
                    <span className="text-red-500 font-medium text-lg"> 
                {moment(subscriptionExpiry).format("YYYY-MM-DD")}
                    </span>
                </div>
                </div>:null}
            <div className="flex py-10  w-full justify-center  items-center  h-full  bg-white">
                <div className="pt-10 md:w-full flex justify-evenly  space-y-5 px-5">
                    {allServices.length === 0 ? (
                        <div className="text-red-600 text-4xl flex justyfy-center items-center  capitalize font-medium md:h-[550px]">
                            services not available Now !
                        </div>
                    ) : (
                        <Services allServices={allServices} />
                    )}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default NearByServices;
