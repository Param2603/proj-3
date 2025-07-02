import React, { useState } from 'react'

const Login = () => {
  // const[data,setData] = useState
  return (
    <div className='' >
        <h1 className='text-[30px] text-blue-700 text-center'>Login Form</h1>
        <div>
            <input className='border-2 ' type="text" placeholder='Email Address' />
        </div>
        <div>
            <input className='border-2' type="password" placeholder='Password' />
        </div>
        <p>Forgot password?</p>
        <button>Login</button>
        <p>Not a member? Signup</p>
    </div>
  )
}

export default Login