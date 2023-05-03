import React from "react";

const LocationChoose = ({ visible, onClose, districts, setDistval, setDistrictNow, setOpendistric }) => {
    const handleclose = (e) => {
        if (!visible) return null;
        if (e.target.id === "container") {
            onClose();
        }
    };

    return (
        <div
            id="container"
            onClick={handleclose}
            className="fixed inset-0 bg-white bg-opacity-5 mx-auto flex flex-col flex-wrap items-center justify-center z-50 "
        >
            <div className=" text-white bg-[#C2E9FB] w-full mb-6 shadow-lg rounded-xl justify-center space-x-5 items-center flex flex-col flex-wrap md:max-w-[600px] ">
                <div onClick={() => setOpendistric(false)} className="text-red-600 w-full text-end p-5 text-xl cursor-pointer font-bold">X</div>
                <h3 className=" text-black font-bold py-10"> AVAILBLE DISTRICTS </h3>

                {districts.map((dist) => (
                    <div
                        onClick={() => {
                            setDistval(dist);
                            onClose();
                            setOpendistric(false)
                            setDistrictNow(dist);
                        }}
                        className="cursor-pointer py-5 space-x-5 overflow-y-scroll"
                    >
                        <div className="bg-[#C2E9FB] rounded hover:bg-white p-1 text-xl flex flex-col text-black font mediam">
                            {/* <div className='text-center'>aaa</div> */}
                            <h1>{dist}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationChoose;
