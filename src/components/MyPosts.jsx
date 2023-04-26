import React, { useEffect, useState } from "react";

const MyPosts = ({post}) => {
    const [postless , setPostless] = useState([]);
    useEffect(() =>{
        setPostless(post.slice(0, 3))
    },[post])
    return (
        <div className="flex flex-wrap">
           
            <div className="w-full  rounded-md">
                <div className="flex flex-wrap gap-5 justify-center">

                    {postless.map((item) => (
                    <div className="group group/item flex flex-col singleJob w-[200px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700">
                        <img src={item?.image[0]} alt="post" className="h-[150px] w-[100px"/>
                        <span>{item?.caption}</span>
                        {/* <span>{item.createdAt.toLocaleString()}</span> */}
                        {/* <span>{new Date(item.createdAt * 1000).toLocaleString}</span> */}
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MyPosts;
