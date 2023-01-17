import { useContext, useState } from "react"
import { Link,Navigate } from "react-router-dom"
import { UserContext } from "../../App"
import logo from "../../assets/sitelogo.jpg"

export default function EmployerNavBar(){
    const {user,setUser} = useContext(UserContext)
    function logOut(){
        setUser({})
    }
    return(
        <>
        {!user.username?<Navigate to="/login" />:null}
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/userlist">Find Talent</Link>
            <Link to="/jobform">Post a Job</Link>
            <Link to="/employerJobs">Posted Jobs</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/matchedjobs">My jobs</Link>
            <Link to="/login" onClick={logOut} id="login">{user.id?"Log Out":"Log In"}</Link>
            </nav>
            </header>
        </>
    )
}