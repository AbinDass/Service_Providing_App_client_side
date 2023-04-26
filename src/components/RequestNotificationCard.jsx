import React, { useState } from 'react'
import { acceptingRequest, rejectingRequest, } from '../API/servicesApi'

import { useSelector } from 'react-redux';
import HistoryRequests from './HistoryRequests';


const RequestNotificationCard = ({request, main, setAccept , reject, setReject}) => {
    const user = useSelector((state) => state.user.data.user);
    const userid = user._id;
    
    const acceptRequest = () => {
        acceptingRequest(request._id,userid).then((res) => {
            if(res){
                setAccept(res.data.requestStatus)
            }
           
        })
    }

 
    const rejectRequest = async () => {
       const res = await rejectingRequest(request._id,userid)
       console.log(res,'rejecting request')
       if(res) setReject(!reject)
    }
// alert(request?.requestStatus)
// console.log(main,123)
// if(request?.requestStatus){
//     return (
//         <>
//         <div className={ showRequestHistory ? 'hidden':'flex flex-col md:h-[600px] justify-center items-center gap-10'}>
//             <div className='mx-auto capitalize text-xl'>
//                    currently you dont have any requests!
//             </div>
//             <div className='flex space-x-10'>
//                 <span className='capitalize text-md'>do you want see the requst History ?</span>
//                 <span onClick={()=> setShowRequestHistory(true)} className='capitalize text-xl text-red-700 cursor-pointer'>see now</span>
//             </div>
//         </div>
//             <div>
//                 {showRequestHistory?<HistoryRequests main={main}/>:null}
//             </div>
//             </>
//         )
// } else{

    return (
     <>
          <div className={ !request?.requestStatus  ?"w-full relative ":"hidden"}>
              {<div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                  <div className="w-full flex items-center justify-between">
                  
                      
                  </div>
                  <div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
                      <div className="relative flex flex-shrink-0 items-end">
                          <img className="h-16 w-16 rounded-full" src={request?.requstedUserId?.profilepicture} alt='/' />
                          <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900"></span>
                      </div>
                      <div className="ml-3.5">
                          <h1 className="font-semibold tracking-tight text-xs"><span className='text-xl text-red-500'>{request?.requstedUserId?.firstname}</span>    has requested to follow</h1>
                          <div className='flex justify-between gap-8'>
                              
                                 <button onClick={acceptRequest} className= 'bg-green-200 w-24 text-black rounded mt-5'>Accept </button>
                                  {<button onClick={rejectRequest} className={request?.requestStatus ? `hidden`:`bg-red-200 w-24 text-black rounded mt-5`}>Reject</button>}
                          </div>  
                     
  
                      </div>
                  </div>
              </div>}
              
          </div>
          </>
    )

}

export default RequestNotificationCard
