import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import WorkersControl from "../../components/admin/WorkersControl";
import { getAllworkers } from "../../API/dashboardcontrols";

const Workers = () => {
    const [workers, setWorkers] = useState([])
   const listOFworkers = async () => {
    const res = await getAllworkers()
    setWorkers(res.data)
    }
    useEffect(()=>{
        listOFworkers()
    },[])

    console.log(workers,12312312)
    return (
        <div className="w-full">
            <AdminNavbar />
            <div className="flex py-10  ">
                <div className="hidden lg:block px-10 ">
                    <AdminSidebar />
                </div>

                <div className="sm:w-[1240px]">
                    <WorkersControl workers={workers}/>
                </div>
            </div>
        </div>
    );
};

export default Workers;
