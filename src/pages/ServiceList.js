/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkSubscription, getNearbyServices, getWorkersList } from "../API/servicesApi";
import AddService from "../components/AddService";
import Listservices from "../components/Listservices";
import Navbar from "../components/Navbar";
// import Sidebar from '../components/Sidebar'
import { useSelector } from "react-redux";
import { checkServiceAdded } from "../API/servicesApi";
import Banner from "../components/Banner";
import NavBarListPage from "../components/NavBarListPage";
import Footer from "../components/Footer";
import DeleteService from "../components/confrmations/DeleteService";
import { DistrictContext } from "../context/DistrictNow";
import ProvidingServiceCard from "../components/ProvidingServiceCard";
import Loader from "../components/loader/Loader";

const ServiceList = () => {
    const [hide, setHide] = useState(true);
    const[services, setServices] = useState([]);
    const [servicelist, setServicelist] = useState([]);
    const [serviceExist, setServiceExist] = useState(false);
    const [subscriptionTrue, setSubscriptionTrue] = useState(false);
    const [deleteMyService, setDeleteService] = useState(false);
    const [ShowLoginText, setShowLoginText] = useState(false);
    const [loader, setLoader] = useState(false);
    const { title } = useParams();
    const { districtNow } = useContext(DistrictContext);
 
    const isAuth = Boolean(useSelector((state) => state.user.token));
    const user = useSelector((state) => state.user.data.user);
    const id = user?._id;
    const getUserServiceAdded = async () => {
        const res = await checkServiceAdded(id);
        
        if (!res.data.success) {
            setServiceExist(true);
        }
        setServiceExist(res.data.success);
       
    };

    const getUserSubscriptionAdded = async () => {
        const res = await checkSubscription(id);
        setSubscriptionTrue(res.data.success);
    };

    useEffect(() => {
        setLoader(true)
        getUserSubscriptionAdded();
        getUserServiceAdded();
        getWorkersList(title, id, districtNow).then((res) => {
            setServicelist(res.data);
            setLoader(false)
        });
    }, [deleteMyService, districtNow]);

    const deleteService = () => {
        setDeleteService(true);
    };

    useEffect(() => {
        getNearbyServices(id).then((res) => {
            setServices(res.data.services);
        });
    }, []);
    return (
        <div className="bg-white min-h-[1000px] h-screen">
            <div>
                <Navbar />
            </div>
            {/* <div className="bg-blue-200 px-10  mx-10 h-8" >
                    see service list
      </div> */}
            <div className="pt-16">
                <NavBarListPage />
            </div>
            <div className="border-2 border-black">
                <Banner />
            </div>
            {deleteMyService ? <DeleteService open={setDeleteService} /> : null}
            <div>
                            <ProvidingServiceCard allServices={services}/>
                        </div>
            {isAuth ? (
                <div className="text-center pt-10">
                    {serviceExist ? (
                        <div className="flex justify-around items-center flex-col lg:flex-row px-20">
                            <div className="flex space-x-10 lg:w-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 text-green-300 font-bold"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <h1 className=" capitalize text-md text-green-500">you are already added your service</h1>
                                <h2 className=" capitalize text-md text-red-500">
                                    if you want to change delete the added One
                                </h2>
                            </div>
                            <button
                                onClick={deleteService}
                                className="bg-red-300 w-32 h-10 rounded-md hover:text-white hover:bg-red-600"
                            >
                                Delete Now
                            </button>
                        </div>
                    ) : hide ? (
                        <div className="flex justify-center justyfy-around space-x-5">
                            <div>
                                <h1>NOW YOU CAN ADD YOUR SERVICE HERE </h1>
                                <h3 className="text-red-500 capitalize">Do not miss it</h3>
                            </div>
                            <button
                                onClick={() => setHide(!hide)}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    ADD SERVICE
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button
                                onClick={() => setHide(!hide)}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    SEE SERVICE
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center w-full space-x-10">
                    <div className="pt-5">
                        
                    <button
                                onClick={() => setShowLoginText((prev)=> !prev)}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    ADD YOUR SERVICE
                                </span>
                            </button>
                    </div>

                    {ShowLoginText?<div className="capitalize text-xl flex flex-col justify-center items-center font-medium ">
                        <h1 className="pt-10">without login you can't add your service ...</h1>
                    </div>:null}
                    
                </div>
            )}

            <div className="flex items-center justify-center pt-16 ">
                <div className="px-10 sm:flex md:w-full flex-wrap justify-center  gap-10 ">
                    {!hide ? (
                        <div className="w-full">
                            <AddService serviceExist={serviceExist} subscriptionTrue={subscriptionTrue} />
                        </div>
                    ) : servicelist.length !== 0 ? (
                        servicelist.map((worker, index) => (
                            // console.log(worker,'ithhhhhhhhh')
                            <Listservices key={index} worker={worker} />
                        ))
                    ) : (
                        <div className="text-red-700 capitalize text-xl">
                            sorry! currently there is no services in this location
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-20">
                <Footer />
            </div>
            {loader ? <Loader loader={loader}/> : null}
        </div>
    );
};

export default ServiceList;
