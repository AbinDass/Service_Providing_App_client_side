import React from "react";
// import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div className="flex justify-center w-full bg-[#455A64] h-24">
            <div className="flex w-full justify-around space-x-8 items-center">
                <div>
                    <h1 className="md:text-3xl text-[#00df9a] px-5 font-bold">SOCIAL-EXPO</h1>
                </div>
                <div className="hidden md:block">
                    <input type="text" className="h-8 w-72 rounded-md" />
                    <button className="ml-3 bg-green-500 rounded-md w-24 lg:mt-0 mt-2 text-white">search</button>
                </div>
                <div className="hidden md:flex justify-between">
                    <ul className="flex justify-between  space-x-3">
                        <li className=" md:text-2xl text-white hover:text-green-500 cursor-pointer">Home</li>
                        <li className=" md:text-2xl text-white hover:text-green-500 cursor-pointer">profile</li>
                    </ul>

                </div>

                        <button className="bg-[#00df9a] text-white h-9 w-24 rounded-md ">Log Out</button>
            </div>
        </div>
    );
};

export default AdminNavbar;
