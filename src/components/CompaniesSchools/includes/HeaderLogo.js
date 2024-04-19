import React from "react";
import { NavLink } from "react-router-dom";
import { baseURL } from "../../utils/base_url";

export default function HeaderLogo() {
  return (
    <>
      <div className="rk-site-header-logo">
        <NavLink className="navbar-brand" to="/dashboard">
          <img
            src={`${baseURL}/assets/images/logo.png`}
            alt="logo"
            className="img-fluid"
          />
        </NavLink>
      </div>
    </>
  );
}
