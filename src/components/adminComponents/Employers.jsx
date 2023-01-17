import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";



const columns = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'username', headerName: 'UserName', width: 300 },
  { field: 'company_name', headerName: 'CompanyName', width: 250 },
  { field: 'email', headerName: 'Email', width: 320, 
  valueGetter:(employers)=> employers.row.email},
  
];


const Employers = () => {
  const [employers,setEmployers]= useState([]);
  const [pageSize, setPageSize] = useState(10)

const handleDelete = (id) => {
    setEmployers(employers.filter((employer) => employer.id !== id))
fetch("https://riziki.onrender.com/employers/" + id , {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => handleDelete(id))
  }
  
   useEffect(()=>{
    fetch('https://riziki.onrender.com/employers')
      .then(response => response.json())
      .then((json)=> setEmployers(json))
     
  }, [])
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (employer) => {
        return (
           <div>
            
              <button className="deleteButton"
              onClick={() => handleDelete(employer.id)}> Delete</button>
            </div>
        );
      },
    },

  ];


 


  return(

<div>
    <h1>Employers</h1>

    <div style={{ width: '100%', height: 700 ,color:"black" }}>
  
   
    <DataGrid
    rows={employers}
    pageSize={pageSize}
    rowsPerPageOptions={[8,5,10]}
    onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
    columns={columns.concat(actionColumn)}
    disableSelectionOnClick
    checkboxSelection
    />
 
</div>

</div>
    
    
  )





}
  export default Employers