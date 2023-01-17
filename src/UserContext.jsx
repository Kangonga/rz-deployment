import { createContext } from "react";

// export const UserContext = createContext(null)





























// import { useEffect, useState } from "react"

// export default function NonAdmins(){
//     const [jobList,setJobList] = useState([])
//     const [matchedJobs,setMatchedJobs] = useState([])
//     useEffect(()=>{
//         fetch("http://127.0.0.1:3000/jobs")
//         .then(response => response.json())
//         .then(data=>setJobList(data));

//         // fetch("http://127.0.0.1:3000/")
//     },[])
//     return(
//         <>
//         yow
//         <ul>
//         {jobList.map((job)=>{
//                 return<div>{job.category}</div>
//             })}
//             {console.log(jobList)}
//         </ul>
            
//         </>
//     )
// }