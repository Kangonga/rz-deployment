import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../App"
import Logo from "../../assets/sitelogo.jpg"
import EmployerNavBar from "./EmployerNavBar"

export default function EmployerProfile(){
    const {user,setUser} = useContext(UserContext)
    return(
        <>
        {!user.username?<Navigate to="/login" />:<>
        <EmployerNavBar />
        <div id="userProfileContainer">
        <div id="userProfile">
                <h1>My Profile</h1>
                <figure id="userImage">
                    <img  src={Logo}alt="Profile icon" />
                </figure>
                <form id="userProfileForm">      
                    <div className="profileInput">
                        <label htmlFor="company">Name:</label>
                        <input type="text" value={user.username} name="username"/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Jobs Posted:</label>
                        <input type="text" value={user.jobs.length} required name="jobs_posted"/>
                    </div>

                    {/* <div className="profileInput">
                        <label htmlFor="jobs_posted">Active Jobs</label>
                        <input type="text" required name="matched_jobs"/>
                    </div> */}
                    
                    <div className="profileInput">
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={user.email}name="email"/>
                    </div>
    
                    <div className="profileInput"> 
                        <label htmlFor="">Password:</label>
                        <input type="text" value={"**********"}name="password"/>
                    </div>
                    <div className="buttonContainer">
                        <button>Edit</button> 
                        <button>Save</button> 
                    </div>
                               
                </form>
            </div>
        </div>
        </>}         
        </>
    )
    }