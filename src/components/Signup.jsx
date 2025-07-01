import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Signup Form</h1>
      <div>
        <input type="text" placeholder='Email Address' />
      </div>
        <div>
        <input type="text" placeholder='Password' />
      </div>
        <div>
        <input type="text" placeholder='Confirm password' />
      </div>
      <button>Signup</button>
      <p>Already have an account? Login</p>
    </div>
  )
}

export default Signup