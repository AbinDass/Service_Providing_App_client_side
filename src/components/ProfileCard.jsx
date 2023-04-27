import React from 'react'

const ProfileCard = ({profile, setShowmodal, profileid }) => {
  return (
    <div>
<div className="  max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className=" ">
                    {console.log(profile?.profilepicture,'[][][]][]]]')}
                    <img src={profile?.profilepicture === undefined || profile?.profilepicture.length === 0 ? "https://tse2.mm.bing.net/th?id=OIP.PNGQVIsPFaM41E60Zd0EdgHaHx&pid=Api&P=0" : profile?.profilepicture} alt='profilepicture' className='h-28 w-28 rounded-full mt-5'/>
                </div>
            </div>
            <div>
                <button className={profileid !== "myprofile"? 'hidden':'text-white w-28 h-8 bg-black mt-4 hover:bg-slate-400 rounded hover:text-black'} onClick={() => setShowmodal(true)}>edit profile</button>
            </div>
            <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.firstname}</span>
                    </div>
                    
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.secondname}</span>
                    </div>

                    
                </div>
            </div>
        </div>
        <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1"> {profile?.email }</h3>
            
        </div>
        <div className='p-3 text-center mt2'>
                <h3 className='text-xl'>Now You are {profile?.role}</h3>
        </div>
        <div className='p-3 text-center mt2'>
                <h3 className='text-xl'>your location : {profile?.location}</h3>
        </div>
        <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4 md:w-[500px]">{profile?.distric}</p>
                <p className="font-light leading-relaxed text-slate-600 mb-4 md:w-[500px]">{profile?.state}</p>
                    <p className="font-light leading-relaxed text-slate-600 mb-4 md:w-[500px]">{profile?.decleration}</p>

                </div>
            </div>
        </div>
    </div>
</div>



</div>
  )
}

export default ProfileCard
