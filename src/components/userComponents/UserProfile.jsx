import UserNavBar from "./UserNavBar"
import Logo from "../../assets/sitelogo.jpg"
import { useContext, useEffect,useState } from "react"
import { UserContext } from "../../App"


export default function UserProfile(){
    const {user,setUser} = useContext(UserContext)
    const [applied,setApplied] = useState([])
    const [matched,setMatched] = useState([])
    const [status,setStatus] = useState(true)
    useEffect(()=>{
        const fetchData  = async()=>{

            await  fetch("https://riziki.onrender.com/job_applications")
            .then(resp=>resp.json())
            .then(data=>setApplied(data.filter(job=>job.jobseeker_id==user?.id)))

            await fetch("https://riziki.onrender.com/matched_jobs")
            .then(resp=>resp.json())
            .then(data=>setMatched(data.filter(job=>job.jobseeker_id==user?.id)))
        }
        fetchData()
       
    },[])
    return(
        <>
        <UserNavBar />
        {/* {console.log("applied",applied)}
        {console.log("matched",matched)} */}
        {user?.id&& <UserProfileContainer user={user} applied={applied} matched={matched}/>}
        </>
        
    )
}

function UserProfileContainer({user,applied,matched}){
    return(
        <>
               <div id="userProfileContainer">
              <div id="userProfile">
              <h1> {user.username}'s Profile</h1>
                <figure id="userImage">
                    <img  src={Logo}alt="Profile icon" />
                </figure>
                <form id="userProfileForm">     
                    <div className="profileInput">
                        <label htmlFor="company">Name:</label>
                        <input type="text" name="username" value={user?.username}/>
                    </div>
    
                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Job Bids Sent Out:</label>
                        <input type="text" value={applied?.length} required name="applied_jobs"/>
                    </div>

                    <div className="profileInput">
                        <label htmlFor="jobs_posted">Accepted Applications:</label>
                        <input type="text" value={matched?.length} required name="matched_jobs"/>
                    </div>

                    {/* <div className="profileInput">
                        <label htmlFor="jobs_posted">Active Jobs</label>
                        <input type="text" value={0} required name="matched_jobs"/>
                    </div> */}
    
                    <div className="profileInput">
                        <label htmlFor="email">Email:</label>
                        <input type="text" value={user?.email} name="email"/>
                    </div>
    
                    <div className="profileInput"> 
                        <label htmlFor="">Password:</label>
                        <input type="password" value={"********"} name="password"/>
                    </div>
                    <div className="buttonContainer">
                        <button>Edit</button> 
                        <button>Save</button> 
                    </div>
                               
                </form>
            </div>
        </div>
        </>
    )
}