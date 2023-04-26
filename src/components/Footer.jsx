import React from "react";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" mx-auto py-16 bg-slate-200 px-4 grid lg:grid-cols-3 gap-8 text-black">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">SOCIAL-EXPO</h1>
                <p className="py-4 capitalize font-medium text-2xl">
                    your complete daily life solution here 
                </p>
                <div className="flex md:w-[75%] justify-between my-6">
                    <FaDribbbleSquare />
                    <FaFacebookSquare />
                    <FaGithubSquare />
                    <FaInstagram />
                    <FaTwitterSquare />
                </div>
            </div>

            <div className="lg:col-span-3 flex justify-between">
                <div>
                    <h5 className="font-medium text-gray-500">Solutions</h5>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing </li>
                        <li className="py-2 text-sm">Commerce </li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-medium text-gray-500">Support</h5>
                    <ul>
                        <li className="py-2 text-sm">Pricing </li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">Api Status</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-medium text-gray-500">Company</h5>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Contact</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Career</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-medium text-gray-500">Legal</h5>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
