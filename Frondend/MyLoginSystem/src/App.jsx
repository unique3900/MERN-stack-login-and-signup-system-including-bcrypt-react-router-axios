import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { Routes, Route } from "react-router-dom"
import Dashboard from './Components/Dashboard'
import PrivateComponent from './Components/PrivateComponent'

const App = () => {
  return (
    <div className='Container'>
      <Navbar />
      
      <Routes>
        <Route element={<PrivateComponent/>}/>
        <Route path="/" element={ <Login/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  )
}

export default App
