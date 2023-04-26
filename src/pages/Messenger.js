/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ChatMenu from "../components/chatComponents/ChatMenu";
import Message from "../components/chatComponents/Message";
import ChatOnline from "../components/chatComponents/ChatOnline";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { addMessage, getAllmessages, getConversations } from "../API/chatapi";

const Messenger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentchat] = useState([]);
    const [Messages, setMessage] = useState([]);
    const [newMessages, setNewMessage] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [chathead, setChathead] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const [seeChat, setSeeChat] = useState(false)
    const scrollref = useRef();

    const user = useSelector((state) => state.user.data.user);
    const userId = user?._id;
    let socket = io("http://localhost:8000");
    console.log(socket);

    
    useEffect(() => {
        arrivalMessage &&
            setMessage((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.on("getMessage", (data) => {
            console.log(data);
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        socket.emit("addUser", userId);
        socket.on("getUser", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    // useEffect(()=>{
    //   setSocket(io("http://localhost:8000"))
    // },[])

    // useEffect(()=>{
    //   socket?.on("welcome", message => {
    //     console.log(message)
    //   })
    // },[socket])

    // console.log(socket,'oooooooooooooooooooooooooooooo')

    const callConversations = async () => {
        const res = await getConversations(userId);
        setConversations(res.data);
    };
    useEffect(() => {
        callConversations();
    }, []);

    const collectMessage = async (conversationId) => {
        const res = await getAllmessages(conversationId);
        setMessage(res.data);
    };
    useEffect(() => {
        collectMessage(currentChat?._id);
    }, [currentChat]);

    const sendMessages = async (message) => {
        const res = await addMessage(message);
        setMessage([...Messages, res.data]);
        setNewMessage([]);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const message = {
            sender: userId,
            text: newMessages,
            conversationId: currentChat?._id,
        };
        const recieverId = currentChat.members.find((member) => member !== userId);
        socket.emit("sendMessage", {
            senderId: userId,
            recieverId,
            text: newMessages,
        });
        sendMessages(message);
    };

    useEffect(() => {
        scrollref.current?.scrollIntoView({ behavior: "smooth" });
    }, [Messages]);
    return (
        <>
                <Navbar />
            <div className="h-[800px]">
                <div className="messenger h-full pt-16  flex w-full">
                    <div className="chatmenu hscreen overflow-y-scroll w-[25%] hidden md:flex ">
                        {console.log(chathead, "chathead")}
                        <ChatMenu
                            conversations={conversations}
                            currentuser={user}
                            currentChat={currentChat}
                            setCurrentchat={setCurrentchat}
                            setChathead={setChathead}
                           
                        />
                    </div>

                    <div className="chatbox flex flex-col justify-between w-full  md:w-[45%]">

                        {currentChat.length !== 0 ? (
                            <>
                                <div className="flex pl-10 justify-around py-3 bg-blue-200 mt-3">
                                    
                                    <img src={chathead?.profilepicture} alt="/" className="h-10 w-10 rounded-full" />
                                    <h1 className="text-xl text-center pt-2">
                                        {chathead?.firstname} {chathead?.secondname}
                                    </h1>
                                    <div onClick={()=> setSeeChat((prev)=> !prev)} className="md:hidden block text-red-800 pt-3 capitalize cursor-pointer">see all</div>
                                </div>
                                {/* -----------------------chats for mobile ------------------- */}
                                {!seeChat?null:<div>
                                    <ChatMenu 
                                    conversations={conversations}
                                    currentuser={user}
                                    currentChat={currentChat}
                                    setCurrentchat={setCurrentchat}
                                    setChathead={setChathead}
                                    setSeeChat={setSeeChat}
                                    />
                                </div>
                                    
                                }
                                {/* -----------------------chats for mobile end------------------- */}

                                <div className="chattop h-full overflow-y-scroll">
                                    {Messages.map((m) => (
                                        <div ref={scrollref}>
                                            <Message message={m} own={m.sender === userId} chathead={chathead} />
                                        </div>
                                    ))}
                                </div>
                                <div className="chatbottum flex  space-x-10 w-full px-10 py-5">
                                    <input
                                        type="text"
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessages}
                                        className="w-full h-24 border-4"
                                        placeholder="write some thing here"
                                    />
                                    <button
                                        onClick={handlesubmit}
                                        className="bg-green-400 flex items-center justify-center rounded-md mt-8 h-10 w-24"
                                    >
                                        send
                                    </button>
                                </div>{" "}
                            </>
                        ) : (
                            <>
                            <div>
                                <span className="flex items-center justify-center pt-[300px] text-xl text-red-600">
                                    open a conversation to start a chat
                                </span>
                                <div onClick={()=> setSeeChat((prev)=> !prev)} className="md:hidden block text-red-800 pt-3 text-center h-8 capitalize">see all</div> 
                            </div>
                            </>
                        )}
                    </div>
                    <div className="hidden md:flex flex-col items-center overflow-y-scroll chatonline h-screen md:w-[30%]">
                        <ChatOnline
                            chathead={chathead}
                            setChathead={setChathead}
                            onlineUsers={onlineUsers}
                            userid={userId}
                            setCurrentchat={setCurrentchat}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messenger;
