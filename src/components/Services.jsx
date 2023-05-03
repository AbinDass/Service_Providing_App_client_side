import React from "react";
import { Link } from "react-router-dom";
const Services = ({ allServices }) => {
    let dists 
    document.addEventListener('myEvent', function(event) {
       dists =  event.detail.value
    });

    return (
        <div className="w-full  place-items-center grid md:grid-cols-3 ">
            {allServices.map((service,index) => (   
                <>
                    <div key={index} className="w-[300px] shadow-xl flex  items-center bg-white flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300 min-h-[400px]">
                        <div className="flex flex-col justify-center items-center">

                        <h2 className="text-2xl font-bold text-center py-8" >{service.title}</h2>
                        <img className="h-[130px] w-[200px] rounded"  src={service.thumbnail} alt="/" />
                        <div className="h-[100px] overflow-y-scroll p-5">{service.description}</div>
                        </div>
                        <Link  to={"/servicelist/" + service.title}>
                            {" "}
                            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                See All
                            </button>
                        </Link>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Services;
