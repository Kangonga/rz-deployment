import React, {useState, useEffect, useContext} from 'react'
import UserNavBar from './userComponents/UserNavBar'
import { UserContext } from '../App'
import Logo from "../assets/sitelogo.jpg"

export default function Jobs() {
  const [status, setStatus] = useState(true)
  const {user} = useContext(UserContext)
  const [jobs, setJobs] = useState([])
  const [applied,setApplied] = useState([])
  const [job, setJob] = useState({
    jobseeker_id: "",
    job_id: "",
    employer_id: ""

  })
  useEffect(() => {
    const fetchdata = async () => {

      await fetch("https://riziki.onrender.com/job_applications")
      .then(response => response.json())
      .then(data => setApplied(data.filter(job=>job?.jobseeker_id==user?.id).map(job=>job.job_id)))

      await fetch("https://riziki.onrender.com/jobs")
        .then(response => response.json())
        .then(data => setJobs(data))

    }
    fetchdata()
    
  }, [status])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://riziki.onrender.com/job_applications`, {
            method: "POST",
            headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
              body: JSON.stringify({
                jobseeker_id: user?.id,
                job_id: e.target.id.value,
                employer_id: e.target.employer_Id.value
              })
          })
          .then(response => response.json())
          .then(() => {setStatus(!status)})   
  }
  

  return (
        <div className='userlist'>   
          <UserNavBar />  
          {console.log("applied",applied)}            
            <section   id="cardContainer">           
            {jobs?.filter(job=>!applied.includes(job.id)).length<1?<NoJobs user={user} applied={applied}/>:
            jobs?.filter(job=>!applied.includes(job.id)).map((job,index) => {
                return(
                  <JobCard job={job} key={index}  handleSubmit={handleSubmit}/>
                )
              })}
              </section>      
        </div>
  )
 }

function NoJobs ({user,applied}){
  return (
    <>
    <main id='noJobsContainer'>
      <UserCard user={user} applied={applied}/>
      <section id='noJobsHero'>There are currently no jobs available. Please check back later!</section>
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
          <input type="text" value={`Applied Jobs: ${applied?.length}`} name="postedJobs"/>
      </div>
  )
}

function JobCard ({job, handleSubmit}) {
  return(
    <form  onSubmit={handleSubmit} className="userJobsCard">
      <input type="hidden" name='id' value={job?.id} />
      <input type="hidden" name='employer_Id' value={job?.employer?.id} />
      
      <h2>Job Title: {job?.job_title}</h2>

      <h3>Job Category: {job?.category}</h3>

      <textarea
      value={`Responsibilities: ${job?.responsibilities}`}
      />
     
      <input
      value={`Salary: ${job?.salary}`}
      />
 
        <textarea
      value={`Job Description: ${job?.job_description}`}
       />

      <button>Apply</button>
     </form>
  )
}
