/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { getProfile } from "../API/profile";
import Editprofile from "../components/Editprofile";
import Addpost from "../components/AddPost";
import MyService from "../components/MyService";
import NavBarListPage from "../components/NavBarListPage";
import { getMyservice } from "../API/servicesApi";
import MyPosts from "../components/MyPosts";
import AddService from "../components/AddService";
import { getMypost } from "../API/postApi";
import { AiOutlineArrowRight } from "react-icons/ai";
import SeeAllPost from "../components/SeeAllPost";
import { useParams } from "react-router-dom";
import DeleteService from "../components/confrmations/DeleteService";
// import AddService from "../components/AddService";

const Profile = () => {
    const { profileid } = useParams();
    const user = useSelector((state) => state.user.data.user);
    let userid;
    if (profileid === "myprofile") userid = user?._id;
    else userid = profileid;

    const [profile, setProfile] = useState(null);
    const [showmodal, setShowmodal] = useState(false);
    const [updateprofile, setUpdateprofile] = useState(false);
    const [myservice, setMyservice] = useState(null);
    const [myposts, setMyposts] = useState([]);
    const [showallpost, setShowAllpost] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deletepost, setdeletepost] = useState(false);
    console.log(userid);
    const myService = async (userid) => {
        const res = await getMyservice(userid);
        setMyservice(res.data);
    };

    useEffect(() => {
        myService(userid);
    }, [confirmDelete]);

    const Myposts = async (userid) => {
        const res = await getMypost(userid);
        setMyposts(res.data);
    };
    useEffect(() => {
        Myposts(userid);
    }, [deletepost]);

    useEffect(() => {
        getProfile(userid).then((res) => {
            setProfile(res.data);
        });
    }, [updateprofile]);

    const myserviceDelete = async () => {
        setConfirmDelete(true);
    };
    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <NavBarListPage />
            </div>

            {/* <DragableChat /> */}
            <div className="flex w-full ">
                <div className="w-full flex flex-col">
                    <div className={profileid !== "myprofile" ? `hidden` : `w-full space-x-5 md:space-x-20`}>
                        <Addpost />
                    </div>
                    {confirmDelete ? <DeleteService open={setConfirmDelete} /> : <div></div>}

                    <div className=" sm:flex gap-3 px-3 relative">
                        <div className="w-full sm:w-1/2 ">
                            <ProfileCard profile={profile} setShowmodal={setShowmodal} profileid={profileid} />
                        </div>

                        <div className="w-full sm:w-1/2">
                            <h1 className="p-4">
                                {" "}
                                <span className="text-green-500 text-xl font-medium">{profile?.firstname}</span> added
                                service
                            </h1>
                            <div className="sm:flex relative  w-full">
                                {myservice ? (
                                    <>
                                    <div>
                                        <MyService myservice={myservice} />
                                    {myservice.approved === false ? <div className="pt-10 capitalize text-xl text-red-500">your proof is verifying it will be take some time</div> : null}
                                    </div>
                                    </>
                                ) : (
                                    <div>
                                        <AddService />
                                    </div>
                                )}
                                <div
                                    className={
                                        !myservice || profileid !== "myprofile"
                                            ? `hidden`
                                            : ` flex-col flex w-full space-y-4 pt-2 md:pt0 md:space-y-10 items-center justify-center`
                                    }
                                >
                                    {/* <button
                                        className={`bg-green-400 w-28 cursor-pointer capitalize bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent text-center rounded`}
                                    >
                                        update service
                                    </button> */}

                                    <button
                                        onClick={myserviceDelete}
                                        className="bg-red-400 w-28  cursor-pointer capitalize bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent  text-center rounded"
                                    >
                                        delete service
                                    </button>
                                </div>
                            </div>
                            {myposts.length === 0 ? (
                                <div className="text-xl text-red-500 pt-24">
                                    <span className="text-xl font-bold"> {profile?.firstname} </span> dont have any post
                                </div>
                            ) : (
                                <div className="pt-3">
                                    {profile?.firstname} posts
                                    <MyPosts post={myposts} />
                                    <div
                                        onClick={() => setShowAllpost(true)}
                                        className=" cursor-pointer flex w-full justify-center space-x-10 items-center "
                                    >
                                        <h1 className="text-center pt-10 font-medium">see all post</h1>
                                        <div className="pt-10">
                                            <AiOutlineArrowRight />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* <div>
                        <button
                            onClick={() => setShowmodal(true)}
                            className="bg-green-400 md:ml-56 p-5 text-xl mt-10 font-bold rounded-md"
                        >
                            Edit Profile
                        </button>
                    </div> */}
                </div>
            </div>
            <div>
                <Footer />
            </div>

            <SeeAllPost showallpost={showallpost} onClose={setShowAllpost} myposts={myposts} deletedpost={deletepost} setdeletepost={setdeletepost} />

            <Editprofile
                updateprofile={updateprofile}
                onClose={setShowmodal}
                visible={showmodal}
                setUpdateprofile={setUpdateprofile}
            />
        </div>
    );
};

export default Profile;
