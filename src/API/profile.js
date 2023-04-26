import { Axiosuser } from "./axiosinstance";

const token = localStorage.getItem("token");

export const getProfile = (userid) => {
    console.log(userid, "iam here");

    const res = Axiosuser.get(`/getprofile?userid=${userid}`,{ headers: { Authorization: token } });
    console.log(userid, "iam here boy");
    return res;
};

export const editProfile = async (userdata, imageurl, userId) => {
    //    console.log(image,"vayaaaaaaaaaaaaaaaaaaaaaaa", userdata, userId)

    // let head = new Headers()
    // head.set('Content-Type', 'application/json')
    // console.log(userId);
    // const res = await Axiosuser.post(`/editprofile`,formdata,
    //     {headers:{
    //         'content-type': 'multipart/form-data'
    //     }}
    // );
    console.log(userdata, "3");
    const res = await Axiosuser({
        method: "POST",
        url: "/editprofile",
        data: {
            userdata,
            imageurl,
            userId,
        },
        headers: { Authorization: token } 
    });
    console.log(res, "ivde axios response");
    return res;
};
