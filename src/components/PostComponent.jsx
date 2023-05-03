/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { getPosts } from "../API/postApi";
import Post from "./Post";

const PostComponent = ({load, setLoader}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        setLoader(true)
        getPosts().then((posts) => {
            setPost(posts.data);
        });
        setLoader(false);
    
    },[load]);
 
    return (
        <div className="bg-blue-100 mt-10 rounded-md">
            {post.length !== 0 ?
                post.map((item) => {
                    return <Post key={item._id} item={item} />;
                }):<div className="text-xl text-center py-10 capitalize text-red-600">no posts yes</div>}
        </div>
    );
};

export default PostComponent;
