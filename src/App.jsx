import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes } from 'react-router'



const App = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>    
    </>
  )
}

export default App