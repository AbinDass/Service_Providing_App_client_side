/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/slice/userslice";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginForm } from "../API/userAuth";
import { googleAuth } from "../API/userAuth";
import UserNotFound from "../components/confrmations/UserNotFound";
const Login = () => {
    const [notFound, setNotfound] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({ email: "", password: "" });


    //form validation start 
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: async (values) => {
          const loginData = {
            email: values.email,
            password: values.password,
          };
          try {
            const res = await loginForm(loginData);
            console.log(res);
            if (res) {
                dispatch(
                    userAction.setLogin({
                        data: res,
                        token: res.token,
                        name: res.firstname,
                        id: res._id,
                        imageUrl: res?.imageUrl,
                    })
                );
              toast.success(res.message);
              toast.success('Login Successful');
              navigate("/nearbyservices");
              return res.user;
            } else {
              toast.error('Login Failed');
              loginError()
              return  
            }
          } catch (err) {
            console.error(err);
            toast.error(err.message);
          }
        },
        validate: (values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'please enter a valid email';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'please enter a valid password';
          } else if (values.password.length < 6) {
            errors.password = 'password must be atleast 6 characters';
          }
          return errors;
        },
      });
    //form validation end 



    const handleChange = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const loginError = () =>{
        setNotfound(true)
    }
    // const loginSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await loginForm(loginData);

    //     if (res) {
            
    //         dispatch(
    //             userAction.setLogin({
    //                 data: res,
    //                 token: res.token,
    //                 name: res.firstname,
    //                 id: res._id,
    //                 imageUrl: res?.imageUrl,
    //             })
    //         );
    //         navigate("/nearbyservices");
    //         return res.user;
    //     } else {
    //         loginError()
    //         return   
    //     }
    
        
    // };
    
    const googlelogin = async (datas) =>{
       alert("Please enter")
       console.log(datas)
        const response = await googleAuth(datas);
        if (response) {
            const userData = response.data;
            console.log(userData)
            localStorage.setItem("token", userData.token);
            dispatch(
                userAction.setLogin({
                    data: response.data,
                    token: userData.token,
                    name: response.data.firstname,
                    id:response.data._id,
                    
                })
            );
            navigate("/nearbyservices");
        } else {
            const userData = response.data;
            localStorage.setItem("token", userData.token);
            dispatch(
                userAction.setLogin({
                    data: response.data,
                    token: userData.token,
                    name: response.data.firstname,
                    id:response.data._id,
                    
                })
            );
            navigate("/nearbyservice");
        }
    }
    return (
        <div className="h-screen px-10 w-full flex bg-black">
            <ToastContainer />
          {notFound?<UserNotFound setNotfound={setNotfound} />:null}
            <div className="text-white h-screen w-[50%] hidden md:flex md:flex-col items-center justify-center">
                <img src="https://www.pngall.com/wp-content/uploads/5/Employment-PNG-Free-Image.png" alt="/" />
                <h1 className=" text-4xl font-bold text-[#00df9a]">SOCIAL-EXPO</h1>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <h1 className=" block md:hidden text-4xl font-bold text-[#00df9a]">SOCIAL-EXPO</h1>
                <h1 className="text-3xl font-medium text-primary mt-4 mb-12 text-center">LOG IN 🔐</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            name="email"
                            // value={loginData.email}
                            // onChange={handleChange}
                            // placeholder="Your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500">{formik.errors.email}</p>
                ) : null}
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            name="password"
                            // value={loginData.password}
                            // onChange={handleChange}
                            placeholder="Your Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500">{formik.errors.password}</p>
                ) : null}
                    <div className="flex justify-center items-center mt-6">
                        <button type="submit" className="bg-[#00df9a] h-10 w-60 rounded-full">
                            SIGN IN
                        </button>
                    </div>
                    <div>
                        <h3 className="mt-3">you dont have an account ?</h3>

                        <Link to="/signup">
                            <button className="bg-orange-600 h-10 w-40 text-white mt-5 ml-15 rounded-full">
                                create account
                            </button>
                        </Link>
                        {/* google auth */}
                        <div className="pt-5">
                            <LoginSocialGoogle
                                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                scope="openid profile email"
                                discoveryDocs="claims_supported"
                                access_type="offline"
                                onResolve={googlelogin}
                                onReject={(err) => {
                                    console.log(err);
                                }}
                            >
                                <GoogleLoginButton />
                            </LoginSocialGoogle>
                        </div>
                        {/* ----------------- */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
