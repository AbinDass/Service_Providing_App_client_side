import React from 'react'
import moment from 'moment';

const HistoryAppoinments = ({setShowicomingAppointments, myAppointments}) => {
  return (
    <div className='pt-10 '>
      <div className='flex'>
      <table class="table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Profile picture</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">role</th>
                            <th class="px-4 py-2">phone</th>
                            <th class="px-4 py-2">Email</th>
                            <th class="px-4 py-2">created date</th>
                            <th class="px-4 py-2">requested date</th>
                            <th class="px-4 py-2">status</th>
                        </tr>
                    </thead>
                    {
                        myAppointments.map((item)=>(
                            
                    <tbody>
                         <tr>
                            <td class="border px-4 py-2"><img className="rounded-full w-16 h-16" src={item?.user?.profilepicture} alt="profile" /></td>
                            <td class="border px-4 py-2">{item?.user?.firstname} {item?.requstedUserId?.secondname}</td>
                            <td class="border px-4 py-2">{item?.user?.role}</td>
                            <td class="border px-4 py-2">{item?.user?.phone}</td>
                            <td class="border px-4 py-2">{item?.user?.email}</td>
                            <td class="border px-4 py-2">{moment(item.createdAt).format('YYYY-MM-DD') }</td>
                            <td class="border px-4 py-2">{item.date}</td>
                            <td class="border px-4 py-2">{item.status}</td>
                            
                        </tr>
                      
                    </tbody>
                        ))
                    }
                </table>
      </div>
      <div>
        <h1 onClick={() => setShowicomingAppointments(false)} className="capitalize text-xl pt-5 text-red-700 cursor-pointer text-end" >see less</h1>
      </div>
    </div>
  )
}

export default HistoryAppoinments
