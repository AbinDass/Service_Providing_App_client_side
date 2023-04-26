import React from 'react'

const WorkerDetail = ({worker,setWorkerDetails}) => {
  return (
    <div>
      <div className='flex'>
            <div className=''>
                {console.log(worker,"pppppfhdf")}
             {worker?.user?.firstname}  
            </div>
      </div>
      <button onClick={()=>setWorkerDetails(false)}>cancel</button>
    </div>
  )
}

export default WorkerDetail
