import React, { useEffect, useState } from "react";
import { addPosts } from "../API/postApi";
import { MdDriveFolderUpload } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postAction } from "../redux/slice/postslice";
import { getPosts } from "../API/postApi";
import { upload } from "../middleware/imageupload";
const Addpost = ({ setLoad, load }) => {
    const dispatch = useDispatch();
    const [post, setPost] = useState();
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const user = useSelector((state) => state.user.data.user);
    const id = user?._id;

    useEffect(() => {
        
        getPosts(id);
    }, [setPost]);

    console.log(image, "888888888888888");
    const submitPost = async () => {
        const imageurl = await upload(image);
        const response = await addPosts(imageurl, post, id);
        console.log(response);
        if (response) {
            setPost("");
            setImage("");
            setLoad(!load);
            dispatch(
                postAction.setPost({
                    postdata: response,
                    caption: response.caption,
                    image: response.image,
                    isDeleted: response.isDeleted,
                    isLiked: response.isLiked,
                    likedUsers: response.likedUsers,
                    userId: response.userId,
                    _id: response._id,
                })
            );
            console.log(response);
        }
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <div className=" rounded-md w-full">
            <h1 className="text-center text-2xl font-medium capitalize pt-10">create post</h1>
            <div className="flex justify-center items-center ">
                <div className="flex flex-col justify-end items-end w-full border-3 ">
                    <label htmlFor="dropzone-file1" className="px-20 flex flex-col">
                        <input
                            id="dropzone-file1"
                            type="file"
                            accept="images/*"
                            name="image"
                            // onChange={(e) => setImage(e.target.files[0])}
                            onChange={handleImage}
                            className="w-0 h-0"
                        />
                        {/* <MdDriveFolderUpload className="w-20 h-20 " /> */}
                        <img
                            alt="/upload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZElEQVR4nO2azU8TQRjG9+TBxLMx6tn/y4PGdAUPKgcwfFpKuiMcsFKKOy0t27QUUeLBmMChgBckeDLtAcS0aPzATjWRpJq8ZrYfln7tdrvTLbvzJk9CJszOPL999t0pVBB48eLFixcvXo6v4eH4OeSSpySX/AmJGIxKEnFBcuEUEuUh/w3/+TMDVhKxpxPjjWHIezN9gYvCWSgk4iO66aPUPsAJMaw/+WP4sJeGpyPLZQjvH90JXxJ6vVDprnVivlonP75BxPNcveZ0H95HN4OXBScBgBoIs3fDXzy3568ITgIAKoSvEJ5cVa/tG4j8lseWr0/dW7ggOAUAlJKgeF+Y2mB16og2d/qGsxQAnBD4++sYdl7tQGg8ATP9wa6CoBB0AyjkDmyjw3d7lSQ4EkAhd1BJgeMBIK3egGyeAM3egGwOYDcUrWhjdqm+NyAHAaCq6w2oywBIJgWL7gSEJxOQz6adBYBk0hAci1c2IY/EIJdJOQMAyaQAjxbN+4YSqujPFAiLJPQUAFJ15x8PxmF96xA2tj+C70GCWRJ6BgBpYD65+1kVSwg9AYC0MM8aguUAiA7zLCFYCoC0YZ4VBMsAEAPmWUCwBADpwLzZELoOgJhg3kwIXQew6C5umB5wqIFqQ+vbhzA3vAKBh2t1ZgPuNfCPrtbNUSGUDksRT6L3AYQnGwNY36J3s/i/AqpaAOXx2nnVAJY8K70PIJ9NQ3C8+WlPC0CzeaEJY0dlS5pgPvu/D5w675fAtALQaJ5R85YBKNQkQW1io8UmpgWgdl4n5i0FUChBoI2LPrtlE1oAms07kwAKLTbUCgCL9TiAEE8A6HoEEANFvc/afgSUqRVT96A7AYiBIm4FcqkNVVoAyr8XcUetAZArbYCV9AIwez0OINRGAsITihrBapJmjelJgJnrG0oAahBHs8b0ADBzfQ5ANJCAiDt6qnObOaYnAWaurx+AC/+kA9m3r231FvDdD6nX3fQrFfNvAkp5PVIFQF6lgzFvlCmEbgN4+aT4kXp+IAibc4pqHg8WoUiiHKsAmO5fuIZEOcfyQKT3DyLdkCTK3+u+tyjdkq8iEccll5y3KwDqjd55y760iTQACHYvxAFgngDEHwHMe0DS6U0QNZFg90Ii3mz+jsZJq/fHS3BY/QO4EI2SA9/YcwAAAABJRU5ErkJggg=="
                        ></img>

                        <p className=" w-full text-end">Choose Image </p>
                    </label>
                </div>

                <div className=" w-full flex flex-wrap">
                    {image ? (
                        <div className=" pt-10">
                            {preview && <img src={preview} alt="postimg" className=" w-10 h-10 sm:h-40 sm:w-40 rounded" />}
                        </div>
                    ) : (
                        <div className="text-red-500">
                            <h1 className="text-2xl font-medium text-center">OOPS !</h1>
                            <h1>please choose a file to see preview</h1>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-center">
                <input
                    placeholder="        whats own your mind"
                    className="border-2 border-black bg-[#363838] text-white w-[70%] h-16 mt-10 mb-10 rounded-md"
                    type="text"
                    value={post}
                    name="caption"
                    onChange={(e) => setPost(e.target.value)}
                />
                <button className=" bg-black h-10 my-14 rounded-md text-white mx-5 w-20 text-xl" onClick={submitPost}>
                    P o s t
                </button>
            </div>
        </div>
    );
};

export default Addpost;
