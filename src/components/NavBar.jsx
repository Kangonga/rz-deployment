import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
import logo from "../assets/sitelogo.jpg"


export default function NavBar(){
    const {user,setUser} = useContext(UserContext)
    function logOut(){
        setUser({})
    }
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/employers">Find Talent</Link>
            <Link to="/login" id="login">{user.id?"Log Out":"Log In"}</Link>
            </nav>
            </header>
        </>
    )
}