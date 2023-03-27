import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

import '../App.css'
const Register = () => {
    const navigate = useNavigate();
    const [username, setuserName] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async() => {
        console.log(username + password);
     
            let item = { username, password };
      
            let countuser = await axios.post('http://localhost:3000/count', {
                username
            });
            if (countuser.data.count >= 1) {
                alert('User Already Exist')
    
        }
            else {
                let result=await axios.post('http://localhost:3000/register', {
                    username,password
                })

                if (result) {
                    alert("User Added Successfully")
                    navigate('/login')
                }
        }
        
        
        
  
            
       

         
      

    }
  return (
      <div className='loginContainer'>
             
          <div className="box">
          <h1>Register</h1>
          <div className="inputField">
                  <label htmlFor="username">Username</label>
                  <input onChange={(e)=>setuserName(e.target.value)} type="text" name="username" placeholder='Enter Username' />
              </div>
              <div className="inputField">
                  <label htmlFor="password">Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder='Enter Password' />
              </div>
              <button id="submitbtn" onClick={handleLogin} type='submit'>Register</button>
          </div>
              
 
    </div>
  )
}

export default Register
