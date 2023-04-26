import React from "react";

const AdverticementCard = ({ service }) => {
    return (
        <div className="rounded  flex flex-col justify-center items-center shadow-lg">
            <img className="w-16 h-16"  src={service.servicelogo} alt="Advertisement" />
            <p className="text-black">{service.title}</p>
        </div>
    );
};

export default AdverticementCard;
