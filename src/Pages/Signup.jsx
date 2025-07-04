import React from 'react'

const Signup = () => {
  return (
    <div className='px-5 w-100% h-[100vh] justify-center items-center flex flex-col align-ce py-5'>
      <h1 className='text-[30px] text-gray-900 font-bold font-serif  mb-10'>Signup Form</h1>
      <div>
        <input className='border-2 border-gray-300 hover:border-gray-400 mb-5 rounded-[7px] px-1 py-1' type="text" placeholder='Email Address' />
      </div>
        <div>
        <input className='border-2 border-gray-300 hover:border-gray-400 mb-5 rounded-[7px] px-1 py-1' type="text" placeholder='Password' />
      </div>
        <div>
        <input className='border-2  border-gray-300 hover:border-gray-400 mb-3 rounded-[7px] px-1 py-1' type="text" placeholder='Confirm password' />
      </div>
      <button className='border-1 mb-5 hover:bg-blue-600 font-mono px-18 py-1 text-white bg-blue-500 cursor-pointer rounded-[10px]'>Signup</button>
      <p className='font-semibold'>Already have an account? <span className='text-white bg-blue-500 hover:bg-blue-600 font-mono cursor-pointer  border-1 px-2 py-1 rounded-[10px]'>Login</span></p>
    </div>
  )
}

export default Signup