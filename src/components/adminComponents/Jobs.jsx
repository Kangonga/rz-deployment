import React, { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://riziki.onrender.com/jobs")
      .then((resp) => resp.json())
      .then((jobs) => {
        setJobs(jobs);
        console.log(jobs);
      });
  }, []);

  //  const addJob = (job) => {
  //     setJobs([...jobs, job]);

  // }

  return (
    <div>
      <div>
        <h1>Posted Jobs</h1>
      </div>

      <table className="table table-bordered  table table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label for="selectAll"></label>
              </span>
            </th>
            <th>Company Name</th>
            <th>Category</th>
            <th>Job Tittle</th>
            <th>Jobs Description</th>
            {<th>Responsibilities</th>}
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="options[]"
                    value="1"
                  />
                  <label for="checkbox1"></label>
                </span>
              </td>
              <td>{job.company_name}</td>
              <td>{job.category}</td>
              <td>{job.job_title}</td>
              <td>{job.job_description}</td>
              <td>{job.responsibilities}</td>
              <td>{job.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
