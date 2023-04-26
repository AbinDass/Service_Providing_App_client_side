// import dotenv from "dotenv"
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { json } from "react-router-dom";
import { Axiosuser } from "../API/axiosinstance";

const signupForm = async (data) => {
    try {
        console.log(data, "it id dataaaaaaaahere 121212");
        const response = await Axiosuser.post("/postsignup", data);
        console.log(response, " ith response");
        const result = response.data;
        let token = response.data.token;
        console.log(result.status, "this is result");
        if (response.status) {
            console.log(token);
            localStorage.setItem("token", token);

            console.log(localStorage.getItem(`token`));

            return response;
        } else {
            return false;
        }
    } catch (err) {
        console.log(`internal server error`);
    }
};
export default signupForm;
export const loginForm = async (logindata) => {
    try {
        const response = await Axiosuser.post("/postlogin", logindata);
        const result = response.data;
        console.log(response);
        let token = response.data.token;

        // return true;
        if (result.user) {
            console.log(token);
            // localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("token", token);


            return result;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};

export const googleAuth = async (datas) => {
    const google = await Axiosuser({
        method: "post",
        url: "/googleauth",
        data: { datas },
    });
    console.log(google)
    return google;
};

export const userLogout = () => {
    const response = Axiosuser.get("/logout");
    if (response.status === 200) {
        localStorage.removeItem("token");
        return true;
    }
};
