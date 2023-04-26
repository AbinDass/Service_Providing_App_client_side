import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AddService from "../../components/admin/AddService";
import ShowService from "../../components/admin/ShowService";
import { getNearbyServices } from "../../API/servicesApi";

const Services = () => {
    const [showservice, setShowService] = useState(false);
    const [servicelist, setServicelist] = useState([]);
    useEffect(() => {
        getNearbyServices().then((res) => {
            setServicelist(res.data.services);
            console.log(res.data.services, "use efffect loading all services");
        });
    }, []);

    return (
        <div className="w-full">
            <AdminNavbar />
            <div className="flex py-10  ">
                <div className="hidden lg:block px-10 ">
                    <AdminSidebar />
                </div>

                <div className="sm:w-[1240px]">
                    <div className="py-10 flex items-center  gap-5 text-center">
                        {!showservice ? (
                            <button
                                onClick={() => setShowService(!showservice)}
                                className="bg-green-300 h-12 px-5 font-medium rounded-md w-full"
                            >
                                ADD SERVICES
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowService(!showservice)}
                                className="bg-green-300 h-12 px-5 font-medium rounded-md w-full"
                            >
                                SEE SERVICES
                            </button>
                        )}
                    </div>
                    {!showservice ? <ShowService servicelist={servicelist} /> : <AddService showservice={showservice} setShowService={setShowService}/>}
                </div>
            </div>
        </div>
    );
};

export default Services;
