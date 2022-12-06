import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b451955c-39f1-4607-9710-dbc419df328f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-800 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or send me an email - masarskydaniel@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="text" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-800 hover:border-green-800 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        </form>
    </div>
  )
}

export default Contact