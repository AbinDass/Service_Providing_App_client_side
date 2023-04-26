import React from "react";
import cleaningImg from "../assets/man-cleaning-landpage.webp";
import homeimprove from "../assets/home-improvement.jpg";
import { Link } from "react-router-dom";

const HeroAbout = () => {
    return (
        <div className="bg-white w-full py-6">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b-4 pb-5 border-black">
                <img className="w-[500 px] mx-auto my-4 " src={cleaningImg} alt="/" />
                <div className="flex flex-col justify-center items-center space-x-4 px-4">
                    <p className="md:text-3xl text-2xl font-bold ">WHAT WE PROVIDES </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">complete daily solution</h1>
                    <p>
                        We providing a pltform to sell your <span className="text-red-500">Service</span>
                    </p>
                    <h3 className="md:text-3xl pt-5">
                        The world of work has changed forever. Now let’s change it for good.
                    </h3>
                    <Link to="/nearbyservices" ><button className="bg-black text-white h-9 w-24 rounded-md mt-10">Explore Now</button></Link>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pt-5">
                <div className="flex flex-col justify-center items-center space-x-4">
                    <p className="md:text-3xl text-2xl font-bold">What We Offer</p>

                    <p className="pt-12 font-medium px-4">
                        We facilitate crucial conversations through the use of tailored surveys, workshops, and one-on-one
                        interviews with your team. No technical jargon, ten-page questionnaires, or complex line graphs. We
                        cut to the heart of what will keep your employees happy and your business growing.
                    </p>
                </div>
                <img className="w-[500 px] mx-auto my-4 " src={homeimprove} alt="/" />
            </div>
        </div>
    );
};

export default HeroAbout;
