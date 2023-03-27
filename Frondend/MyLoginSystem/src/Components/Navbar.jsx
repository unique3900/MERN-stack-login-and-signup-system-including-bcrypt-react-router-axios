import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='NavBar'>
          <h1>My System</h1>
          
          <div className="Actions">
                <button id='loginBtn'><Link to="/login">Login</Link> </button>
              <button id='registerBtn'> <Link to="/register">Register</Link> </button>
          </div>
    </div>
  )
}

export default Navbar
