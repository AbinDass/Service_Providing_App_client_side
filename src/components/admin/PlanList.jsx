import React from "react";

const PlanList = ({ list, setList, plans }) => {
    return (
        <div className="md:w-full w-[460px]">
            <section className="bg-white py-20 ">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <button
                                className="bg-green-400 h-10 text-2xl mb-20 font-bold rounded-md md:w-[50%]"
                                onClick={() => setList(!list)}
                            >
                                {" "}
                                Add subscription{" "}
                            </button>
                            <div className="max-w-full overflow-x-auto">
                                <table className="table-auto md:w-[800px] w-full ">
                                    <thead>
                                        <tr className="bg-primary text-center">
                                            <th className="md:w-[150px] w-[100px]">main heading</th>
                                            <th className="md:w-[150px] w-[100px]">sub heading</th>
                                            <th className="md:w-[150px] w-[100px]">price</th>
                                            <th className="md:w-[150px] w-[100px]">description</th>
                                            <th className="md:w-[150px] w-[100px]">Action</th>
                                        </tr>
                                    </thead>

                                    {plans.map((item) => (
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
                                                    {item.mainHead}
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
                                                    {item.subHead}
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
                                                    {item.price}
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
                                                    <button className="bg-red-400 w-24 rounded-md hover:bg-slate-300">
                                                        delete
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
    );
};

export default PlanList;
