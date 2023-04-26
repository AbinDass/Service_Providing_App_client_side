/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GoDashboard } from "react-icons/go";
import { CgUserList } from "react-icons/cg";
import { GrUserWorker } from "react-icons/gr";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="h-[500px] flex  justify-center items-center">
            <div className="bg-[#455A64] h-full py-10 max-w-[500px] rounded-lg">
                <ul classNmae="py-10  ">
                    <Link to="/admin/dashboard">
                        {" "}
                        <li className="mx-20  bg-black">
                            <div className="h-8 flex bg-white px-10 mt-10 rounded-md items-center cursor-pointer ">
                                <GoDashboard className="mr-4" size={20} />
                                <h3 className=" font-medium">Dashboard</h3>
                            </div>
                        </li>
                    </Link>

                    <Link to="/admin/subscribe">
                        {" "}
                        <li className="mx-20">
                            <div className="h-8  flex bg-white px-10 mt-10 rounded-md items-center cursor-pointer ">
                                <CgUserList className="mr-4" size={20} />
                                <h3 className=" font-medium">subscriptions</h3>
                            </div>
                        </li>
                    </Link>

                    <Link to="/admin/users">
                        {" "}
                        <li className="mx-20">
                            <div className="h-8  flex bg-white px-10 mt-10 rounded-md items-center cursor-pointer ">
                                <CgUserList className="mr-4" size={20} />
                                <h3 className=" font-medium">UserList</h3>
                            </div>
                        </li>
                    </Link>

                    <Link to="/admin/worker">
                        {" "}
                        <li className="mx-20 w-60">
                            <div className="h-8 w-full flex bg-white px-10 mt-10 rounded-md items-center cursor-pointer">
                                <GrUserWorker className="mr-4" size={20} />
                                <h3 className=" font-medium ">Worker manage</h3>
                            </div>
                        </li>
                    </Link>

                    <Link to="/admin/service">
                        <li className="mx-20">
                            <div className="h-8 flex bg-white px-10 mt-10 rounded-md items-center cursor-pointer">
                                <MdMiscellaneousServices className="mr-4" size={20} />
                                <h3 className=" font-medium">Services</h3>
                            </div>
                        </li>
                    </Link>

                    {/* <Link to="/admin/projects">
                        {" "}
                        <li className="mx-20">
                            <div className="h-8 flex bg-white px-10 mt-10 rounded-md items-center mb-10 cursor-pointer">
                                <GrProjects className="mr-4" size={20} />
                                <h3 className=" font-medium">Projects</h3>
                            </div>
                        </li>
                    </Link> */}
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;
