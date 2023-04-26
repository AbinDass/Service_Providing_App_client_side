import { Axiosadmin } from "./axiosinstance";

export default function adminLogin(data) {
    try {
        return new Promise((resolve, reject) => {
            Axiosadmin.post("/adminlogin", data).then((response) => {
                let result = response.data;
                console.log(result.admin);
                if (result.admin) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    } catch (error) {
        console.log(`internal error`);
    }
}
