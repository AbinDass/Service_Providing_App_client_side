import { Axiosuser } from "./axiosinstance";

const token = localStorage.getItem("token");

export const getConversations = async (userId) => {
    try {
        const res = await Axiosuser.get(`/getmsg/${userId}`, { headers: { Authorization: token } });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getAllmessages = async (conversationId) => {
    const res = await Axiosuser.get(`/allmessages/${conversationId}`, { headers: { Authorization: token } });
    return res;
};

export const addMessage = async (message) => {
    const res = await Axiosuser({
        method: "POST",
        url: "/addmessage",
        data: {
            message,
        },
        headers: { Authorization: token },
    });
    return res;
};

export const getConversationBwtwo = async (user1Id, user2Id) => {
    const res = await Axiosuser.get(`/findconversations/${user1Id}/${user2Id}`,{ headers: { Authorization: token } });
    return res;
};

export const createConversation = async (senderId, recieverId) => {
    const res = await Axiosuser({
        method: "post",
        url: "/conversation",
        data: {
            senderId,
            recieverId,
        },
        headers: { Authorization: token },
    });
    return res;
};

export const searchUsers = async (user) => {
    const res = await Axiosuser({
        method: `post`,
        url: `/searchUser?username=${user}`,
        headers:{Authorization:token}
    });
    return res;
};
