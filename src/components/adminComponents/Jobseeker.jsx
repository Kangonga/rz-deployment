import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "User ID", width: 150 },
  { field: "username", headerName: "Name", width: 300 },
  { field: "rating", headerName: "Rating", width: 200 },
  { field: "skills", headerName: "Skiils", width: 300 },
  { field: "jobs_done", headerName: "Jobs Done", width: 300 },
];

const Jobseeker = () => {
  const [jobseekers, setJobseekers] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const handleDelete = (id) => {
    setJobseekers(jobseekers.filter((jobseeker) => jobseeker.id !== id));
    fetch("https://riziki.onrender.com/jobseekers/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => handleDelete(id));
  };

  useEffect(() => {
    fetch("https://riziki.onrender.com/jobseekers")
      .then((response) => response.json())
      .then((json) => setJobseekers(json));
  }, []);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (jobseeker) => {
        return (
          <div>
            <button
              className="deleteButton"
              onClick={() => handleDelete(jobseeker.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Jobseekers</h1>

      <div style={{ width: "100%", height: 700, color: "black" }}>
        <DataGrid
          rows={jobseekers}
          pageSize={pageSize}
          rowsPerPageOptions={[8, 5, 10]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          columns={columns.concat(actionColumn)}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default Jobseeker;
