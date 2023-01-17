import '../userComponents/Profile.css'
import React, { useState} from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom"


function AdminSignUpForm() {
  const navigate = useNavigate();
  const [loginData,setLoginData] = useState({
    name:"",
    password:"",
    email:"",
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

    fetch("https://riziki.onrender.com/admin/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    })
    .then(resp=>{
      if(resp.ok){
        setLoginData({
          name:"",
          password:"",
          email:"",
        })
        return navigate("/adminLogin")
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
        name="name" 
        type= "text" 
        value={loginData.name}
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

      <button type="submit">Sign Up</button>

      </form>
      <Link to="/adminLogin" className="link-btn" >Already have an account? Sign In</Link>
  </div>
    </div>
  )
  }
export default AdminSignUpForm