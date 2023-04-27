import React from "react";
import Conversation from "./Conversation";

const ChatMenu = ({ conversations, currentuser, currentChat, setCurrentchat, setChathead,setSeeChat }) => {
    return (
        <div className="flex flex-col p-10 ">
            <h1 className="text-xl font-medium w-[200px] text-center"> chat list</h1>
            {conversations.length === 0 ? <div className="text-red-500 flex text-center justify-center items-center pt-20 capitalize"> currently no chats exist</div>:<div className="pt-5">
                {conversations.map((con) => (
                    <div onClick={() => setCurrentchat(con)}>
                        <Conversation con={con} currentuser={currentuser} setChathead={setChathead} setSeeChat={setSeeChat} />
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default ChatMenu;
