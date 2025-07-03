import React, { useState } from 'react'

const Login = () => {

  return (
    <div>
          <div className='px-5 border-1 w-100 py-5 ' >
        <h1 className=' text-[30px] text-gray-900 font-bold font-serif  mb-10'>Login Form</h1>
        <div>
            <input className='border-2 border-gray-300 hover:border-gray-400 mb-5 rounded-[7px] px-1 py-1' type="text" placeholder='Email Address' />
        </div>
        <div>
            <input className='border-2 border-gray-300 hover:border-gray-400 mb-1 rounded-[7px] px-1 py-1' type="password" placeholder='Password' />
        </div>
        <p className='text-blue-500 font-semibold mb-3'>Forgot password?</p>
        <button className='border-1 mb-5 font-mono px-18 py-1 text-white bg-blue-500 cursor-pointer rounded-[10px] hover:bg-blue-600'>Login</button>
        <p className='font-semibold'>Not a member? <span className='text-blue-400'> Signup now</span></p>
    </div>
    </div>

  )
}

export default Login