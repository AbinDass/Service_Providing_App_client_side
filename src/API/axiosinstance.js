import Axios from "axios";

const Axiosuser = Axios.create({
    baseURL: "https://social-expo.onrender.com",
});

const Axiosadmin = Axios.create({
    baseURL: "https://social-expo.onrender.com/admin",
});

export { Axiosuser, Axiosadmin };
