import React from "react";
import AdminDash from "../../components/admin/AdminDash";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";

function Dashboard() {
    return (
        <div>
            <AdminNavbar />
                <div className="flex pt-10">
                    <div className="hidden  lg:block px-10 h-[600px]">
                            <AdminSidebar />
                    </div>
            <div className="flex flex-wrap py-10  ">

                <div className=" flex flex-wrap justify-center md:ml-40 flex-col items-center  text-center ">
                    <AdminDash />
                </div>

            </div>
                </div>
        </div>
    );
}

export default Dashboard;
