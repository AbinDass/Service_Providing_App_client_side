import React from 'react'
import { deleteMyservice } from '../../API/servicesApi';
import { useSelector } from 'react-redux';

const DeleteService = ({open, setDel}) => {
    const user = useSelector((state) => state.user.data.user);

    const close = () => {
        open(false)
    };

const Delete = async () =>{
    alert(`Are you sure you want to delete`)
    const res = await deleteMyservice(user._id)
            alert(res)
            if(res){
                open(false)
            }
}
  return (
    <div onClick={close} className='fixed z-50 flex justify-center items-center top-0 bottom-0 bg-black rounded z-5 0 right-0 left-0 opacity-80 '> 
       <div className='bg-white flex justify-center items-center flex-col w-[300px] md:w-[500px] p-8'>
            <div className='w-full flex justify-center text-xl text-red-600'>Are you sure you want to delete SERVICE ?</div>
            <div className='flex gap-8 pt-8'>
                <button onClick={close} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2  border border-green-500 hover:border-transparent w-24  text-center rounded'>cancel</button>
                <button onClick={Delete} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2  border border-red-500 hover:border-transparent w-24  text-center rounded'>delete</button>
            </div>
       </div>
    </div> 
  )
}

export default DeleteService
