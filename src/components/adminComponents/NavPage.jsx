import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

import Employers from "./Employers";
import Jobs from "./Jobs";

import Applications from "./Applications";
import Jobseeker from "./Jobseeker";

function NavPage() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/jobseekers" element={<Jobseeker />} />
        {/* <Route path="/jobs/new" element={<AddJob />} /> */}
      </Routes>
    </>
  );
}
export default NavPage;
