import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login Form</h1>
        <div>
            <input type="text" placeholder='Email Address' />
        </div>
        <div>
            <input type="password" placeholder='Password' />
        </div>
        <p>Forgot password?</p>
        <button>Login</button>
        <p>Not a member? Signup</p>
    </div>
  )
}

export default Login