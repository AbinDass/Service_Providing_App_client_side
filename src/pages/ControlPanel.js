/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllrequests, getAppointment, getAppointmentStatus } from "../API/servicesApi";
import Navbar from "../components/Navbar";
import RequestNotificationCard from "../components/RequestNotificationCard";
// import Sidebar from "../components/Sidebar";
import NavBarListPage from "../components/NavBarListPage";
import MyAppointment from "../components/MyAppointment";
import MyAppointmentStatus from "../components/MyAppointmentStatus";
import HistoryRequests from "../components/HistoryRequests";
import HistoryAppoinments from "../components/HistoryAppoinments";

const ControlPanel = () => {
    const [requests, setRequests] = useState([]);
    const [accept, setAccept] = useState(false);
    const [reject, setReject] = useState(false);
    const [showRequestHistory, setShowRequestHistory] = useState(false);
    const [req, setReq] = useState(false);

    const [myAppointments, setMyAppointments] = useState([]);
    const [incomingAppointments, setIncomingAppointments] = useState(false);
    const [showicomingAppointments, setShowicomingAppointments] = useState(false)

    const [appointmentStatus, setAppointmentStatus] = useState([]);
    const [upcomingWorkStatus, setUpcomingWorkStatus] = useState(false);
    const [showMoreStatus, setShowMoreStatus] = useState(false)

    const [update, setUpdate] = useState("");

    const user = useSelector((state) => state.user.data.user);
    const userid = user._id;

    useEffect(() => {
        getAllrequests(userid).then((res) => {
            setRequests(res.data.requests);
        });
    }, [accept, reject]);

    const appointments = async (userid) => {
        // alert(userid)
        const res = await getAppointment(userid);
        setMyAppointments(res.data);
        console.log(res, "ivde");

        const status = await getAppointmentStatus(userid);
        console.log(status, "stttt");
        setAppointmentStatus(status.data.slice(0, 3));
    };

    useEffect(() => {
        appointments(userid);
    }, [update]);

    const myrequest = () => {
        setIncomingAppointments(false);
        setUpcomingWorkStatus(false);
        setReq(true);
    };
    const myIcomingAppoints = () => {
        setReq(false);
        setUpcomingWorkStatus(false);
        setIncomingAppointments(true);
    };
    const upcomingWorks = () => {
        setReq(false);
        setIncomingAppointments(false);
        setUpcomingWorkStatus(true);
    };
    useEffect(() => {
        setReq(true);
        setIncomingAppointments(false);
        setUpcomingWorkStatus(false);
    }, []);

    const seeMoreStatus = async() => {
        const status = await getAppointmentStatus(userid);
        setAppointmentStatus(status.data);
        setShowMoreStatus(true)
    };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="pt-16 bg-white ">
                <div className="flex w-full justify-around items-center text-center shadow-black shadow-2xl ">
                    <div onClick={myrequest} className="flex justify-center w-full md:h-16 items-center cursor-pointer">
                        <h1 className="capitalize font-medium text-lg hover:underline hover:text-yellow-500">
                            incoming Follow request's
                        </h1>
                    </div>
                    <div
                        onClick={myIcomingAppoints}
                        className="flex justify-center w-full md:h-16 items-center cursor-pointer"
                    >
                        <h1 className="capitalize font-medium text-lg hover:underline hover:text-yellow-500">
                            incoming appointment's{" "}
                        </h1>
                    </div>
                    <div onClick={upcomingWorks} className="flex justify-center w-full md:h-16 items-center cursor-pointer">
                        <h1 className="capitalize font-medium text-lg hover:underline hover:text-yellow-500">
                            upcoming work status
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="md:flex w-full  gap-10 justify-center ">
                    {/* -------------------------------------request deta----------------------------------------------- */}
                    {req ? (
                        requests.length !== 0 ? (
                            <div className={" w-full  py-10"}>
                                <h1 className="text-center text-2xl font-medium">Follow Request's</h1>

                                <div
                                    className={
                                        showRequestHistory
                                            ? "hidden"
                                            : "flex flex-col pt-10 justify-center items-center gap-10"
                                    }
                                >
                                    <div className="flex space-x-10">
                                        <span className="capitalize text-md">do you want see the requst History ?</span>
                                        <span
                                            onClick={() => setShowRequestHistory(true)}
                                            className="capitalize text-xl text-red-700 cursor-pointer"
                                        >
                                            see more
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    {showRequestHistory ? (
                                        <HistoryRequests main={requests} setShowRequestHistory={setShowRequestHistory} />
                                    ) : null}
                                </div>

                                <div className="  w-full ">
                                    {requests.map((requst) =>
                                        !requests.length === 0 ? (
                                            <div>there is no request</div>
                                        ) : (
                                            <RequestNotificationCard
                                                setReject={setReject}
                                                reject={reject}
                                                setAccept={setAccept}
                                                request={requst}
                                                main={requests}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-xl capitalize text-red-700 h-[600px]">
                                currently you dont have any request data
                            </div>
                        )
                    ) : null}
                    {/* ----------------------------------incoming appointments data-------------------------------------------------- */}
                    {incomingAppointments ? (
                        myAppointments.length !== 0 ? (
                            <div className={" flex flex-col w-full py-10"}>
                                <h1 className="text-center text-2xl font-medium capitalize">Appointment's for you</h1>
                                
                                <div className="flex flex-col justify-center items-center pt-5">
                                    <div className={showicomingAppointments?"hidden":"flex gap-5"}>
                                    <h1 className="capitalize">see your incoming appointment history ?</h1>
                                    <h1 onClick={() => setShowicomingAppointments(true)} className="capitalize text-xl text-red-700 cursor-pointer">see more ?</h1>
                                    </div>
                                    {showicomingAppointments?<div>
                                        <HistoryAppoinments myAppointments={myAppointments} setShowicomingAppointments={setShowicomingAppointments}/>
                                    </div>:null}
                                </div>

                                <div className="w-full flex justify-center ">
                                    <div className="flex flex-wrap overflow-y-scroll scrollbar-hide  md:w-[1240px] gap-10 justify-center ">
                                        {myAppointments.map((appoint) => (
                                            appoint.status === 'no response' ? <MyAppointment key={appoint._id} appoint={appoint} setUpdate={setUpdate} />:null
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-xl capitalize text-red-700 h-[600px]">
                                currently you dont have any appointments{" "}
                            </div>
                        )
                    ) : null}
                    {/* ----------------------------------------- my appointment status data ---------------------------------------------- */}
                    {upcomingWorkStatus ? (
                        appointmentStatus.length !== 0 ? (
                            <div className={" flex flex-col justify-center w-full py-10"}>
                                <h1 className="text-center text-2xl font-medium">Appointment status</h1>

                                <div className="flex justify-center gap-5  flex-wrap">
                                    {appointmentStatus.map((status) => (
                                        <MyAppointmentStatus status={status} />
                                    ))}
                                </div>
                                    {showMoreStatus?null:<h1 onClick={seeMoreStatus} className="capitalize text-xl text-red-700 cursor-pointer text-center pt-10">see more</h1>}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center text-xl capitalize text-red-700 h-[600px]">
                                currently you dont have any appointment history
                            </div>
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
