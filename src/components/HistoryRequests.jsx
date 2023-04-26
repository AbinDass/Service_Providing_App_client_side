import React from "react";

const HistoryRequests = ({ main ,setShowRequestHistory}) => {
    
    return (
        <div className="h-full flex flex-col justify-center items-center">
            {console.log(main,'main')}

            <div className="m-auto inset-0 pt-20">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Profile picture</th>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">role</th>
                            <th class="px-4 py-2">phone</th>
                            <th class="px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    {
                        main.map((item)=>(
                    <tbody>
                        {item.requestStatus ? <tr>
                            <td class="border px-4 py-2"><img className="rounded-full w-16 h-16" src={item?.requstedUserId?.profilepicture} alt="profile" /></td>
                            <td class="border px-4 py-2">{item?.requstedUserId?.firstname} {item?.requstedUserId?.secondname}</td>
                            <td class="border px-4 py-2">{item?.requstedUserId?.role}</td>
                            <td class="border px-4 py-2">{item?.requstedUserId?.phone}</td>
                            <td class="border px-4 py-2">{item?.requstedUserId?.email}</td>
                        </tr>:null}
                      
                    </tbody>
                        ))
                    }
                </table>

                <div onClick={()=>setShowRequestHistory(false)} className="text-end pt-5 text-lg text-red-600 cursor-pointer">see less</div>
            </div>
            
        </div>
    );
};

export default HistoryRequests;
