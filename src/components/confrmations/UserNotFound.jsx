import React from 'react'

const UserNotFound = ({setNotfound}) => {
  return (
    <div>
      <div className='fixed z-50 flex justify-center items-center top-0 bottom-0 bg-black rounded z-5 0 right-0 left-0 opacity-80 '> 
       <div className='bg-white flex justify-center items-center flex-col w-[300px] md:w-[500px] p-8'>
            <div className='w-full flex justify-center text-xl text-red-600'>User Not Found !</div>
            <div onClick={()=>setNotfound(false)} className='flex gap-8 pt-8 cursor-pointer'>
                OK
            </div>
       </div>
    </div> 
    </div>
  )
}

export default UserNotFound
