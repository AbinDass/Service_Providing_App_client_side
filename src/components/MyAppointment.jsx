import React from 'react'
import {  updateAppointment} from '../API/servicesApi';


const MyAppointment = ({appoint, setUpdate}) => {
    // const [update, setUpdate] = useState('no responce')
     
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


  return (
    <div>
      <div className="w-full relative">
            {<div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                <div className="w-full flex items-center justify-between">
                
                    
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
                           {<div onClick={cancelAppointment} className={appoint.status === 'confirmed' || appoint.status === 'cancelled' ?"hidden" :"bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent w-24  text-center rounded"}>Cancel</div>} 
                        {appoint.status === 'confirmed' ? <h1>confirmed</h1>:<div></div>}
                        {appoint.status === 'cancelled' ? <h1>cancelled</h1>:<div></div>}
                        </div>  }
                </div>
            </div>}

        </div>
    </div>
  )
}

export default MyAppointment
