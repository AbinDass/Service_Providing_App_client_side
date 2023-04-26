import { Axiosuser } from "./axiosinstance";
import { Axiosadmin } from "./axiosinstance";
const token = localStorage.getItem("token");

export const getNearbyServices = async (userid) => {
    const allservices = await Axiosuser.get(`/services?userid=${userid}`, { headers: { Authorization: token } });
    return allservices;
};

export const serviceDelete = (serviceid) => {
    console.log(serviceid);
    const deleteServ = Axiosadmin.delete(`/deleteservices/${serviceid}`,{ headers: { Authorization: token } });
    console.log(deleteServ);
    console.log("nooooooooooooooooo");
    return deleteServ;
};

export const addSubscription = (Data, background) => {
    console.log(Data, "firdt");
    const addsub = Axiosadmin({
        method: "post",
        url: "/addsubscription",
        data: {
            Data,
            background,
        },
        headers: { Authorization: token } 
    });
    console.log(Data, "last");
    return addsub;
};

export const getSubscriptions = async () => {
    const res = await Axiosadmin.get("/subscriptions",{ headers: { Authorization: token } });
    console.log(res, "get all subscriptions");
    return res;
};

export const addServiceByuser = async (formdata, imageurl) => {
    console.log(formdata, "iam formdata");
    // const res = await Axiosuser.post('/addservices', formdata,{
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    // },
    // });

    const res = await Axiosuser({
        method: "POST",
        url: "/addservices",
        data: {
            formdata,
            imageurl,
        },
        headers: { Authorization: token }
    });
    return res;
};

export const getWorkersList = async (title,userid,districtNow) => {
    const res = await Axiosuser.get(`/workerlist?title=${title}&userid=${userid}&district=${districtNow}`, { headers: { Authorization: token } });
    return res;
};

export const takeSubscription = async (subId, userId) => {
    console.log("subscription", subId, userId);
    const sub = await Axiosuser({
        method: "POST",
        url: `/takesubscription`,
        data: {
            subId,
            userId,
        },
        headers: { Authorization: token }
    });

    return sub;
};

export const verifyPayment = async (razorpay_payment_id, razorpay_order_id, razorpay_signature, userId, subId) => {
    console.log(subId, "iam abindas ");
    console.log(razorpay_payment_id, razorpay_order_id, razorpay_signature);
    const res = await Axiosuser({
        method: "POST",
        url: "/verfypayment",
        data: {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            userId,
            subId,
        },
        headers: { Authorization: token } 
    });

    return res;
};

export const requestWorker = async (fromId, toId) => {
    const res = await Axiosuser({
        method: "post",
        url: "/requestWorker",
        data: {
            fromId,
            toId,
        },
        headers: { Authorization: token }
    });
    return res;
};

export const getUserRequest = async (fromId, toId) => {
    const res = await Axiosuser({
        method: "get",
        url: `/getRequestStatus?from=${fromId}&to=${toId}`,
        headers: { Authorization: token } 
    });
    return res;
};

export const getAllrequests = async (userid) => {
    const res = await Axiosuser({
        method: "get",
        url: `/getAllrequests?userid=${userid}`,
        headers: { Authorization: token } 
    });
    return res;
};

export const acceptingRequest = async (Id,userid) => {
    console.log(Id, "iam here");
    const res = await Axiosuser({
        method: `post`,
        url: `/acceptRequest?id=${Id}&userid=${userid}`,
        headers: { Authorization: token }
    });
    return res;
};

export const cancelRequest = async (fromId,toId) => {
    const res = await Axiosuser({
        method:'delete',
        url:`/cancelRequest?fromid=${fromId}&toid=${toId}`,
        headers: { Authorization: token }
    });
    return res;
};

export const rejectingRequest = async (fromId, userId) =>{
    const res = await Axiosuser({
        method:'delete',
        url:`/rejectRequest?fromid=${fromId}&userid=${userId}`,
        headers: { Authorization: token } 
    })

    return res
}
export const checkServiceAdded = async (userid) => {
    const res = await Axiosuser({
        method: "get",
        url: `/checkServiceadded?userId=${userid}`,
        headers: { Authorization: token }
    });
    return res;
};

export const checkSubscription = async (userid) => {
    const res = await Axiosuser({
        method: "get",
        url: `/checkSubscription?userId=${userid}`,
        headers: { Authorization: token } 
    });
    return res;
};

export const CheckSubscriptionExpired = async (userid) => {
    const res = await Axiosuser.get(`/checksubscriptionExpired?userId=${userid}`,{ headers: { Authorization: token } })
    return res;
};

export const myService = async (userid) => {
    const res = await Axiosuser({
        method: "get",
        url: `/myservice?userId=${userid}`,
        headers: { Authorization: token }
    });
    return res;
};

// service search
export const Search = async (search, userid, distval) => {
    console.log(distval, "distval");
    const res = await Axiosuser({
        method: "get",
        url: `/searchservice?title=${search}&userId=${userid}&ditsrict=${distval}`,
        headers: { Authorization: token }
    });

    return res;
};

//get district

export const getDistricts = async (userId) => {
    const res = await Axiosuser.get(`/district`, { headers: { Authorization: token } });
    return res;
};

export const getMyservice = async (userId) => {
    const res = await Axiosuser.get(`/myservice/${userId}`, { headers: { Authorization: token } });
    return res;
};

export const requestStatus = async (userId) => {
    console.log(userId, "iam here");
    const res = await Axiosuser({
        method: `post`,
        url: `/getAcceptRequestStatus?id=${userId}`,
        headers: { Authorization: token }
    });
    return res;
};


export const Appointment = async (worker, user, date, time, desc) => {
    const res = await Axiosuser({
        method: `post`,
        url: `/makeAppointment`,
        data:{
            worker,
            user,
            date,
            time,
            desc,
        },
        headers: { Authorization: token } 

    })
    return res;
};

export const getAppointment = async (userId)=>{
    const res = await Axiosuser({
        method:`get`,
        url: `/getAppointment?id=${userId}`,
        headers: { Authorization: token } 
    });
    return res
}

export const updateAppointment = async (userId, button)=>{
    const res = await Axiosuser({
        method:`patch`,
        url: `/makeAppointment?id=${userId}&button=${button}`,
        headers: { Authorization: token } 
    });
    return res
}

export const getAppointmentStatus = async (userId) => {
    const res = await Axiosuser({
        method:`get`,
        url: `/getAppointmentStatus?id=${userId}`,
        headers: { Authorization: token } 
    })
    return res
};

export const deleteMyservice = async (userId) => {
    const res = await Axiosuser({
        method:`delete`,
        url: `/deleteMyservice?id=${userId}`,
        headers: { Authorization: token } 
    })
    return res
};

