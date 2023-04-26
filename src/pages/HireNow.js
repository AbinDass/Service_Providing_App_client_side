/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Appointment } from "../API/servicesApi";
import { useDispatch, useSelector } from "react-redux";
import { appointmentAction } from "../redux/slice/appointmentslice";
// import "react-datetime/css/react-datetime.css";
const HireNow = ({ setSeeAppointment, worker }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [desc, setDesc] = useState(null);
    // const dispatch = useDispatch()
    const user = useSelector((state) => state.user.data.user);
    const userid = user._id
    const workerid = worker.user._id
  
    

    const Close = (e) => {
        if (e.target.id === "container" || e.target.id === "cancel") {
            setSeeAppointment(false);
        }
    };
// useEffect(()=>{
//     dispatch(
//         appointmentAction.setRemoveAppointment()
//     )
// },[])
const goToAppointment = async (e) => {
    const res = await Appointment(workerid, userid, selectedDate, selectedTime, desc)
    console.log(res)
    if(res.status ===200) setSeeAppointment(false)
    
};
    return (
        <div
            onClick={Close}
            id="container"
            className="fixed inset-0 bg-opacity-60 backdrop-blur-0 flex justify-center items-center"
        >
{/* 
<DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="MM/dd/yyyy"
      placeholderText="Select a date"
      calendarClassName="bg-white shadow-lg rounded-lg py-4 px-2 absolute top-1 w-full"
      className='appearance-none m-3   mr-8 text-xl bg-slate-200   w-full inline-block '
    /> */}

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 p-4">
                        <img
                            className="h-48 w-full object-cover md:w-48"
                            src={worker.user.profilepicture}
                            alt="Card image"
                        />
                        <h1 className="pt-4">{worker.servicetitle}</h1>
                        <h1>{worker.location}</h1>
                        <h1>{worker.labour}</h1>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {worker.user.firstname} {worker.user.secondname}
                        </div>
                        {/* <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            Title of the card
                        </h1> */}
                        <p className="mt-2 text-gray-500">
                            Pick a date and time that is suitable for you.You will get notified when the service provider
                            approves or deny your appointment.
                        </p>
                        
                        <input onChange={(e)=> setSelectedDate(e.target.value)} type="date"  className="border-2 pt-4 mt-3 w-full border-black"   />
                        <input onChange={(e)=> setSelectedTime(e.target.value)} type="time"  className="border-2 pt-4 mt-3 w-full border-black"   />
                        <textarea onChange={(e)=>setDesc(e.target.value)} className="border-2 pt-4 mt-3 w-full border-black" />
                        
                        <div className="w-full flex justify-between pt-5">
                            <button
                                onClick={Close}
                                id="cancel"
                                class="px-4 py-2 font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                            >
                                Cancel
                            </button>
                            <button onClick={goToAppointment} class="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Schedule Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireNow;
