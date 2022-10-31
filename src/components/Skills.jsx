/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full  bg-black text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-800 '>Skills</p>
                <p className='py-4'>// These are some of the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-3 text-center py-3'>
                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="AWS icon"/>
                    <p className='my-4'>AWS</p>
                </div>

                <div className='shadow-mid shadow-white hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon"/>
                    <p className='my-4'>GitHub</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills