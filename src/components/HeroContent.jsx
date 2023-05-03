import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
const HeroContent = () => {

  return ( 
    <div  className='bg-black text-white w-full' >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <p className='text-[#00df9a] md:text-4xl text-2xl font-bold p-2' >COMPLETE DAILY LIFE SOLUTIONS</p>
          <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold py-6 ' >FIND THE TALENT</h1>
          
            <div className='flex justify-center items-center' >
                <p className='md:text-2xl sm:text-4xl text-xl font-medium py-4'>We have the best</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['MECHANICS','CLEANING STAFFS','ACCOUNTERS','DESIGNERS','FREELANCERS']} typeSpeed={70} backSpeed={70}/>
            </div>

         <Link to="/nearbyservices" >
          <button className='bg-[#00df9a] h-10 text-center w-[200px] mx-auto my-10 rounded-md'>Get Start</button>
          </Link> 
      </div>
    </div>
  )
}

export default HeroContent
