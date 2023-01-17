import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { UserContext } from "../../App";
import EmployerNavBar from "./EmployerNavBar";
import logo from "../../assets/sitelogo.jpg"
import "../../cards.css"
import { useNavigate } from "react-router-dom";

export default function Applicants(){
    const navigate = useNavigate()
    const {job_id}= useParams()
    const [jobseekers,setJobSeekers] = useState([])
    const [applicants,setJobApplicants] = useState([])
    const [applications,setJobApplications] = useState([])
    const [matchedJobs,setMatchedJobs] = useState([])
    const {user} = useContext(UserContext)
    const [status,setStatus] = useState([])
    useEffect(()=> {
        const fetchdata = async()=>{
            await fetch("https://riziki.onrender.com/job_applications")
                .then(resp=>resp.json())
                .then(data=>setJobApplications(data.filter(app=>app.job_id==job_id)));
            
            await fetch("https://riziki.onrender.com/jobseekers")
                .then(resp=>resp.json())
                .then(data=>{setJobSeekers(data)})
            
            await  fetch("https://riziki.onrender.com/matched_jobs")
                .then(resp=>resp.json())
                .then(data=>setMatchedJobs(data.filter(app=>app.employer_id==user.id)))
        }
        fetchdata()
    },[status])
    
    function handleSubmit(e){
        e.preventDefault();
        const params={
                employer_id:user.id,
                job_id: job_id,
                jobseeker_id:e.target.id.value,
        }
        fetch("https://riziki.onrender.com/matched_jobs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(params)
        })
        setStatus(!status)
        navigate("/matchedjobs")
    }
    
    return(
        <>
            <div>
            <EmployerNavBar />
            <section id="cardContainer">
                {jobseekers?.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))).length>0?
                jobseekers?.filter(user=>(Array.from(applications.map(app=>app.jobseeker_id)).includes(user.id))).map((jobseeker,index)=>{
                    return <UserCard user={jobseeker}key={index} handleSubmit={handleSubmit} matched={matchedJobs}/>}):<NoApplicants />
                }
            </section>
        </div>
        </>
    )
}


function NoApplicants(){
    return (<>
        <div className="container" id="landingPageContainer">
            <main>
                <div id="employerContainer" className="dashboard">
                {/* <figure>
                    <img className="heroImage" src={cta} alt="" />
                </figure> */}
                <section className="employerIntro">
                    <h1>
                        There are currently no applicants for this job.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="/jobform">
                        Get Started
                    </Link>
                </section>
            </div>
            </main>  
        </div>
    </>)
}



function UserCard({user,handleSubmit,matched}){
  
    return(
        <>
         <form className="applicantcard" onSubmit={handleSubmit}>
                    <figure id="applicantFigure">
                        <img src={logo} alt="personIcon" />
                    </figure>
                    {/* <section> */}
                    <input type="hidden" name="id"value={`${user.id}`}/>
                        <input value={`username: ${user.username}`}/>
                        <input value={`skills: ${user.skills}`}/>
                        <input value={`job rating: ${user.rating}/5`}/>
                        <input value={`Jobs done: ${user.employers.length}`}/>
                        {console.log(matched)}
                        <button id="applicantButton">{"Hire"}</button>
                    {/* </section> */}
            </form>
        </>
    )
}