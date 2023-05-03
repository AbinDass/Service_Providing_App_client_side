import React from 'react'

const AboutHeroContent = () => {
  return (
    <div>
        <div className='flex  p-5 pt-24 gap-2'>
            <div>
                <img src="https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="/" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
            
        </div>
        <div className='flex flex-col justify-center items-center w-full '>
            <h1 className='text-center p-4 font-bold 2xl md:text-4xl'>OUR STORY</h1>
            <div className='flex flex-wrap p-4 w-full'>
                <div className='p-10'>
                    <img className='w-full md:w-[500px] ' src="https://plus.unsplash.com/premium_photo-1663013671816-5866890c7fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className='p-4 flex flex-col justify-center'>
                    <h1>WE ARE PROVIDING YOUR COMPLETE DAILY LIFE SOLUTION</h1>
                       <p className='p-4 capitalize text-md'>
                            this application devolped for find easily what kind of services have near you .
                       </p>
                       <p className='p-4 capitalize text-md'>
                            it may help to new one in any city also meke connections both .
                       </p>
                </div>
            </div>
            <div className='flex flex-col flex-wrap md:w-[900px] justify-center items-center '>
                <h1 className='text-center p-4 font-bold 2xl md:text-4xl'>WHAT WE PROVIDE</h1>
                <p className='p-10'>
                    1. Service description: Clearly describe the service that you are providing. Explain what problem your service solves, what benefits it offers, and how it works.
                </p>
                <p className='p-10'>
                    2. User profiles: Create user profiles that capture relevant information about your users. This information can include their name, age, location, preferences, and any other information that is relevant to the service you are providing.
                </p>
                <p className='p-10'>
                    3. Service listing: Create a comprehensive listing of all the services that your app offers. Include details such as pricing, availability, and any other relevant information.
                </p>
                <p className='p-10'>
                    4. Payment processing: Integrate a payment processing system into your app to make it easy for users to pay for the services they use.
                </p>
                <p className='p-10'>
                    5. Reviews and ratings: Allow users to leave reviews and ratings of the services they use. This can help build trust and credibility with potential new users.
                </p>
                </div>
        </div>
        
    </div>
  )
}

export default AboutHeroContent
