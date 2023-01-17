import React from "react";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="menu-bar">
          <Link to="/admin">
            <FaBars />
          </Link>
        </div>
        <div>
          <p className="title-admin">Admin</p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
