import React from "react";
// import {AiFillDelete} from 'react-icons/ai'
const Commentbox = ({ item }) => {
    return (
        <div className="flex">
            <div className="flex space-x-5 py-5 px-5">
                <img src={item?.UserId?.profilepicture} alt="/" className="h-10 w-10 rounded-full " />
                <h2 className="text-black">{item?.UserId?.firstname}</h2>
            </div>

            <div className=" flex text-center pt-10 pl-20">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
            </div>
        </div>
    );
};

export default Commentbox;
