import React, {useState, useEffect, useContext} from 'react'
import UserNavBar from './UserNavBar'
import '../../cards.css'
import { UserContext } from '../../App'


export default function JobList() {
  const {user} = useContext(UserContext)
  const [jobs, setJobs] = useState([])
  const [applied,setApplied] = useState([])
  const [job, setJob] = useState({
    jobseeker_id: "",
    job_id: "",
    employer_id: ""

  })
  const [status, setStatus] = useState("not applied")
  useEffect(() => {
    fetch("https://riziki.onrender.com/jobs")
    .then(response => response.json())
    .then(data => {console.log(data)
          setJobs(data)
    }
    )
  }, [])

  function handleClick() {
    


  }

  function handleSubmit(e) {
    e.preventDefault()
    setJob({
    jobseeker_id: user?.id,
    job_id: e.target.id.value,
    employer_id: e.target.employer_Id.value
    })
    console.log(job)
    fetch(`https://riziki.onrender.com/job_applications/`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify(job)
    })
    .then(response => console.log(response.json()))
    .then((status) => {setStatus("applied")})
    // console.log("applied");
  }
  

  return (
        <div className='userlist'>   
          <UserNavBar />              
            <section   id="cardContainer">           
            {jobs?.map((job,index) => {
                return(
                  <JobCard job={job} key={index}  handleSubmit={handleSubmit} handleClick={handleClick}/>
                )
              })}
              </section>      
        </div>
  )
 }


function JobCard ({job, handleClick, handleSubmit}) {
  return(
    <form onSubmit={handleSubmit} className="card">
      <input type="hidden" name='id' value={job.id} />
      <input type="hidden" name='employer_Id' value={job.employer.id} />
      <label htmlFor="job_title">Job Title:</label>   
      <input  value={job?.job_title} />
      <h3>Job Category: {job?.category}</h3>

      <label htmlFor="responsibilities">Responsibilities:</label>
      <input
      value={job?.responsibilities}
      />
     
      <label htmlFor="salary">Salary:</label>
      <input
      value={job?.salary}
      />
        
      <label htmlFor="job-description">Job Description:</label>
        <input
      value={job?.job_description}
       />

      <button onClick={handleClick} className='button'>{}</button>
     </form>
  )
}