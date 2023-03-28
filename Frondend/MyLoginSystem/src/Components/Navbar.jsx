import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const ifUser = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }
    return (
        <div className='NavBar'>
            <h1>My System</h1>

            {
            ifUser? <div className="Actions">
            <button id='loginBtn' onClick={handleLogout}>
                <Link to='/'>Logout</Link>
            </button>
            </div>
            :
            <div className="Actions">
                <button id='loginBtn'>
                    <Link to="/login">Login</Link>
                </button>
                <button id='registerBtn'>
                    <Link to="/register">Register</Link>
                </button>
            </div>
        } </div>
    )
}

export default Navbar
