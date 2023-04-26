import React from 'react'

const MyAppointmentStatus = ({status}) => {
  return (
    <div>
      <div className="w-full relative">
            {<div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                <div className="w-full flex items-center justify-between">
                
                    
                    
                </div>
                <div className="flex  gap-10 items-center justify-center mt-2 rounded-lg py-1 cursor-pointer">
                    <div className="relative flex flex-shrink-0 items-end">
                        <img className="h-16 w-16 rounded-full" src={status.worker.profilepicture} alt='/' />
                    </div>
                        <div className='flex justify-between mt-3 gap-4'>
                        <h1 className="font-semibold tracking-tight text-md capitalize  ">
                             Your Appointment to 
                            <span className='text-xl text-red-500'> {status.worker.firstname} </span>
                            On
                             <span className='text-xl text-red-500'> {status.date} </span>
                              At
                             <span className='text-xl text-red-500'> {status.time} </span>
                             </h1>
                           
                        </div>  
                    
                </div>

                        <div className='flex flex-col justify-center items-center'>
                       <h1>{status.worker.firstname} 
                             <span className={status.status==="confirmed" ? 'text-xl text-green-500': 'text-xl text-red-500' }> {status.status} </span>
                             your appointment
                         </h1>
                        </div>
            </div>}
        </div>
    </div>
  )
}

export default MyAppointmentStatus
