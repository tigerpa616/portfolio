/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import SW_Translator from '../assets/star-wars-gungan-translator.png'
import Stonks_Go_Brrr from '../assets/stonks-go-brrr.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-green-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-black border-black">Work</p>
                <p className="py-6">// Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 '>
                <div style={{backgroundImage: `url(${Stonks_Go_Brrr})`}}
                 className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Cloud Stored Stock Market Predictor
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/RebelliousPlum/CSC521Capstone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg'>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SW_Translator})`}}
                 className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Star Wars Gungan Species Translator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/tigerpa616/starWarsTranslator">
                                <button className='text-center rounded-lg px-4 py-3 m bg-black text-white font-bold text-lg'>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work