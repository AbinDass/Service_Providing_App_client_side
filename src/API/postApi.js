import { Axiosuser } from "./axiosinstance";

const token = localStorage.getItem("token");

export const addPosts = async (imageurl, post, id) => {
    // console.log(imageurl,'fun api rthi ');
    // const posts = await Axiosuser.post(
    //     "/createpost",
    //     { imageurl, post, id },
    //     {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }
    // );
    
    const posts = await Axiosuser({
        method: "post",
        url: "/createpost",
        data: {
            imageurl,
            post,
            id,
        },
         headers: { Authorization: token } 
    });
    console.log(posts);
    return posts;
};

export const getPosts = async () => {
    const addedPosts = await Axiosuser({
        method: "get",
        url: "/posts",
        headers: { Authorization: token } 

    });

    return addedPosts;
};

export const likePost = async (postId, userId) => {
    const addlikes = await Axiosuser({
        method: "patch",
        url: "/likepost",
        data: {
            postId,
            userId,
            headers: { Authorization: token } 

        },
    });
    return addlikes;
};

export const createComment = async (comment, userId, postId) => {
    const addComment = await Axiosuser({
        headers: { Authorization: token }, 
        method: "post",
        url: `/addcomment/${postId}`,
        data: { comment, userId, postId },

    });
    console.log(addComment, `ith add commen t`);
    return addComment;
};

export const getComments = async () => {
    const allCOmments = await Axiosuser({
        method: "get",
        url: "/posts/allcomments",
        headers: { Authorization: token }, 

    });
    return allCOmments;
};


export const deletePost = async (postId) => {
         const res = await Axiosuser.delete(`/posts?postid=${postId}`,{  headers: { Authorization: token } });
    return res;
};

export const getMypost = async (userId) => {
    const res = await Axiosuser.get(`/myposts/?userId=${userId}`,{ headers: { Authorization: token } });
    return res;
};
