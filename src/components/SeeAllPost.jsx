/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { deletePost } from "../API/postApi";

const SeeAllPost = ({ onClose, showallpost, myposts, deletedpost, setdeletepost }) => {
 

    if (!showallpost) return null;
    const handleclose = (e) => {
        if (e.target.id === "container") {
            onClose();
        }
    };

    const deleteMyPost = async (postid) => {
       const res = await deletePost(postid)
       if(res.status === 200){
        setdeletepost(!deletedpost)
       }
    };
    return (
        <div
            id="container"
            onClick={handleclose}
            className=" fixed inset-0 bg-white bg-opacity-0  backdrop-blur-sm h-screen w-full  flex justify-center items-center"
        >
            <div className="  max-w-lg mx-auto md:max-w-2xl min-w-0 break-words p-4 bg-white w-full mb-6 shadow-lg h-[600px] overflow-y-scroll  rounded-xl mt-16">
                <div className="w-full  rounded-md">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {myposts.map((item) => (
                            <div className="group group/item flex flex-col singleJob w-[200px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700">
                                <img src={item?.image} alt="post" className="h-[150px] w-[100px" />
                                <div className="flex justify-between pt-5">
                                    <span>{item?.caption}</span>
                                    <img onClick={() => deleteMyPost(item?._id)} className="w-6 h-6 cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO2d328UVRTH75OJ/geEds6922I797bEbimrhGJJV1tCItX+gIo0kbTRhhp/1AdtE8HtgyU8mEiNPGviD9L4jj7qA2jUJxIh+iCJPGAKLitEfRlzdndqC1tmbtN27pw9n+Qk7WZo5tzv3ntnPptZhGAYhmEYhmEYhmEYhmEYhqGO1vohUPo0KHMdlAki6ndQZh7/TdLnTRZQZj5GEKvKk+a9pM+bLFB51wdek9kTdWxjRu8NZ8rWnF0dAtV3/WYdz3AgbgBgfJD6k5ibc7DFdR2U/higrVXUAwD+AVD6jgMDHzy49B0pTZ+gzPbm9gZP6VvY8Gu5fHB5cDwoHp1yqi4Pjgev5vKVKzSlb+E5C6qAMuex0eO7nkx84IsRhedYnS3nBUW8jN+LDbY0tQc/D7k3M4r31NXhicBv2lkJBXS/SCtNTaYRpF70pLlda21+v+eZxAe7GLPwXNe42bztKf2llO0twvkwlFm6r4HEN2izqrr9ruVBx59Xvhb+HvP8l5zeY3Bm4Im+0LGvPOWTfocXN3E5O5rd5/4eEy5TlMMorgilunwVhavUZyD6T+EquNHhSeJ0phzK1eGJ4Plsd2XJknpRuApeddTa1AnX0vaMv0O4DF514EaHa6sDAxZsRpV7k3rR+TBq4Ul9rbyvTJ8JSu+cS2VdmT4TBvGbSDueMj9iM5dOFBIf2NI66+LUXDg7fhBpB6T5Gpu5MDGb+MCW1lkXxmfCDfwrkXY8pT/DZr4YeyPxgS2tsz4fez1csj4VaQekOYvNnBuZjGz85uxC8G7+uWBXSzboas0Ghfxg+bWkjg/ro5HJcMn6QKQdUOYUNnN64Hhk44X84LJ2CfVEoXcosePDmj/0YngTeFKkHU/qV7CZt/tHIxvvas2uuqHEn/G1pI4P663+0UogSk+JtAMZPYrNvLx/ILJxUOa+u2J8Lanjw3pp/0BlyQJzRKSdRtX2FDZzZM+BxAPpXqHdbQI5/ER/dYb4eZF2PK81i830d/YkHkixhpeKE0hfZ091hvgdIu1kMtrDZnIml9pAciZXPg4/gBNpZ9u2zkewmZbmnaldslqaK5+tNzQ8/rCgACh9Fxu6MbOQuk39xszZ6j2IviuoEFcwgoMzhJRYtBWM4OAeQkos2gpGcDAQUmLRVjCCg0sWKbFoKxjBwU2dlFi0FYzgYCCkxKKtYAQHAyElFm0FIzgYCCmxaCsYwcFASIlFW8EIDgZCSizaCkZwMBBSYtFWMIKDgZATizaCERwLhKRYtBGM4FggJMViiKfMT1GCERwLJBSLKEcFNeIIRnAsEJJi0UYwgmOBkBSLNoIRHAuEpFi0EYzgWCAkxaKNYIQNGGD8zGOj/j5JsWgjGGEDAsHaqL9PUizaCEZwLBCSYtFGMIJjgZAUizaCERwLhKRYtBGM4FggZMViXMEIDl1lkRaLcQUjOHQfQlos3isYv5uacz6QSycKdMViXMEIDgVCWizGFYxdNZ4B3G35zOBGHU9aLMYVjIXeoeVvEgq/cWcu/4CnajfxeNJiMa5gvDm7UB40fCfjOxcHK+q58806nrRYXM8j0qWEi7RYDPGUHsYmx7oPJj7gpYg6tvdgGMiwoAp+nzo2qR/tCP6Y/TDxQS+tUXjj6u94rBxIKr8TywaQ+nts9M2+w4kPfGmNmn56JLwHuSiog/8ZiyfNP+HS9e3kqciHQUtbNCu+mTz5/1Ilzd9K6d2iHgBoexak/qt6WeleSVOS0j8k6gkpfQBpFkDpXz2p/006BA/PQepf8L4DPypIenwYhmEYhmEYhmEYhmEYhmEYhmEYRmwF/wHBGZeWya7mywAAAABJRU5ErkJggg==" alt="/delete"/>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeAllPost;
