import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { getAppointment, updateAppointment} from '../API/servicesApi';


const MyAppointment = ({appoint, setUpdate}) => {
    // const [update, setUpdate] = useState('no responce')
    const user = useSelector((state) => state.user.data.user);
    const userid = user._id;
     
    const appoitnId = appoint._id
    const updateConfirm = async (appoitnId, button)=>{
       const res = await updateAppointment(appoitnId,button)
        setUpdate(res.data.status)
        
    }
    const confirmAppointment = () => {
        let button = 'confirm'
        updateConfirm(appoitnId, button)
    }
    const cancelAppointment = () => {
        let button = 'cancel'
        updateConfirm(appoitnId, button)
    }

//     const getUpdate = async(userid) =>{
//       const res = await getAppointment(userid)
//       console.log(res,'poop')
//     }
// useEffect(()=>{
//     getUpdate(userid)
// },[])
  return (
    <div>
      <div className="w-full relative">
            {<div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                <div className="w-full flex items-center justify-between">
                
                    {console.log(appoint.status,'poop')}
                    
                </div>
                <div className="flex  flex-col items-center justify-center mt-2 rounded-lg py-1 cursor-pointer">
                    <div className="relative flex flex-shrink-0 items-end">
                        <img className="h-16 w-16 rounded-full" src={appoint.user.profilepicture} alt='/' />
                    </div>
                        <h1 className="font-semibold tracking-tight text-md">{appoint.user.firstname} {appoint.user.secondname}</h1>
                    <div className="ml-3.5 w-[400px]">

                        <div className='flex flex-col justify-center items-center'>
                       <h1>connect : {appoint.user.email} </h1>
                       <h1>connect : {appoint.user.phone} </h1>
                       <h1>requested date : {appoint.date} </h1>
                       <h1>requested time : {appoint.time} </h1>
                       <p className='pt-4 text-blue-500'>{appoint.descreption}</p>
                        </div>

                   

                    </div>
                        { <div className='flex justify-between mt-3 gap-4'>
                           {<div onClick={confirmAppointment} className={appoint.status === 'confirmed' || appoint.status === 'cancelled' ?"hidden" : "bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent w-24  text-center rounded"}>Confirm</div>  }
                           {/* <div className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent w-24 rounde">Cancel</div> */}
                           {<div onClick={cancelAppointment} className={appoint.status === 'confirmed' || appoint.status === 'cancelled' ?"hidden" :"bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent w-24  text-center rounded"}>Cancel</div>} 
                        {appoint.status === 'confirmed' ? <h1>confirmed</h1>:<div></div>}
                        {appoint.status === 'cancelled' ? <h1>cancelled</h1>:<div></div>}
                        </div>  }
                </div>
            </div>}




        {/* <div className="w-full h-auto relative">
              {<div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                  <div className="w-full flex items-center justify-between">
                  
        
                      <span className="font-medium text-sm">New Notification</span>
                      <button className="-mr-1 bg-slate-800 hover:bg-slate-700/70 text-slate-400 hover:text-slate-200 h-5 w-5 rounded-full flex justify-center items-center">
                          <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                      </button>
                  </div>
                  <div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
                      <div className="relative flex flex-shrink-0 items-end">
                          <img className="h-16 w-16 rounded-full" src={request?.requstedUserId?.profilepicture} alt='/' />
                          <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
                      </div>
                      <div className="ml-3.5">
                          <span className="font-semibold tracking-tight text-xs">{request?.requstedUserId?.firstname}</span>
                          <span className="text-xs leading-none opacity-50 pl-5"> requested to work for him</span>
                          <p className="text-xs leading-4 pt-2 italic opacity-70">"connect with " {request?.requstedUserId?.email}</p>
                          <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">{format(request?.createdAt)}</span>
                          <div className='flex justify-between gap-8'>
                                 { !request?.requestStatus  ? <button onClick={acceptRequest} className='bg-green-200 w-24 text-black rounded mt-5'>Accept </button>: <button  className='bg-green-200 w-24 text-black ml-10 rounded mt-5'> Done  </button>}
                                  {<button onClick={rejectRequest} className={request?.requestStatus ? `hidden`:`bg-red-200 w-24 text-black rounded mt-5`}>Reject</button>}
                          </div>  
                     
        
                      </div>
                  </div>
              </div>} */}
        </div>
    </div>
  )
}

export default MyAppointment
