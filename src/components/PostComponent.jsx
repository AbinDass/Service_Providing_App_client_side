import React, { useEffect, useState } from "react";

import { getPosts } from "../API/postApi";
import Post from "./Post";

const PostComponent = ({load}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        getPosts().then((posts) => {
            setPost(posts.data);
            console.log('object')
            console.log(posts.data)
        });
    
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
