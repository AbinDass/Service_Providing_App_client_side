import React from 'react'
import { approve } from '../../API/dashboardcontrols';

const WorkerDetails = ({setShowImg, workerproof}) => {
    const approveWorker = (workerid, button) =>{
        approve(workerid,button).then(()=> setShowImg(false))
    };
  return (
    <div>
       
            <div className='flex flex-col'>
                <img className='sm:w-[400px] ' src={workerproof.liecence} alt='/'/>
            </div>
        <div className='flex space-x-32 pt-10'>
            <button className='bg-red-400 h-10 w-24 rounded-md hover:bg-slate-300 capitalize' onClick={()=> setShowImg(false)}>cancel</button>
            {
              workerproof.approved !== true ?   <button className='bg-green-400 h-10 px-4 rounded-md hover:bg-slate-300 capitalize' onClick={() => approveWorker(workerproof._id,"approve")}> Approve Worker</button>
               : <button className='bg-green-400 h-10 px-4 rounded-md hover:bg-slate-300 capitalize' onClick={() => approveWorker(workerproof._id,"cancel")}> Cancel Approve </button>
            }
        </div>
    </div>
  )
}

export default WorkerDetails
