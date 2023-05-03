/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { createConversation, searchUsers } from "../API/chatapi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatComponent = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.data.user);
    const fromId = user?._id;

    const [searchUser, setSearchUser] = useState([]);
    const searchFriend = async (e) => {
        const res = await searchUsers(e.target.value);
        setSearchUser(res.data);
    };

    const makeConversation = async (fromId, toId) => {
        const res = await createConversation(fromId, toId);
        if (res.data) {
            navigate("/chat");
        }
    };
    return (
        <div className="bg-[#569cd1] rounded-md ">
            <div className="flex-col py-5 ">
                <p className="p-4 font-medium text-2xl text-white">Connect your friend ...</p>
                <p className="p-4 ">It seems like you have not sent a message yet. Search and find someone to chat...</p>
                <div className="px-5">
                    <input
                        type="text"
                        placeholder="search.... "
                        onChange={searchFriend}
                        className="mx-auto px-10 border-2 w-full border-black h-10 flex-grow "
                    />
                </div>

                <ul className="flex-col justify-between py-5 p-4">
                    {searchUser.map((user) => (
                        <li
                            onClick={() => makeConversation(fromId, user._id)}
                            className="font-medium text-xl flex gap-5 rounded-md pt-3 hover:text-white cursor-pointer"
                        >
                            <div>
                                <img src={user.profilepicture} alt="/user" className="h-10 w-10 rounded-full " />
                            </div>
                            <h1 className="text-sm pt-2">
                                {" "}
                                {user.firstname} {user.secondname}
                            </h1>
                        </li>
                    ))}

                    {/* <li className='font-medium text-xl rounded-md hover:text-[#00df9a] cursor-pointer'>HOMW</li>
<li className='font-medium text-xl rounded-md hover:text-[#00df9a] cursor-pointer'>HOMW</li>
<li className='font-medium text-xl rounded-md hover:text-[#00df9a] cursor-pointer'>HOMW</li> */}
                </ul>
            </div>
        </div>
    );
};

export default ChatComponent;
