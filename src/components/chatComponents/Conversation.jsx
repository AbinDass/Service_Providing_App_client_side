/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getProfile } from "../../API/profile";

const Conversation = ({ con, currentuser, setChathead, setSeeChat }) => {
    const [User, setUser] = useState([]);

    const getreciver = async (friendId) => {
        const res = await getProfile(friendId);
        setUser(res.data);
    };

    useEffect(() => {
        const friendId = con.members.find((m) => m !== currentuser._id);
        getreciver(friendId);
        // setChathead(User)
    }, [currentuser, con]);

    return (
        <div onClick={() => {
            setChathead(User);
            setSeeChat(false);
            }}>
                {console.log(User.profilepicture,123)}
            <div className="flex flex-grow items-center space-x-5 h-16 rounded-md cursor-pointer hover:bg-[#B2BEB5]">
                <img src={  User?.profilepicture } alt="/profile" className="h-10 w-10 rounded-full" />
                <span className="flex font-medium pt-2">
                    {User?.firstname} {User?.secondname}
                </span>

            </div>
        </div>
    );
};

export default Conversation;
