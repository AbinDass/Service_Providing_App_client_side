import Axios from "axios";

const Axiosuser = Axios.create({
    baseURL: "https://social-expo.onrender.com",
    // baseURL: "http://localhost:8000/",
});

const Axiosadmin = Axios.create({
    baseURL: "https://social-expo.onrender.com/admin",
    // baseURL: "http://localhost:8000/admin/",
});

export { Axiosuser, Axiosadmin };
