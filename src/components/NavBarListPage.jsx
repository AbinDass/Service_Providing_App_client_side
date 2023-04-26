import React from 'react'
import  {BiLayerPlus} from 'react-icons/bi'
import {FaBlackTie} from 'react-icons/fa'
import {IoGameControllerOutline} from 'react-icons/io5'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBarListPage = () => {
  const isAuth = Boolean(useSelector((state) => state.user.token));

  return (
    <div>
         <nav className="bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 text-white md:text-2xl">

        <Link to='/nearbyservices'><div className="flex flex-shrink-0 hover:text-blue-300 cursor-pointer">
          <FaBlackTie className='pr-2' />
                    <h1>Near By Services</h1>
          </div></Link>
          <Link to='/post'><div className='flex flex-shrink-0 hover:text-blue-300 cursor-pointer'>
            <BiLayerPlus className='pr-2' />
                    <h1>See posts</h1>
            </div></Link>

            {isAuth?<Link to='/controlpanel'><div className='flex flex-shrink-0 hover:text-blue-300 cursor-pointer'>
            <IoGameControllerOutline className='pr-2' />
                    <h1>Control Panel</h1>
            </div></Link>:null}

            {isAuth ? <Link to='/profile/myprofile'>  <div className='flex flex-shrink-0 hover:text-blue-300 cursor-pointer'>
                <BsFillPersonLinesFill className='pr-2' />
                        <h1>Profile</h1>
                </div></Link>:null}
        
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBarListPage
