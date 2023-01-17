import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'
import Logo from "../../assets/sitelogo.jpg"


 export default function UserJobs() {
  const {user} = useContext(UserContext)
  const [matchedJobs, setMatchedJobs] = useState([])
  const [jobsarr,setjobsarr] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/matched_jobs")
    .then(response => response.json())
    .then(data=>setMatchedJobs(data?.filter(job=>job.jobseeker_id == user?.id)))
    // .then(data => {
    //       setMatchedJobs(data.filter(job=>job.jobseeker_id == user?.id).filter((job,pos)=>{
    //         return data.indexOf(job)==pos
    //       }))
    // }
    // )
  }, [])

  return (
    <div className='userlist'>
       <UserNavBar/>
                 {console.log(jobsarr)}      
        <section id='cardContainer' >
           {
            matchedJobs? <NoJobs/>:matchedJobs.map((matchedJob, index) => {
              return(
                <MatchedJobs matchedJob={matchedJob} key={index}/>
              )
            })
           }
            </section>
              
    </div>
  )
}



function MatchedJobs({matchedJob}) {
  return(
            <div className='userJobsCard'>
                  <h2>Job Title: {matchedJob.job.job_title}</h2>
                  <h3>Category: {matchedJob.job.category}</h3>
                  <textarea value={`Job Description: ${matchedJob.job.job_description}`}/>
                  <input value={`Salary: ${matchedJob.job.salary}`}/>
                  <input value={`Employer: ${matchedJob.employer.username}`}/>
                  <input value="Status: Active"/>
            </div>
  )
}
//export default UserJobs

function NoJobs ({user,applied}){
  return (
    <>
    <main id='noJobsContainer'>
      <UserCard user={user} applied={applied}/>
      <section id='noJobsHero'>You have not been selected for any job yet. Please check back later!</section>
    </main>
    </>
  )
}
function UserCard({user,applied}){
  return(
      <div id="noJobsCard">
          <h1>My Profile</h1>
          <figure >
              <img src={Logo}alt="Profile icon" />
          </figure>
          <input type="text" value={user?.username}/>
          <input type="text" value="Individual" name="company"/>
          <input type="text" value="Nairobi, Kenya" name="location"/>
          {/* <input type="text" value={`Applied Jobs: ${applied?.length}`} name="postedJobs"/> */}
      </div>
  )
}