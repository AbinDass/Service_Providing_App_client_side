import Axios from "axios";

const Axiosuser = Axios.create({
    baseURL: "http://localhost:8000/api",
});

const Axiosadmin = Axios.create({
    baseURL: "http://localhost:8000/admin",
});

export { Axiosuser, Axiosadmin };
