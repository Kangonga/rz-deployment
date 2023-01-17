import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";


const columns = [
  { field: 'id', headerName: 'UserID', width: 150 },
  { field: 'jobseeker_id', headerName: 'JobSeekerID', width: 200 },
   { field: 'category', headerName: 'Category', width: 200, 
  valueGetter:(applications)=> applications.row.job.category},
  { field: 'job_title', headerName: 'Job Title', width: 200, 
  valueGetter:(applications)=> applications.row.job.job_title},
 
  
];


const Applications = () => {
  const [applications,setApplications]= useState([]);
  const [pageSize, setPageSize] = useState(10)

  useEffect(()=>{
    fetch('https://riziki.onrender.com/job_applications')
      .then(response => response.json())
      .then((applications)=> setApplications(applications))
     
  }, [])


  return(


    <div style={{ width: '100%', height: 700 }}>
      <h1>Applications</h1>
    <DataGrid
    rows={applications}
    columns={columns}
    pageSize={pageSize}
    rowsPerPageOptions={[8,5,10]}
    onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
    checkboxSelection
    />
 
</div>
    
  )





}
  export default Applications