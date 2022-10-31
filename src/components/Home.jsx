import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w- full h-screen bg-black'>

       {/* Container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-green-800'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>Daniel Masarsky</h1>
          <h2 className= 'text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Front-End Focused Developer.</h2>
          <p className='text-gray-400 py-4 max-w-[700px]'>I'm a front-end focused developer looking to specialize in building and desigining exceptional digital experiences. Currently, I'm focused on building responsive web applications.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-800 hover:border-green-800'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-2' /> 
            </span>
           </button>
          </div>
       </div>

    </div>
  )
}

export default Home