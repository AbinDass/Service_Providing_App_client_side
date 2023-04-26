import React from "react";
import { serviceDelete } from "../../API/servicesApi";
const ShowService = ({ servicelist }) => {
    return (
        <div>
            <div className="md:w-full w-[460px]">
                <section className="bg-white py-20 ">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-full overflow-x-auto">
                                    <table className=" table-auto md:w-[800px] w-full ">
                                        <thead>
                                            <tr className="bg-primary text-center">
                                                <th className="md:w-[150px] w-[100px]">title</th>
                                                <th className="md:w-[150px] w-[100px]">image</th>
                                                <th className="md:w-[150px] w-[100px]">description</th>

                                                <th className="md:w-[150px] w-[100px]">action</th>

                                                {/* <th className='md:w-[150px]'>fname</th> */}
                                            </tr>
                                        </thead>
                                        {servicelist.map((item) => (
                                            <tbody>
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
                                                        {item.title}
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
                                                        <img src={item.thumbnail} alt="/" />
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
                                                        {item.description}
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
                                                        <button
                                                            onClick={() => {
                                                                serviceDelete(item._id);
                                                            }}
                                                            className="bg-red-400 w-24 rounded-md hover:bg-slate-300"
                                                        >
                                                            DELETE
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShowService;
