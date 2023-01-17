import EmployerNavBar from "./EmployerNavBar";
import "../../jobform.css"
import { useContext, useState } from "react";
import userEvent from "@testing-library/user-event";
import { UserContext } from "../../App";
import { Navigate } from "react-router-dom";

export default function AddJob(){
    const {user} = useContext(UserContext)
    const [jobData,setJobData] = useState({
        category:"I.T",
        job_title:"",
        job_description:"",
        salary:"",
        number_of_applicants:0,
    })
    function handleChange(e){
        setJobData({
            ...jobData,
            [e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("https://riziki.onrender.com/jobs",{
            method:"POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify({...jobData,
            employer_id:user.id
            })
        })
        console.log(jobData)
        setJobData({
            category:"I.T",
            job_title:"",
            job_description:"",
            salary:"",
            number_of_applicants:0,
        })
        // e.target.reset()
    }
    function handleSelectChange(e){
        console.log(e.target.value)
        setJobData({
            ...jobData,
            category: e.target.value
        })
    }

return (
    <div id="jobFormPage">
        {!user.username?<Navigate to="/login" />:<>
        <EmployerNavBar />
        <section id="formContainer">
            <h1>Add a job</h1>
            <p>You know what you are looking for, We help you find them.</p>
            <p>Post your open positions and hire the best talent.</p>
            
            <form id="addJobForm" onSubmit={handleSubmit}>

            <div className="formLabels">
                <label htmlFor="category">Job Category:*</label>
                <select value={jobData.category} onChange={handleChange} required name="category">
                    <option value="I.T">I.T and Networking</option>
                    <option value="writing">Writing and Translation</option>
                    <option value="engineering">Engineering and Architecture</option>
                    <option value="business">Sales and Marketing</option>
                    <option value="software">Software Development</option>
                    <option value="legal">Legal</option>
                </select>
            </div>


            <div className="formLabels">
                <label htmlFor="company">Job Title:</label>
                <input type="text"value={jobData.job_title} onChange={handleChange} name="job_title"/>
            </div>

            <div className="formLabels">
                <label htmlFor="company">Job Description:</label>
            <textarea id="jobDesc" type="text" value={jobData.job_description} onChange={handleChange} name="job_description"></textarea>
            </div>

            <div className="formLabels"> 
                <label htmlFor="company">Compensation:</label>
                <input type="text" value={jobData.salary} onChange={handleChange} name="salary"/>
            </div>

            {/* <div className="formLabels">
                <label htmlFor="company">Status:</label>
                <input type="text" name="status" />
            </div> */}

            <div className="formLabels">
                <label htmlFor="applicants">No. Of Applicants:</label>
                <input type="text" value={"0"} readOnly name="number_of_applicants" onChange={handleChange}/>
            </div>

            <button>Submit</button>            
            
        </form>
        </section>
        
        </>
        
        
        }
        
        
    </div>
)
}