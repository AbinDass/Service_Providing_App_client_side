/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { userBlock } from "../../API/dashboardcontrols.js";
import { userUnblock } from "../../API/dashboardcontrols.js";

const Userlist = ({ list, refresh, setRefresh }) => {
    

    return (
        <div className="md:w-full w-[460px]">
            <section className="bg-white py-20 ">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">
                                <table className="table-auto md:w-[800px] w-full ">
                                    <thead>
                                        <tr className="bg-primary text-center">
                                            <th className="md:w-[150px] w-[100px]">first name</th>
                                            <th className="md:w-[150px] w-[100px]">second name</th>
                                            <th className="md:w-[150px] w-[100px]">email</th>

                                            <th className="md:w-[150px] w-[100px]">location</th>
                                            <th className="md:w-[150px] w-[100px]">role</th>
                                            <th className="md:w-[150px] w-[100px]">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item) => (
                                            <tr>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                                                >
                                                    {item.firstname}
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                    {item.secondname}
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                    {item.email}
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                    {item.location == null ? "not added" : item.location}
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                    {item.role}
                                                </td>

                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                                >
                                                    {item.access ? (
                                                        <button
                                                            className="bg-red-400 w-24 rounded-md hover:bg-slate-300"
                                                            onClick={() => {
                                                                userBlock(item._id);
                                                                setRefresh(!refresh);
                                                            }}
                                                        >
                                                            Block
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-green-400 w-24 rounded-md hover:bg-slate-300"
                                                            onClick={() => {
                                                                userUnblock(item._id);
                                                                setRefresh(!refresh);
                                                            }}
                                                        >
                                                            Un Block
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Userlist;
