import './Profile.css'
import React, { useState} from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom"


function SignUpForm() {
  const navigate = useNavigate();
  const [loginData,setLoginData] = useState({
    username:"",
    password:"",
    email:"",
    role:"",
    company_name:"none",
    admin_id:1
  })
  function handleChange(e){
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
        }
      )
    }

  function handleSubmit(e){
    e.preventDefault()

    fetch("https://riziki.onrender.com/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    })
    .then(resp=>{
      if(resp.ok){
        setLoginData({
          username:"",
          password:"",
          email:"",
          role:"",
          company_name:"none",
          admin_id:1
        })
        return navigate("/login")
      }
      else {
        console.log("errors")
      }
    })
    .then(data=>{
      // setUser(data)
      // console.log(user)
    }
    );
    
  }

  return(
    <div className="loginContainer">
      <div className="log-form-container">
          <h2>Sign Up</h2>

      <form className="login-form" onSubmit={handleSubmit}>

      <label htmlFor="username">username</label>
        <input
        id="username"
        name="username" 
        type= "text" 
        value={loginData.username}
        onChange={handleChange}
        placeholder="your username"
        required = 'required'
        />

        <label htmlFor="email">email</label>
        <input
        id="email"
        name="email" 
        type= "email" 
        value={loginData.email}
        onChange={handleChange}
        placeholder="your email"
        required = 'required'
        />

      <label htmlFor="password">password</label>
        <input
        id="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        type="password"
        placeholder="Enter password"
        required = 'required'
        />

        <label htmlFor="email">role</label>
        <select
        id="userRole"
        name="role" 
        required = 'required'
        value={loginData.role}
        onChange={handleChange}
        >
          <option value="user">Freelancer</option>
          {/* <option value="employer">Client</option> */}
        </select>

      {/* {errors&& <ErrorDiv />} */}

      <button type="submit">Sign Up</button>

      </form>
      <Link to="/login" className="link-btn" >Already have an account? Sign In</Link>
  </div>
    </div>
  )
  }
export default SignUpForm