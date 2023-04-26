import React from "react";

const Banner = () => {
    return (
        <div
            className="text-white py-2 px-4  text-center flex justify-center  items-center"
            style={{
                backgroundImage: "url('https://msgtravelnursing.com/wp-content/uploads/2018/08/Banner_Job_Seeker.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "300px",
                opacity: "0.7",
            }}
        >
            <div className="flex flex-col font-bold space-y-10">
                <h1 className="text-blue-800  md:text-4xl ">DO YOUR OWN DREAM JOB HERE !</h1>
                <h1 className="text-black md:text-2xl "> FIND THE PASSIONATE PROFILES</h1>
            </div>
        </div>
    );
};

export default Banner;
