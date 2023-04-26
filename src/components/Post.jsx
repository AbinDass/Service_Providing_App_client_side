/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import AddComment from "./AddComment";
import { Axiosuser } from "../API/axiosinstance";

import { likePost } from "../API/postApi";
import LoginRequest from "./confrmations/LoginRequest";
const Post = ({ item  }) => {
    const isAuth = Boolean(useSelector((state) => state.user.token));

    const [allComments, setAllcomments] = useState([]);
    const [comment, setComment] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [like, setLike] = useState(false);
    const [loginplease, setLoginplease] = useState(false);
    const [likecount, setLikecount] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        Axiosuser.get(`/posts/getComments/${postId}`,{headers: { Authorization: token }}).then((response) => {
            setAllcomments(response.data.comments);
            console.log(allComments, "dataaaaaaaaaaaaaaaaaaaa");
        });
    }, [comment, refresh]);
    const user = useSelector((state) => state.user.data.user);
    const post = useSelector((state) => state.post.postdata);
    console.log(post,'ith posting');

    const postId = item?._id;
    const userId = user?._id;
    const handleLike = () => {
        setLike(!like);
        likePost(postId, userId);
    };
const loginPlease = () => {
    setLoginplease(true)
}
    if(like===true){
        
    }
    return (
        <div>
            <div className=" flex flex-col py-10">
                {/* ----------------------header-------------------- */}
                <div className="flex justify-between px-10 py-10 text-black">
                    <img className="h-10 w-10 rounded-full border-2 border-zinc-800" src={item?.userId?.profilepicture} alt="profileimg" />
                    <h2 className="text-xl">
                        {item?.userId.firstname} {item?.userId.secondname}
                    </h2>
                    <CiCircleMore className="h-8 w-8" />
                </div>
                {/* -----------------postimg--------------------- */}
                <div className="flex flex-col space-x-20">
                    <img className="px-10" src={item?.image} alt="postimg" />
                    <div className=" pr-16  text-center p-2 ">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.caption}</p>
                    </div>
                </div>
                {/* ------------------------like&&comments-------------------- */}

                <div>
                    {isAuth ? <div className="flex space-x-10 py-5 ml-10 mt-5">
                        {!like ? (
                            <GrFavorite size={32} className="cursor-pointer" onClick={handleLike} />
                        ) : (
                            <MdFavorite size={32} className="cursor-pointer" onClick={handleLike} />
                        )}
                        <FaRegCommentAlt size={30} onClick={() => setComment((prev) => !prev)} className="cursor-pointer" />
                    </div>:  <div className="flex space-x-10 py-5 ml-10 mt-5">      
                            <GrFavorite size={32} className="cursor-pointer" onClick={loginPlease} />
                            <FaRegCommentAlt size={30} onClick={loginPlease} className="cursor-pointer" />
                    </div>}

                    <div  className={`${comment ? "block" : "hidden"}`}>
                        {isAuth ? <AddComment postId={item._id} commentsis={allComments} refresh={refresh} setRefresh={setRefresh} />: <h1 className="text-center">please login</h1>}
                        {/* {console.log(allComments,'allcomments')} */}
                    </div>
                </div>
            </div>
           { loginplease?<LoginRequest setLoginShow={setLoginplease} />:null}
        </div>
    );
};

export default Post;
