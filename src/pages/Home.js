import React, { useState } from "react";
import AddPost from "../components/AddPost";
import ChatComponent from "../components/ChatComponent";
import Navbar from "../components/Navbar";
import PostComponent from "../components/PostComponent";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import JoinWithAs from "../components/JoinWithAs";
import Loader from "../components/loader/Loader";

const Home = () => {
    const isAuth = Boolean(useSelector((state) => state.user.token));
    const [load, setLoad] = useState(false);
    const [loader, setLoader] = useState(false);
    return (
        <div className="">
            {/* <div className=" w-full fixed "> */}
            <Navbar />
            {/* </div> */}
            <div className="bg-black h-1"></div>
            <div className="  w-full h-[100vh] flex flex-row justify-center space-x-10 px-10  mt-28">
                <div className="w-80  h-52 hidden md:block">
                    <Sidebar />
                </div>
                <div className=" w-9/12 h-[100vh] overflow-auto overflow-y-scroll">
                    {isAuth ? <div className="bg-[#afc9dc]">
                        <AddPost load={load} setLoad={setLoad} loader={loader} setLoader={setLoader}/>
                    </div> : null}
                    <PostComponent load={load} setLoader={setLoader}/>
                </div>
                <div className=" hidden md:block w-3/12 h-52  ">
                   {isAuth ? <ChatComponent /> : <JoinWithAs />}
                </div>
            </div>
            {loader? <Loader loader={load} />:null}
        </div>
    );
};

export default Home;
