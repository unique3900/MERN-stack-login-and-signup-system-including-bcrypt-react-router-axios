import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='Container'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App
