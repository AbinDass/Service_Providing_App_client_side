/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaRupeeSign } from 'react-icons/fa'
import { TfiBag } from 'react-icons/tfi'
// import { ProgressBar } from  'react-loader-spinner'
import { useSelector } from 'react-redux'
import { cancelRequest, getUserRequest, requestWorker } from '../API/servicesApi'
import { createConversation } from '../API/chatapi'
import { Link, useNavigate } from 'react-router-dom'
import HireNow from '../pages/HireNow'
import LoginRequest from './confrmations/LoginRequest'

const Listservices = ({worker}) => {
  const [requestload, setRequestload] = useState(true); 
  const [pending, setPending] = useState('');
  const [ refresh , setRefresh] = useState(false)
  const [seeappointment, setSeeAppointment] = useState(false)
  const [loginShow, setLoginShow] = useState(false);
  const isAuth = Boolean(useSelector((state) => state.user.token));
  const user = useSelector((state) => state.user.data.user);
  const fromId = user?._id
  const toId = worker.user._id

  const requestHere = () => {
    setRequestload(true);
    requestWorker(fromId, toId).then((res)=>{
      console.log(requestload,"loaaaaaaaaaaad");
      console.log(res.data.requests[0].requestStatus);
      setRefresh(!refresh)
    })
  };




useEffect(()=>{
  getUserRequest(fromId, toId).then((res)=>{
    console.log(res.data,'kkkk')
    setPending(res.data);
  })
},[refresh,pending])

const navigate = useNavigate()
const message = async (fromId,toId) =>{
 const res = await createConversation(fromId,toId);
 if(res.data){
  navigate('/chat')
 }
}
const messageNow = (fromId,toId) => {
  console.log(fromId, toId)
    message(fromId,toId)
};


const unfollow = () => {
  
  cancelRequest(fromId,toId).then((res) => {
    console.log(res)
    if(res){
      setRefresh(!refresh)
    }
  });
}

const loginNow = () => {
  setLoginShow(true);
}
  return (
    <>
               { seeappointment ? <HireNow setSeeAppointment={setSeeAppointment} worker={worker}/>:<></>}
      <div className='flex justyfy-center  gap-10 pt-20'>
            <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg overflow-hidden p-4">
              <div className='p-4 flex justify-center'>
              <img src={worker.user.profilepicture} alt='profilepic' className='h-28 w-24 rounded' />
              </div>
              <div className='text-center'>
                <h3 className="font-medium capitalize text-2xl mb-2"> {worker.user.firstname} {worker.user.secondname}</h3>
                <h3 className="font-medium capitalize text-md mb-2"> {worker.location} </h3>
                <h3 className="font-medium capitalize text-md mb-2"> {worker.distric} </h3>
                
              </div>
            <div className=" p-4 space-y-5 ">
              <div className='flex gap-10'>
                <TfiBag />
                <h1> {worker.servicetitle} </h1>
              </div>
             { console.log(pending,'pending enta') }
              <p className="text-gray-600 flex gap-10"> <BsFillTelephoneForwardFill /> {worker.user.phone}</p>
              <p className="text-gray-600 flex gap-10"><FaRupeeSign />{worker?.labour} INR /H</p>
              <p className="text-gray-600 max-w-[250px]">{worker.description}</p>   
              <div className='flex'>
              {isAuth?<Link to={'/profile/'+ toId}><button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded "> profile</button></Link>:<button onClick={loginNow} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded "> profile</button>}
                {isAuth?<button onClick={() => messageNow(fromId,toId)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded  ml-10 "> Message </button>:<button onClick={loginNow} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded  ml-10 "> Message </button>}
                      { pending === "noRequests" ?
                      (isAuth?<button onClick={requestHere} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded ml-10">follow</button>:<button onClick={loginNow} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded ml-10">follow</button>)
                      : pending === "pending" ? 
                      (<button onClick={unfollow} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded ml-10"> requested</button>)
                      :<button onClick={unfollow} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-24 rounded ml-10">unfollow</button>}
              </div>
            </div>
            {isAuth?<div onClick={()=> setSeeAppointment(true)} className='bg-red-300 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-full text-center h-10 flex justify-center items-center shadow-md rounded-lg my-10 text-xl cursor-pointer '>Hire Now</div>:<div onClick={loginNow} className='bg-red-300 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent w-full text-center h-10 flex justify-center items-center shadow-md rounded-lg my-10 text-xl cursor-pointer '>Hire Now</div>}
            </div>
  
          {loginShow?<LoginRequest setLoginShow={setLoginShow}/>:null}
           
</div>
    </>
      
  )
}

export default Listservices
