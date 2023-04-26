import React, { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
import { editProfile } from "../API/profile";
import { upload } from "../middleware/imageupload";
import LocationSearch from "./LocationSearch";

const Editprofile = ({ visible, onClose, setUpdateprofile, updateprofile }) => {
    const [profilePic, setProfilepic] = useState([]);
    const [userdata, setUserdata] = useState();
    const user = useSelector((state) => state.user.data.user);
    const userId = user?._id;
    console.log(userId, "ddddddiddddddddddddddd");
    const handleChange = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    const submitProfile = async (e) => {
        e.preventDefault();
        console.log(profilePic, "profilepic");
        const imageurl = await upload(profilePic);
        // const formdata = new FormData(e.target);
        console.log(imageurl, userdata, userId);
        editProfile(userdata, imageurl, userId).then((response) => {
            setUserdata({ firstname: "", lastname: "", location: "", decleration: "" });
            console.log(response, "1");
            console.log(userdata, "2");

            // alert()
            setUpdateprofile(!updateprofile);
            onClose();
            // alert()
        });
    };

    if (!visible) return null;
    const handleclose = (e) => {
        if (e.target.id === "container") {
            onClose();
        }
    };

    const updateLocation = (obj) => {
        setUserdata({
            ...userdata,
            ...obj,
        });
    };

    return (
        <div
            id="container"
            onClick={handleclose}
            className="fixed inset-0 bg-white bg-opacity-60 backdrop-blur-sm flex justify-center items-center "
        >
            {/* <button > X </button> */}
            <form onSubmit={submitProfile}>
                <div className="bg-black text-white p-2 rounded w-[500px]">
                    <div className="flex justify-center pt-5">
                        <label className="px-20 cursor-pointer">
                            <input
                                type="file"
                                accept="images/*"
                                name="image"
                                onChange={(e) => setProfilepic(e.target.files[0])}
                                className="w-0 h-0 "
                            />
                            <IoPersonAdd className="w-10 h-10 " />
                            <h1>update profile</h1>
                        </label>
                    </div>

                    <div className="pt-5 px-5">
                        <label>change first name</label>
                        <input
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            className="w-full text-black h-10 rounded"
                        />
                    </div>

                    <div className="pt-5 px-5">
                        <label>change second name</label>
                        <input
                            type="text"
                            name="secondname"
                            onChange={handleChange}
                            className="w-full text-black h-10 rounded"
                        />
                    </div>

                    <div className="pt-5 px-5">
                        <label>change phone</label>
                        <input
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            className="w-full text-black h-10 rounded"
                        />
                    </div>

                    <div className="pt-5 px-5">
                        <LocationSearch formLocation={updateLocation} />
                    </div>

                    {/* <div className='pt-5 px-5'>
                <label>change location</label>
                <input type="text" name='location' onChange={handleChange} className='w-full text-black h-10 rounded' />
            </div> */}

                    <div className="pt-5 px-5">
                        <label>edit decleration</label>
                        <textarea
                            type="text"
                            name="decleration"
                            onChange={handleChange}
                            className="w-full text-black rounded"
                        />
                    </div>

                    <div className="flex justify-center  pt-5 pb-10">
                        <button type="submit" className="bg-green-400 w-28 p-2 rounded ">
                            Change
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Editprofile;
