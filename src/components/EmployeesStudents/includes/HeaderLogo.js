import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <>
      <div className="rk-site-header-logo">
        <NavLink className="navbar-brand" to="/student-dashboard">
          <img src="assets/images/logo.png" alt="logo" className="img-fluid" />
        </NavLink>
      </div>
    </>
  );
}
