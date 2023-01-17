import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";
import "./admin.css";

function MainPage() {
  return (
    <>
      <div id="admincontainer">
        <Navbar />
      </div>

      <div className="sidebar-container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="nav-page">
          <NavPage />
        </div>
      </div>
    </>
  );
}
export default MainPage;
