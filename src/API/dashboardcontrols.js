import { Axiosadmin } from "./axiosinstance";

export const userList = async () => {
    const list = await Axiosadmin.get(`/userlist`);

    return list;
};

export const userBlock = async (userId) => {
    console.log(userId, "herer");
    const res = await Axiosadmin({
        method: "post",
        url: "/blockuser",
        data: { userId },
    });

    return res;
};

export const userUnblock = async (userId) => {
    console.log(userId, "herer unblock userid");
    const res = await Axiosadmin({
        method: "post",
        url: "/unblockuser",
        data: { userId },
    });
    console.log("hii iam herer");
    return res;
};

export const addServices = async (service, image,logo, description) => {
    console.log(image, "ith image aanu");

    const serviceIs = await Axiosadmin({
        method: "POST",
        url: "/addservice",
        data: {
            service,
            image,
            logo,
            description,
        },
    });
    console.log(serviceIs, "it api page serice");
    return serviceIs;
};
export const getuserdata = async () => {

    const data = await Axiosadmin({
        method: "get",
        url: "/getuserdata",
    });
   
    return data;
};

export const getProfitData = async () => {
    const data = await Axiosadmin({
        method:`get`,
        url: "/getprofitdata",
    })
    return data;
};

export const getAllworkers = async () => {
    const res = await Axiosadmin.get('/workerslist')
    return res
};

export const approve = async (workerid, button) => {
    const res = await Axiosadmin.post('/approveworker', {worker:workerid, button});
    return res;
};