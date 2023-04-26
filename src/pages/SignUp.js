import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import signupForm from "../API/userAuth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { googleAuth } from "../API/userAuth";
import LocationSearch from "../components/LocationSearch";
import Otp from "../components/Otp";

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
    return (
        <div className="flex bg-black w-full">
            <div className="text-white h-screen w-[50%] hidden md:flex md:flex-col items-center justify-center ">
                <img src="https://www.pngall.com/wp-content/uploads/5/Employment-PNG-Free-Image.png" alt="/" />
                <h1 className=" text-4xl font-bold text-[#00df9a]">SOCIAL-EXPO</h1>
            </div>

            <div className="w-full  h-full max-w-md m-auto  rounded-lg border border-primaryBorder shadow-default py-5 px-16">
                <h1 className="text-2xl text-white font-medium text-center">SIGN UP</h1>
                <h1 className=" block md:hidden w-full text-3xl font-bold text-center pt-10 text-[#00df9a] ">
                    SOCIAL-EXPO
                </h1>
                <div className="h-1/2 bg-white w-full px-10 py-5">
                    <form className="" >
                        <div>
                            <label htmlFor="firstname">first name</label>
                            <input
                                type="text"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={hanadleChange}
                                placeholder="Your firstname"
                            />
                        </div>
                        <div>
                            <label htmlFor="secondname">second name</label>
                            <input
                                type="text"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="secondname"
                                name="secondname"
                                value={formData.secondname}
                                onChange={hanadleChange}
                                placeholder="Your secondname"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={hanadleChange}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="pt-5 px-5">
                        <LocationSearch formLocation={updateLocation} />
                    </div>
                        <div>
                            <label htmlFor="phoe">phone</label>
                            <input
                                type="number"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={hanadleChange}
                                placeholder="Your phone"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={hanadleChange}
                                placeholder="Your Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">confirm Password</label>
                            <input
                                type="password"
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id="confirmpassword"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={hanadleChange}
                                placeholder="Your Password"
                            />
                        </div>
                    </form>
                        <div className="flex justify-center items-center mt-6">
                            <button onClick={()=> setOtpUp(true)} type="submit" className="bg-[#00df9a] h-10 w-60 rounded-full">
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
