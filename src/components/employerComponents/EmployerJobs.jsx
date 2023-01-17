import { useContext, useEffect, useState } from "react"
import EmployerNavBar from "./EmployerNavBar"
import cta from "../../assets/cta.jpg"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../../App"

export default function EmployerJobs(){
    const [jobs,setJobs] = useState([])
    const {user} = useContext(UserContext)
    useEffect(()=>{
        fetch(`https://riziki.onrender.com/jobs`)
        .then(resp=>resp.json())
        .then(data=>setJobs(data.filter(job=>job.employer.id==user.id)));
    },[])
    return(
    <>
       {!user.username? <Navigate to="/login"/>:

        <div id="employerJobsPage">
            <EmployerNavBar />
            <section id="cardContainer">
                {jobs?  <JobList jobs={jobs}/>:<NoJobs />}
            </section>
        </div>}
    </>
     
        
    )
}

function JobList({jobs}){
    return(
        <>
            {jobs?.map((job,index)=>{
               return <JobCard key={index} job={job} />
            })}
        </>
    )
}

function JobCard({job}){
    const {user} = useContext(UserContext)
    return(
    <>
    <div className="card"id="employerJobs">
            <section className="jobDetails">
            <h1>{job.job_title}</h1>
            <h2>{job.category}</h2>
                <p>Status: active</p>
                <p>Main Skill: Ruby on Rails</p>
                {/* <p>Experience Level: Expert/Intermediate/Junior</p> */}
                <p>Employer: {job.employer.username}</p>                
                <p>Job Description: {job.job_description}</p>
                {/* <p>Number of applicants: {job.number_of_applicants}</p> */}
                <Link to={`/applicants/${job.id}`} id="viewApplicantsButton">View Applications</Link>
                </section>
    </div>
    </>
    )
}

function NoJobs(){
    return (
        <div className="container" id="landingPageContainer">
            <main>
                <div id="employerContainer" className="dashboard">
                <figure>
                    <img className="heroImage" src={cta} alt="" />
                </figure>
                <section className="employerIntro">
                    <h1>
                        You currently have no active jobs.
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
    )
}