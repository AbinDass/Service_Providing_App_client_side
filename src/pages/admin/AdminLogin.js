import React, { useState } from "react";
import adminLogin from "../../API/adminAuth";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const loginSubmit = async (e) => {
        e.preventDefault();

        let admin = await adminLogin(loginData);
        if (admin) {
            navigate("/admin/dashboard");
        } else {
            navigate("/admin");
        }
    };

    return (
        <div>
            <div className="h-screen bg-white flex justify-center">
                <div className="flex flex-col justify-center mt-36 bg-slate-600 h-96 w-5/12 text-center">
                    <h1 className=" text-white pt-11 text-2xl">Admin Login</h1>
                    <div className="pt-9">
                        <form onSubmit={loginSubmit}>
                            <div className="px-20">
                                <label htmlFor="email" className="text-lg">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="px-20">
                                <label htmlFor="password" className="text-lg">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                    id="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                />
                            </div>

                            <div className="flex justify-center items-center mt-6">
                                <button type="submit" className="bg-[#358FD3] h-10 w-60 rounded-full">
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
