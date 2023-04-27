import React, { useEffect, useState } from "react";
import { Axiosuser } from "../../API/axiosinstance";
import { userList } from "../../API/dashboardcontrols";
import { getConversationBwtwo } from "../../API/chatapi";

const ChatOnline = ({ onlineUsers, userid, setCurrentchat, chathead, setChathead }) => {
    const [allusers, setAllusers] = useState([]);
    const [online, setOnline] = useState([]);

    // const [friends, setFriends] = useState([])

    //   useEffect(()=>{
    //     const getFriends = async () => {
    //       const res = await Axiosuser.get('/friendlist/'+userid)
    //       setFriends(res.data)
    //     }
    //  },[userid])

    useEffect(() => {
        userList().then((res) => {
            setAllusers(res.data.userdata);
        });
    }, [userid]);
    // console.log(allusers,'asasasasasas')
    // useEffect(()=>{
    //   setOnline(allusers.filter((user)=> online.includes(user._id)))
    // },[allusers, onlineUsers])

    useEffect(() => {
        setOnline(allusers);
    }, [allusers, onlineUsers]);

    const onlineConversation = async (user1id, user2Id) => {
        const res = await getConversationBwtwo(user1id, user2Id);
        setCurrentchat(res.data.conversation);
        setChathead(res.data.reciever);
    };

    const handleClick = (user) => {
        onlineConversation(userid, user._id);
    };
    return (
        <div className=" mt-10 ">
            <input placeholder="search here" />
            {online.map((o) => (
                <div className="flex space-x-5 pt-5 cursor-pointer" onClick={() => handleClick(o)}>
                    <div className="relative">
                        {console.log(o?.profilepicture, '[][]]]]]')}
                        <img src={o?.profilepicture.length === 0 ? "https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1": o?.profilepicture } alt="/" className="h-10 w-10 border-2 border-black mr-3 rounded-full" />
                        <div className="chatbadge absolute w-[10px] h-[10px] border-r-2 rounded-full bg-green-600 top-[2px] right-[2px]"></div>
                    </div>
                    <span className="pt-3">
                        {o.firstname} {o.secondname}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ChatOnline;
