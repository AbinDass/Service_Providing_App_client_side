import React, { useState } from 'react'
import moment from 'moment';
import WorkerDetails from './WorkerDetails';

const WorkersControl = ({workers}) => {
    const [workerproof, setWorkerproof] = useState(false)
    const [showImg, setShowImg] = useState(false)
    
  return (
    <div>
        {showImg?null:<section className="bg-white py-20 ">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">
                           <table className="table-auto  w-full ">
                                    <thead>
                                        <tr className="bg-primary text-center">
                                            <th className="md:w-[150px] w-[100px]">profile_pic</th>
                                            <th className="md:w-[150px] w-[100px]">first name</th>
                                            <th className="md:w-[150px] w-[100px]">second name</th>
                                            <th className="md:w-[150px] w-[100px]">service</th>

                                            <th className="md:w-[150px] w-[100px]">location</th>
                                            <th className="md:w-[150px] w-[100px]">proof</th>
                                            <th className="md:w-[150px] w-[100px]">joined</th>
                                            <th className="md:w-[150px] w-[100px]"></th>
                                        </tr>
                                    </thead>
                                    {workers.map((worker) =>(

                                    <tbody>
                                        
                                            <tr>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                                                >
                                                  <img src={ worker.user.profilepicture} alt='\'/>

                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                                                >
                                                   {worker.user.firstname}

                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                   {worker.user.secondname}
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                   {worker.servicetitle}

                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                                                >
                                                {worker.location}

                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           
                           "
                                                >
                                                   <img className=' hover:scale-110' src={worker.liecence} alt='\'/>
                                                </td>

                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                                >                                               
                                                      {moment(worker.createdAt).format('YYYY-MM-DD') }                                                  
                                                </td>
                                                <td
                                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                                >                                               
                                                      
                                                      
                                                      <button onClick={() => {
                                                    setWorkerproof(worker)
                                                    setShowImg(true)
                                                    }}  className='bg-green-400 h-10 w-24 rounded-md hover:bg-slate-300 capitalize'> see proof </button>

                                                       
                                                </td>
                                            </tr>
                                      
                                    </tbody>
                                    ))}
                                </table>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {showImg ? <div className='pt-16'>
                <WorkerDetails setShowImg={setShowImg} workerproof={workerproof}/>
            </div>:null}
           
    </div>
  )
}

export default WorkersControl
