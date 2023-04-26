/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
// import image from '../assets/man-cleaning-landpage.webp'
import { createComment } from "../API/postApi";
// import { getComments } from "../API/postApi";
import { useSelector } from "react-redux";
import Commentbox from "./Commentbox";

const AddComment = ({ postId, commentsis, refresh, setRefresh }) => {
    // const [allcomments, setAllcomments] = useState({})
    const [comment, setComment] = useState("");

    const userId = useSelector((state) => state.user.data.user?._id);
    const submitComment = async (e) => {
        e.preventDefault();
        console.log(postId, "ithaanu post id");
        const res = await createComment(comment, userId, postId);
        if (res) {
            setRefresh(!refresh);
        }
        setComment("");
    };
    return (
        <div className=" h-full  rounded-md  bg-white text-white">
            <form onSubmit={submitComment}>
                <div className="py-5 flex items-center space-x-3 justify-center">
                    <input
                        type="text "
                        name="comments"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="bg-[#786e67] w-[50%] h-12 rounded-md text-white"
                    />
                    <button type="submit" className="bg-[#00df9a] w-20 h-8 rounded-lg text-black font-bold">
                        ADD
                    </button>
                </div>
            </form>

            {
                commentsis.map((item) => (
                    <Commentbox item={item} />
                ))
            }
        </div>
    );
};

export default AddComment;
