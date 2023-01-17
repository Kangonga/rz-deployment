import React, {useState, useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import '../userComponents/Login.css';
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";


export default function AdminLogin () {

  const {user} = useContext(UserContext)
    return (
        <>
        {user?.username?<Navigate to={"/admin"} />:null}
        <LoginForm />
        {/* <Test /> */}

         </>
      )

}


function LoginForm() {
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext)

  const [errors,setErrors] = useState()
  const [loginData,setLoginData] = useState({
    name:"",
    password:"",
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

    fetch("https://riziki.onrender.com/adminLogin", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    })
    .then(resp=>{
      if(resp.ok){
        setErrors(false)
        // console.log(resp.json())
        return resp.json()
      }
      else {
        setErrors(true)
        setUser({})
        console.log(resp.json())
      }
    })
    .then(data=>{
      setUser(data)
      return navigate("/admin")
      // console.log(user)
    }
      )
  }

  return(
   
    <div className="loginContainer">
      <div className="log-form-container">
          <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>

      <label htmlFor="username">username</label>
        <input
        id="username"
        name="name" 
        type= "text" 
        value={loginData.username}
        onChange={handleChange}
        placeholder="your username"
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

        {/* <label htmlFor="email">role</label>
        <select
        id="userRole"
        name="role" 
        required = 'required'
        value={loginData.role}
        onChange={handleChange}
        >
          <option value="user">Freelancer</option>
          <option value="employer">Client</option>
        </select> */}

      {errors&& <ErrorDiv />}

      <button type="submit">Log In</button>

  
      </form>
      <Link to="/signup" className="link-btn" >Don't have an account? Sign Up</Link>
  </div>
    </div>
    
    )
}

function ErrorDiv(){
  return(
    <div id="errorDiv">
      Incorrect username or password
    </div>
  )
}