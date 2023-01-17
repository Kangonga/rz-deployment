import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../App'
import UserNavBar from './UserNavBar'

 export default function AppliedJobs() {
  const {user} = useContext(UserContext)
  const [appliedJobs, setappliedJobs] = useState([])
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    fetch("https://riziki.onrender.com/job_applications")
    .then(response => response.json())
    .then(data=>setappliedJobs(data.filter(
      job=>job.jobseeker_id==user?.id)))
    // .then(data => {
    //       setappliedJobs(data.filter(job=>job.jobseeker_id == user?.id).filter((job,pos)=>{
    //         return data.indexOf(job)==pos
    //       }))
    // }
    // )
  }, [])

  return (
    <div className='userlist'>
       <UserNavBar/>
        {console.log(jobs)} 
        <section id='cardContainer' >
           {
            appliedJobs?.map((appliedJob, index) => {
              return(
                <UserAppliedJobs appliedJob={appliedJob} key={index}/>
              )
            })
           }
            </section>
              
    </div>
  )
}



function UserAppliedJobs({appliedJob}) {
  return(
    <div className='userJobsCard'>
      <h2>Job Title: {appliedJob.job.job_title}</h2>
      <h3>Category: {appliedJob.job.category}</h3>
            {/* <input>Status: Complete/applied/active</p> */}
            <textarea value={`Job Description: ${appliedJob.job.job_description}`}/>
            {/* <input value={`Responsibilities: ${appliedJob.job.responsibilities}`}/> */}
            <input value={`Salary: ${appliedJob.job.salary}`}/>
            <input value={`Employer: ${appliedJob.employer.username}`}/>
    </div>
  )
}
//export default UserJobs