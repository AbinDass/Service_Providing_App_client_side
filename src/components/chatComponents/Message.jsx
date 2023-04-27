import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { getProfile } from "../../API/profile";
const Message = ({ message, own, chathead }) => {
    const [sendUser, setSendUser] = useState(null);

    const user = useSelector((state) => state.user.data.user);
    const userId = user?._id;

    useEffect(() => {
        getProfile(userId).then((res) => {
            setSendUser(res.data);
        });
    }, []);
    return (
        <div className="messagae pt-5 px-10">
            <div className={!own ? `msgttop flex space-x-5 pt-3 ` : `pt-3 space-x-5 flex justify-end `}>
                <img
                    src={!own ? chathead?.profilepicture.length === 0 ? "https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1": chathead?.profilepicture : sendUser?.profilepicture.length === 0 ? "https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1" : sendUser?.profilepicture }
                    alt="/"
                    className="h-10 w-10 rounded-full"
                />
                <p
                    className={
                        !own
                            ? `p-5 text-white max-w-[300px] rounded bg-[#1877f2]`
                            : `p-5 text-black max-w-[300px] rounded bg-[#d9dfe6]`
                    }
                >
                    {message?.text}
                </p>
            </div>
            <div className={!own ? `msgbottum text-sm m-5` : `flex ext-sm m-5 justify-end`}>
                {format(message?.createdAt)}
            </div>
        </div>
    );
};

export default Message;
