/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import  {BiLayerPlus} from 'react-icons/bi'
import {FaBlackTie} from 'react-icons/fa'
import {IoGameControllerOutline} from 'react-icons/io5'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import {Link} from'react-router-dom';
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const isAuth = Boolean(useSelector((state) => state.user.token));

    const loadservicecards = () =>{
    
    }
  return (

// <div className="bg-[#569cd1] left-0 mx-auto flex flex-col rounded-md flex-grow">

//         <Link to='/nearbyservices'><div onClick={loadservicecards} className='flex pt-20 px-10'>
//             <GrServices className='pr-2' size={40}/>
//             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium'> <h3 className='hover:text-[00df9a]'> Near by service  </h3>   </button>
//         </div></Link>
  
//        <Link to='/post'><div className='flex pt-10 px-10'>
//             <BiLayerPlus className='pr-2' size={40}/>
//             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium'> <h3 className='hover:text-[00df9a]'> posts  </h3>   </button>
//         </div></Link> 


//        <Link to='/controlpanel'><div className='flex pt-10 px-10'>
//             <IoGameControllerOutline className='pr-2' size={40}/>
//             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium'> <h3 className='hover:text-[00df9a]'>  control panel  </h3>   </button>
//         </div></Link> 

//         <Link to='/profile'><div className='flex pt-10 pb-20 px-10'>
//             <BsFillPersonLinesFill className='pr-2' size={40}/>
//             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium'> <h3 className='hover:text-[00df9a]'>  profile </h3>   </button>
//         </div></Link>

// </div>

<div className="flex flex-col h-screen ">
{/* Sidebar container */}
<div className={isAuth?"bg-gray-800 text-gray-100 h-[500px] flex-shrink-0":"bg-gray-800 text-gray-100 h-[300px] flex-shrink-0"}>
  <div className="flex items-center justify-center h-16">
    <span className="lg:text-2xl font-semibold">SOCIAL-EXPO</span>
  </div>
  <nav className="flex-grow">
    <ul className="flex flex-col py-4 space-y-16">

      <li className="px-5">
      <Link to='/nearbyservices'><div onClick={loadservicecards} className='flex '>
           <FaBlackTie className='pr-2' size={40}/>
           <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium  hover:bg-slate-400 hover:text-black'> <h3 className='hover:text-[00df9a]'> Near by service  </h3>   </button>
       </div></Link>
      </li>

      <li className="px-5">
      <Link to='/post'><div className='flex '>
        <BiLayerPlus className='pr-2' size={40}/>
        <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium  hover:bg-slate-400 hover:text-black'> <h3 className='hover:text-[00df9a] '> posts  </h3>   </button>
    </div></Link> 
      </li>

      {isAuth?<li className="px-5">
        <Link to='/controlpanel'><div className='flex'>
               <IoGameControllerOutline className='pr-2' size={40}/>
             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium  hover:bg-slate-400 hover:text-black'> <h3 className='hover:text-[00df9a]'>  control panel  </h3>   </button>
         </div></Link> 
      </li>:null}

      {isAuth ?<li className="px-5">
       <Link to='/profile/myprofile'><div className='flex '>
             <BsFillPersonLinesFill className='pr-2' size={40}/>
             <button className='bg-black text-white flex-grow rounded-md cursor-pointer font-medium  hover:bg-slate-400 hover:text-black'> <h3 className='hover:text-[00df9a]'>  profile </h3>   </button>
         </div></Link>
      </li>: null}
    </ul>
  </nav>
</div>
{/* Main content container */}
{/* <div className="flex-1 overflow-y-auto">
  <div className="py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-semibold text-gray-900">Main Content</h1>
    <p className="mt-2 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur 
    </p>
  </div>
</div> */}
</div>
  )
}

export default Sidebar
