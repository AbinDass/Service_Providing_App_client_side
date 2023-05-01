import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import signupForm from "../API/userAuth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { googleAuth } from "../API/userAuth";
import LocationSearch from "../components/LocationSearch";
import Otp from "../components/Otp";
import { FormValidate } from "../utilities/signupValidate";

const initialstate = {
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
};

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialstate);
    const [otpup, setOtpUp] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = FormValidate(formData)
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const hanadleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   
    const FormSubmit = async () => {
        // e.preventDefault();

        console.log(formData, "dataaaaaaaaaaa 11");
        let signup = await signupForm(formData);
        console.log(signup);
       
        if (signup) {
            navigate("/login");
        } else {
            navigate("/signup");
        }
    };

    const updateLocation = (obj) => {
        
        setFormData({
            ...formData,
            ...obj,
        })
    };

    const otpShow = () => {
        if (!validateForm()) return;
        setOtpUp(true)
    }
    return (
        <div className="flex bg-black w-full">
            <div className="text-white h-screen w-[50%] hidden md:flex md:flex-col items-center justify-center  ">
                <img src="https://www.pngall.com/wp-content/uploads/5/Employment-PNG-Free-Image.png" alt="/" />
                <h1 className=" text-4xl font-bold text-[#00df9a]">SOCIAL-EXPO</h1>
            </div>

            <div className="w-full  h-full  flex flex-col md:mt-20 justify-center items-center md:px-10 md:py-10 rounded-lg border border-primaryBorder shadow-default ">
                <h1 className="text-2xl text-white font-medium text-center">SIGN UP</h1>
                <h1 className=" block md:hidden w-full text-3xl font-bold text-center pt-10 text-[#00df9a] ">
                    SOCIAL-EXPO
                </h1>
                <div onClick={() => setErrors({})} className="h-1/2 bg-white w-full px-10 py-5 flex flex-col justify-center items-center">
                    <form className=" md:flex gap-5 px-10 justify-center" >
                        <div className="w-full">

                        <div>
                            <label htmlFor="firstname">first name</label>
                            <input
                                type="text"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.firstname ? "border-red-500" : ""}`}
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={hanadleChange}
                                placeholder="Your firstname"
                            />
                            {errors.firstname && (<p className="text-red-500 mt-1 text-xs italic"> {errors.firstname}</p>)}
                        </div>
                        <div>
                            <label htmlFor="secondname">second name</label>
                            <input
                                type="text"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.secondname ? "border-red-500" : ""}`}
                                id="secondname"
                                name="secondname"
                                value={formData.secondname}
                                onChange={hanadleChange}
                                placeholder="Your secondname"
                            />
                            {errors.secondname && (<p className="text-red-500 mt-1 text-xs italic"> {errors.secondname}</p>)}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.email ? "border-red-500" : ""}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={hanadleChange}
                                placeholder="Your Email"
                            />
                            {errors.email && (<p className="text-red-500 mt-1 text-xs italic"> {errors.email}</p>)}
                        </div>
                        <div className={`pt-5 px-5 ${errors?.location ? "border-red-500" : ""}`}>
                        <LocationSearch formLocation={updateLocation} />
                        {errors.location && (<p className="text-red-500 mt-1 text-xs italic"> {errors.location}</p>)}
                    </div>
                        </div>

                        <div className="w-full ">

                        <div>
                            <label htmlFor="phoe">phone</label>
                            <input
                                type="number"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.phone ? "border-red-500" : ""}`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={hanadleChange}
                                placeholder="Your phone"
                            />
                            {errors.phone && (<p className="text-red-500 mt-1 text-xs italic"> {errors.phone}</p>)}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.password ? "border-red-500" : ""}`}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={hanadleChange}
                                placeholder="Your Password"
                            />
                            {errors.password && (<p className="text-red-500 mt-1 text-xs italic"> {errors.password}</p>)}
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">confirm Password</label>
                            <input
                                type="password"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${errors?.confirmpassword ? "border-red-500" : ""}`}
                                id="confirmpassword"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={hanadleChange}
                                placeholder="Your Password"
                            />
                            {errors.confirmpassword && (<p className="text-red-500 mt-1 text-xs italic"> {errors.confirmpassword}</p>)}
                        </div>
                        </div>
                    </form>
                        <div className="flex justify-center items-center mt-6">
                            <button onClick={otpShow} type="submit" className="bg-[#00df9a] h-10 w-60 rounded-full">
                                SIGN UP
                            </button>
                        </div>
                        <div>
                            <div className="pt-5">
                                <LoginSocialGoogle
                                    client_id={"1072211856868-kh9sap13ndhfrabg3h4tgfcq522c0v5i.apps.googleusercontent.com"}
                                    scope="openid profile email"
                                    discoveryDocs="claims_supported"
                                    access_type="offline"
                                    onResolve={googleAuth}
                                    onReject={(err) => {
                                        console.log(err);
                                    }}
                                >
                                    <GoogleLoginButton />
                                </LoginSocialGoogle>
                            </div>
                            <Link to="/">
                                <h3 className="mt-3 text-center">BACK TO HOME</h3>
                            </Link>
                        </div>
                </div>
            </div>

           {
            <div className={otpup? `block`:`hidden`}>
               <Otp FormSubmit={FormSubmit} otpup={otpup} setOtpUp={setOtpUp}/>
            </div>
            }
        </div>
    );
};

export default SignUp;
