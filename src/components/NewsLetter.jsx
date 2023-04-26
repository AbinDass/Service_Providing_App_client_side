import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 bg-black text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tricks & tips to optimize your flow ?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
                <buttom className='bg-[#00df9a] w-[200px] rounded-md ml-4 font-medium my-6 mx-auto px-6 py-3 text-black'>Notify Me</buttom>
            </div>
                <p>we care about protection of your data. read our <span className='text-[#00df9a]'>privacy policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
