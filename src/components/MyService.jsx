import React from "react";
// import { BiTimeFive } from 'react-icons/bi'

const MyService = ({ myservice }) => {
    return (
        <div className="flex justify-center">
            <div className="group group/item singleJob w-[400px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700">
                <span className="flex justify-between items-center gap-4">
                    <h1 className="text-[16px] font-semibold text-black "> {myservice?.servicetitle} </h1>
                    {/* <span  className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive /> Now
              </span> */}
                </span> 
                <h6 className="text-[#ccc] text-start">{myservice?.location}</h6>
                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]">{myservice?.description}</p>
                <div className="company flex items-center gap-2">
                    {/* <img src='' alt="Company Logo" className='w-[15%]'/> */}
                    <span className="text-[14px] py-[1rem] block ">{myservice?.labour} INR / H</span>
                </div>
            </div>
        </div>
    );
};

export default MyService;
