import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-green-800 text-black '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Dan, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a recent college graduate looking to grow my career and expand my horizons. 
                            I've worked on a number of different projects both my own and open source.
                            I am passionate about building software and aim to improve the lives of those around me.</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default About