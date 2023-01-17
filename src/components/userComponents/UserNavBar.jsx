import logo from "../../assets/sitelogo.jpg"
import { Link,Navigate } from "react-router-dom"
import "../../userprofile.css"
import { useContext } from "react"
import { UserContext } from "../../App"

export default function UserNavBar(){
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
            {user.username&& <span>Hello {user?.username}</span>}
            <Link to="/userprofile">My Profile</Link>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/userjobs">My Jobs</Link>
            <Link to="/userAppliedJobs">Applied Jobs</Link>
            <Link onClick={logOut} to="/login" id="login">{user.id?"Log out":"Log in"}</Link>
            </nav>
            </header>
        </>
    )
}