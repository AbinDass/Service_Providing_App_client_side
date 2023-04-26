import React from 'react'
import AdverticementCard from './AdverticementCard'
import { Link } from 'react-router-dom'

const ProvidingServiceCard = ({allServices}) => {
  return (
    <div
     className="text-white py-2 px-4  text-center flex justify-center pt-16  items-center"
    //   style={{
    //     backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/55119bb3e4b0ff5f4d08ac93/1463665986750-K15DSH14HHEOVM1Q3HA0/ke17ZwdGBToddI8pDm48kBDtqKoop2Y23T7QR2AX44AUqsxRUqqbr1mOJYKfIPR7oI24p9UAmYbMwF9D5BPmKyWyqrK_WSd7lxFf2X5E07VCRW4BPu10St3TBAUQYVKcs_i5_YzEuHstFE7OCUdG4rHqYDcjMO1gZls6QAHx9__3zEgdRtyqXfF96OgsEa9A/career-banner.jpg')",
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     height: '300px',
    //     // opacity:'0.7'
    //   }}
    >

<div >

        <h3 className='text-black text-xl font-medium'>MOST USED SERVICES</h3>
        <div  className='flex  gap-10 h-[270-px] pt-5'>
        {
          allServices.map((service,index) =>(

      <Link key={index} to={"/servicelist/" + service.title}><div >
        

            <AdverticementCard key={index} service={service} />
            
          </div></Link>
          ))
          }

</div>


</div>
    </div>
  )
}

export default ProvidingServiceCard
