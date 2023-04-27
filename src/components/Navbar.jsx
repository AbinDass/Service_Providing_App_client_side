import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { userLogout } from "../API/userAuth";
import { userAction } from "../redux/slice/userslice";
import SearchBar from "./SearchBar";
import { getDistricts } from "../API/servicesApi";
import LocationChoose from "../../src/components/search/LocationChoose";
import SignOutConfirm from "./confrmations/SignOutConfirm";
import { DistrictContext } from "../context/DistrictNow";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const user = useSelector((state) => state.user.data.user);
    const userId = user?._id;
    const isAuth = Boolean(useSelector((state) => state.user.token));
    const Navigate = useNavigate();
    let currentLocation;
    if (isAuth) {
        currentLocation = user?.distric;
    } else {
        currentLocation = "choose locattion";
    }

    const [districts, setDistricts] = useState([]);
    const [distval, setDistval] = useState(currentLocation);
    const [showmodal, setShowmodal] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [signoutConfirm, setSignoutConfirm] = useState(false);

    const { setDistrictNow, districtNow } = useContext(DistrictContext);

    const dispatch = useDispatch();

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(userAction.setLogout());
        Navigate("/");
    };

    const findDistrict = async (userId) => {
        //call api
        const res = await getDistricts(userId);
        setDistricts(res.data);
    };
    useEffect(() => {
        findDistrict(userId);
    }, []);
    const change = (e) => {
        setDistval(e.target.value);
        alert(distval);
    };
    const Logout = () => {
        setSignoutConfirm(true);
    };
    return (
        // <div className="absolute top-0 flex justify-between items-center w-full px-4 mx-auto h-24 bg-white text-white">
        //     <div className=" w-full">
        //         <h1 className="w-full text-2xl text-[#00df9a] font-bold">SOCIAL-EXPO</h1>
        //     </div>

        //     {isAuth?<div className="flex w-full">
        //         <div className=" w-[300px] md:w-full  px-20 hidden md:block">
        //         <SearchBar distval={distval}/>
        //         </div>
        //     </div>:<div> </div>}

        //     {isAuth  ? <div onClick={() => setShowmodal(true)} className="hidden md:flex items-center justify-center cursor-pointer  text-black rounded w-full">
        //         <img className="h-10 w-10 left-0 " alt="locationIcon" src="data:image/png;base64,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"></img>
        //         <label className="text-red-500 font-medium ml-5 border-3">Choose District</label>
        //         <div onChange={change} className="ml-10">
        //                {distval!==null ? distval : currentLocation}
        //         </div>
        //         </div>:<div> </div>}
        //         {showmodal ? <LocationChoose
        //             districts={districts}
        //             onClose={setShowmodal}
        //             visible={showmodal} setDistval={setDistval} />:<div> </div>}

        //     <ul className="hidden lg:flex text-xl text-green-500 ">
        //         <Link to='/'><li className="p-4 hover:text-[#00df9a] cursor-pointer">HOME</li></Link>
        //         <Link to='/about'><li className="p-4 hover:text-[#00df9a] cursor-pointer">ABOUT</li></Link>
        //         <li className="p-4 hover:text-[#00df9a] cursor-pointer">CONTACT</li>
        //         <li className="pl-16 pt-2">
        //         { isAuth ? (
        //                 <Link to="/">
        //                     {" "}
        //                     <li className=" pt-2">
        //                         {" "}
        //                         <button onClick={handleLogout} className="bg-[#00df9a] text-white h-9 w-24 rounded-md ">
        //                             Sign out
        //                         </button>
        //                     </li>
        //                 </Link>
        //             ) : (
        //                 <Link to="/login">
        //                     {" "}
        //                     <li className=" pt-2">
        //                         {" "}
        //                         {/* <button className="bg-[#00df9a] text-white h-9 w-24 rounded-md ">Sign In</button> */}
        //                         <div></div>
        //                     </li>
        //                 </Link>
        //             )}
        //         </li>
        //     </ul>
        //     <div onClick={handleNav} className="block md:hidden text-green-500">
        //         {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        //     </div>

        //     <div
        //         className={
        //             !nav
        //                 ? "fixed left-0 top-0 w-[60%] md:hidden h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
        //                 : "fixed left-[-100%]"
        //         }
        //     >
        //         <h1 className="w-full text-3xl text-[#00df9a] font-bold">SOCIAL-EXPO</h1>

        //         {isAuth?<div className="flex items-center justify-center space-x-20 text-black p-4 border-2 rounded w-full ">
        //         <label className="text-white">choose district</label>
        //         <select>
        //               <option> {currentLocation}</option>

        //             {districts.map((dist)=>(
        //                 <option>
        //                 {dist}
        //             </option>
        //             ))}

        //         </select>
        //         </div>:<div> </div>}
        //             <SearchBar />

        //         <ul className="">
        //             <li className="p-4 hover:text-[#00df9a] cursor-pointer">HOME</li>
        //             <li className="p-4 hover:text-[#00df9a] cursor-pointer">ABOUT</li>
        //             <li className="p-4 hover:text-[#00df9a] cursor-pointer">CONTACT</li>

        //            <Link to='/post'> <li className="p-4 pt-5 hover:text-[#00df9a] cursor-pointer">POSTS</li></Link>
        //            <Link to='/nearbyservices'><li className="p-4 hover:text-[#00df9a] cursor-pointer">NEAR BY SERCICE</li></Link>

        //             <li className={!isAuth ? "hidden" : "p-4 hover:text-[#00df9a] cursor-pointer"}>CONTROL PANEL</li>
        //             <li className={!isAuth ? "hidden" : "p-4 pt-5 hover:text-[#00df9a] cursor-pointer"}>MESSAGES</li>

        //             { isAuth ? (
        //                 <Link to="/">
        //                     {" "}
        //                     <li className="pl-16 pt-2">
        //                         {" "}
        //                         <button onClick={handleLogout} className="bg-[#00df9a] text-white h-9 w-24 rounded-md ">
        //                             Sign out
        //                         </button>
        //                     </li>
        //                 </Link>
        //             ) : (
        //                 <Link to="/login">
        //                     {" "}
        //                     <li className="pl-16 pt-2">
        //                         {" "}
        //                         <button className="bg-[#00df9a] text-white h-9 w-24 rounded-md ">Sign In</button>
        //                     </li>
        //                 </Link>
        //             )}
        //         </ul>
        //     </div>
        // </div>

        <div>
            <div className="w-full flex bg-white  h-16 fixed z-50 justify-between items-center px-10 md:px-28 shadow-xl">
                <div>
                    <ul className="flex space-x-5">
                        <Link to="/">
                            <li className="text-2xl text-green-600 font-medium">SOCIAL_EXPO</li>
                        </Link>

                        {isAuth ? (
                            <li className=" hidden md:block ">
                                {" "}
                                <button
                                    onClick={Logout}
                                    className="w-20 bg-yellow-500 h-10 rounded text-black hover:bg-black hover:text-yellow-500 text-lg"
                                >
                                    Sign Out
                                </button>
                            </li>
                        ) : (
                            <Link to="/login">
                                {" "}
                                <li className=" hidden md:block ">
                                    {" "}
                                    {
                                        <button className="w-20 bg-yellow-500 h-10 rounded text-black hover:bg-black hover:text-yellow-500 text-lg">
                                            Sign In
                                        </button>
                                    }
                                    <div></div>
                                </li>
                            </Link>
                        )}

                        <li className="hidden md:block">
                            <select className="w-20 h-10">
                                <option>English</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-10 text-lg">
                        {!showSearchBar ? (
                            <li
                                onClick={() => setShowSearchBar(true)}
                                className="hover:text-yellow-500 cursor-pointer hidden md:block "
                            >
                                <img
                                    className="h-6 w-6"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVR4nO2Wz0pCQRjFf2i6ydop9ArZO1T7FhrlK0TSH+spxNcw61GCaJMFJZn71rqolfHBufBtwjtzLxLkgYELM+ecud98cxhY4Q+hDLSAW+ANmGnY90BztiZXHAIfwHzBGAPNPAwLQM8JPwEXwDawrlEHLoGhW9cVNxo9CX0BJwvEbO5UaxPz6PLOJbQbwNtz5o1Q07I7U/vTULTFfQdKIcSWO9OYsyoCz9I4CiHeiXROPDrSuAkhjUSy7o1FXRp2z1NjKlIlg/GGNKbLNt6MMR7lUOod19mpMRDJEikW19Lox1ynYYbr9CKN49AAGYtoMRiKM3EnwFooueki02IwLfaBb3EPiETXmbdVwt9Q1J8mpp9ANda44MznisGOwqGiYd175c40MU3W18iAhq7FoofAROWtuqzObF5S4Fv2vioYZtpQX93rG6mWp3koqu5lYpvd4r+Y11zZH5ZpnJg/AvfLNl4Bww/dcoIlpDH7/gAAAABJRU5ErkJggg=="
                                    alt="/"
                                />
                            </li>
                        ) : (
                            <li
                                onClick={() => setShowSearchBar(false)}
                                className="hover:text-yellow-500 cursor-pointer hidden md:block"
                            >
                                <img
                                    className="h-6 w-6"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVR4nO2Wz0pCQRjFf2i6ydop9ArZO1T7FhrlK0TSH+spxNcw61GCaJMFJZn71rqolfHBufBtwjtzLxLkgYELM+ecud98cxhY4Q+hDLSAW+ANmGnY90BztiZXHAIfwHzBGAPNPAwLQM8JPwEXwDawrlEHLoGhW9cVNxo9CX0BJwvEbO5UaxPz6PLOJbQbwNtz5o1Q07I7U/vTULTFfQdKIcSWO9OYsyoCz9I4CiHeiXROPDrSuAkhjUSy7o1FXRp2z1NjKlIlg/GGNKbLNt6MMR7lUOod19mpMRDJEikW19Lox1ynYYbr9CKN49AAGYtoMRiKM3EnwFooueki02IwLfaBb3EPiETXmbdVwt9Q1J8mpp9ANda44MznisGOwqGiYd175c40MU3W18iAhq7FoofAROWtuqzObF5S4Fv2vioYZtpQX93rG6mWp3koqu5lYpvd4r+Y11zZH5ZpnJg/AvfLNl4Bww/dcoIlpDH7/gAAAABJRU5ErkJggg=="
                                    alt="/"
                                />
                            </li>
                        )}
                        <Link to="/">
                            {" "}
                            <li className="hover:text-yellow-500 cursor-pointer hidden md:block">Home</li>{" "}
                        </Link>
                        <Link to="/nearbyservices">
                            <li className="hover:text-yellow-500 cursor-pointer hidden md:block">Services</li>
                        </Link>
                        {/* <li className="hover:text-yellow-500 cursor-pointer hidden md:block">about</li>
                        <li className="hover:text-yellow-500 cursor-pointer hidden md:block">contact</li> */}
                        {!isAuth ? null : (
                            <Link to="/chat">
                                <li className="hover:text-yellow-500 cursor-pointer hidden md:block">message</li>{" "}
                            </Link>
                        )}
                        {isAuth ? (
                            <Link to="/profile/myprofile">
                                {" "}
                                <div className="hover:text-yellow-500 cursor-pointer hidden md:block">
                                    <h1>Profile</h1>
                                </div>
                            </Link>
                        ) : null}
                        <li>
                            {isAuth ? (
                                districtNow !== undefined ? (
                                    <button
                                        onClick={() => {
                                            setShowmodal(true);
                                        }}
                                        className="px-2 h-10 bg-yellow-500 rounded hover:bg-black hover:text-yellow-500 hidden md:block"
                                    >
                                        {districtNow}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setShowmodal(true);
                                        }}
                                        className="px-2 h-10 bg-yellow-500 rounded hover:bg-black hover:text-yellow-500 hidden md:block"
                                    >
                                        choose location
                                    </button>
                                )
                            ) : (
                                <button
                                    onClick={() => setShowmodal(true)}
                                    className="px-2 h-10 bg-yellow-500 rounded hover:bg-black hover:text-yellow-500 hidden md:block"
                                >
                                    {districtNow}
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
                {console.log(distval, "Val")}
                {console.log(districtNow, "Now")}
                <div onClick={handleNav} className="block md:hidden text-green-500">
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>
            {/* ----------------------------search-down--------------------------- */}
            <div>
                {!showSearchBar ? null : (
                    <div className=" flex justify-between pt-16 px-20 mb-5">
                        <SearchBar distval={distval} />

                        {isAuth ? (
                            <div
                                onClick={() => setShowmodal(true)}
                                className="hidden md:flex items-center justify-center cursor-pointer  text-black rounded w-full"
                            >
                                <img
                                    className="h-10 w-10 left-0 "
                                    alt="locationIcon"
                                    src="data:image/png;base64,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"
                                />
                                <label className="text-red-500 font-medium ml-5 border-3 cursor-pointer">
                                    Choose District
                                </label>
                                <div onChange={change} className="ml-10">
                                    {distval !== null ? distval : currentLocation}
                                </div>
                            </div>
                        ) : (
                            <div> </div>
                        )}
                    </div>
                )}
                {showmodal ? (
                    <LocationChoose
                        districts={districts}
                        onClose={setShowmodal}
                        visible={showmodal}
                        setDistval={setDistval}
                        setDistrictNow={setDistrictNow}
                    />
                ) : (
                    <div> </div>
                )}
            </div>
            {/* ----------------------------mobile-view------------------------------- */}

            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[60%] md:hidden h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl text-[#00df9a] font-bold">SOCIAL-EXPO</h1>

                {isAuth ? (
                    <div className="flex items-center justify-center space-x-20 text-black p-4 border-2 rounded w-full ">
                        <label className="text-white">choose district</label>
                        <select>
                            <option> {currentLocation}</option>

                            {districts.map((dist, index) => (
                                <option key={index}>{dist}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div> </div>
                )}
                <SearchBar />

                <ul className="">
                    <li className="p-4 hover:text-yellow-500 cursor-pointer text-white">HOME</li>
                    <li className="p-4 hover:text-yellow-500 cursor-pointer text-white">ABOUT</li>
                    <li className="p-4 hover:text-yellow-500 cursor-pointer text-white">CONTACT</li>

                    <Link to="/post">
                        {" "}
                        <li className="p-4 pt-5 hover:text-yellow-500 cursor-pointer text-white">POSTS</li>
                    </Link>
                    <Link to="/nearbyservices">
                        <li className="p-4 hover:text-yellow-500 cursor-pointer text-white">NEAR BY SERCICE</li>
                    </Link>

                    <li className={!isAuth ? "hidden" : "p-4 hover:text-yellow-500 cursor-pointer text-white"}>
                        CONTROL PANEL
                    </li>
                    <li className={!isAuth ? "hidden" : "p-4 pt-5 hover:text-yellow-500 cursor-pointer text-white"}>
                        MESSAGES
                    </li>

                    {isAuth ? (
                        // <Link to="/">

                        <li className="pl-16 pt-2">
                            <button
                                onClick={handleLogout}
                                className="w-20 bg-yellow-500 h-10 rounded text-white hover:bg-black hover:text-yellow-500 "
                            >
                                Sign out
                            </button>
                        </li>
                    ) : (
                        // </Link>
                        <Link to="/login">
                            {" "}
                            <li className="pl-16 pt-2">
                                {" "}
                                <button className="w-20 bg-yellow-500 h-10 rounded text-black hover:bg-white hover:text-yellow-500 ">
                                    Sign In
                                </button>
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
            {/* ---------------------------confirm signout---------------------------------- */}
            {signoutConfirm ? <SignOutConfirm setSignoutConfirm={setSignoutConfirm} handleLogout={handleLogout} /> : null}
        </div>
    );
};

export default Navbar;
