import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { baseURL } from "../../utils/base_url";
import { toast } from "react-toastify";

export default function Headers() {
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- Site Header Start --> */}
      <header className="rk-header">
        <nav className="navbar navbar-expand ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/login">
              <img
                src={`${baseURL}/assets/images/logo.png`}
                alt="logo"
                className="img-fluid"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className=" ms-auto rk-lang-form-select">
                <select className="form-select">
                  <option selected>English (UK)</option>
                  <option value="1">English (UK)</option>
                  <option value="2">English (UK)</option>
                  <option value="3">English (UK)</option>
                </select>
                <img
                  src={`${baseURL}/assets/images/down-arrow.png`}
                  alt="down-arrow"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Site Header End --> */}
    </>
  );
}
