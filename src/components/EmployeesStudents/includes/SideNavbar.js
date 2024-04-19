import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
import { toast } from "react-toastify";

export default function SideNavbar() {
  const navigate = useNavigate();

  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  CustomScrollBar(".navbar-nav");
  var dashboardClass = window.location.pathname.match(/^\/student-dashboard/)
    ? "active"
    : "";
  var events = window.location.pathname.match(/^\/student-my-events/)
    ? "active"
    : "";
  var profile =
    window.location.pathname.match(/^\/student-profile/) ||
    window.location.pathname.match(/^\/student-messages/)
      ? "active"
      : "";

  return (
    <>
      <div
        className={
          state ? "rk-dashboard-sidebar" : "rk-dashboard-sidebar rk-menu-active"
        }
      >
        <nav class="navbar">
          <div class="rk-site-logo">
            <NavLink
              onClick={() => (state?.clicked ? dispatcher(toggle()) : "")}
              className="navbar-brand"
              to="/student-dashboard"
            >
              <img src="assets/images/logo.png" alt="logo" class="img-fluid" />
            </NavLink>
          </div>
          <ul class="navbar-nav" data-scrollbar>
            <li class="nav-item">
              <NavLink
                onClick={() => (state?.clicked ? dispatcher(toggle()) : "")}
                to="/student-dashboard"
                className={`nav-link ${dashboardClass}`}
                activeClassName="active"
              >
                <span class="nav-link-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 9V3.75C12.75 3.53333 12.8208 3.35417 12.9625 3.2125C13.1042 3.07083 13.2833 3 13.5 3H20.25C20.4667 3 20.6458 3.07083 20.7875 3.2125C20.9292 3.35417 21 3.53333 21 3.75V9C21 9.21667 20.9292 9.39583 20.7875 9.5375C20.6458 9.67917 20.4667 9.75 20.25 9.75H13.5C13.2833 9.75 13.1042 9.67917 12.9625 9.5375C12.8208 9.39583 12.75 9.21667 12.75 9ZM3 12V3.75C3 3.53333 3.07083 3.35417 3.2125 3.2125C3.35417 3.07083 3.53333 3 3.75 3H10.5C10.7167 3 10.8958 3.07083 11.0375 3.2125C11.1792 3.35417 11.25 3.53333 11.25 3.75V12C11.25 12.2167 11.1792 12.3958 11.0375 12.5375C10.8958 12.6792 10.7167 12.75 10.5 12.75H3.75C3.53333 12.75 3.35417 12.6792 3.2125 12.5375C3.07083 12.3958 3 12.2167 3 12ZM12.75 20.25V12C12.75 11.7833 12.8208 11.6042 12.9625 11.4625C13.1042 11.3208 13.2833 11.25 13.5 11.25H20.25C20.4667 11.25 20.6458 11.3208 20.7875 11.4625C20.9292 11.6042 21 11.7833 21 12V20.25C21 20.4667 20.9292 20.6458 20.7875 20.7875C20.6458 20.9292 20.4667 21 20.25 21H13.5C13.2833 21 13.1042 20.9292 12.9625 20.7875C12.8208 20.6458 12.75 20.4667 12.75 20.25ZM3 20.25V15C3 14.7833 3.07083 14.6042 3.2125 14.4625C3.35417 14.3208 3.53333 14.25 3.75 14.25H10.5C10.7167 14.25 10.8958 14.3208 11.0375 14.4625C11.1792 14.6042 11.25 14.7833 11.25 15V20.25C11.25 20.4667 11.1792 20.6458 11.0375 20.7875C10.8958 20.9292 10.7167 21 10.5 21H3.75C3.53333 21 3.35417 20.9292 3.2125 20.7875C3.07083 20.6458 3 20.4667 3 20.25ZM4.5 11.25H9.75V4.5H4.5V11.25ZM14.25 19.5H19.5V12.75H14.25V19.5ZM14.25 8.25H19.5V4.5H14.25V8.25ZM4.5 19.5H9.75V15.75H4.5V19.5Z"
                      fill="#404252"
                    />
                  </svg>
                </span>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                onClick={() => (state?.clicked ? dispatcher(toggle()) : "")}
                to="/student-my-events"
                className={`nav-link ${events}`}
                activeClassName="active"
              >
                <span class="nav-link-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.925 18.5C14.2417 18.5 13.6667 18.2667 13.2 17.8C12.7333 17.3333 12.5 16.7583 12.5 16.075C12.5 15.3917 12.7333 14.8167 13.2 14.35C13.6667 13.8833 14.2417 13.65 14.925 13.65C15.6083 13.65 16.1833 13.8833 16.65 14.35C17.1167 14.8167 17.35 15.3917 17.35 16.075C17.35 16.7583 17.1167 17.3333 16.65 17.8C16.1833 18.2667 15.6083 18.5 14.925 18.5ZM4.5 22C4.1 22 3.75 21.85 3.45 21.55C3.15 21.25 3 20.9 3 20.5V5C3 4.6 3.15 4.25 3.45 3.95C3.75 3.65 4.1 3.5 4.5 3.5H6.125V2.8C6.125 2.56667 6.2 2.375 6.35 2.225C6.5 2.075 6.69167 2 6.925 2C7.15833 2 7.35417 2.075 7.5125 2.225C7.67083 2.375 7.75 2.56667 7.75 2.8V3.5H16.25V2.8C16.25 2.56667 16.325 2.375 16.475 2.225C16.625 2.075 16.8167 2 17.05 2C17.2833 2 17.4792 2.075 17.6375 2.225C17.7958 2.375 17.875 2.56667 17.875 2.8V3.5H19.5C19.9 3.5 20.25 3.65 20.55 3.95C20.85 4.25 21 4.6 21 5V20.5C21 20.9 20.85 21.25 20.55 21.55C20.25 21.85 19.9 22 19.5 22H4.5ZM4.5 20.5H19.5V9.75H4.5V20.5ZM4.5 8.25H19.5V5H4.5V8.25ZM4.5 8.25V5V8.25Z"
                      fill="#404252"
                    />
                  </svg>
                </span>
                <span>My Events</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                onClick={() => (state?.clicked ? dispatcher(toggle()) : "")}
                to="/student-messages"
                className={`nav-link ${profile}`}
                activeClassName="active"
              >
                <span class="nav-link-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65 11.925C7.93333 11.925 8.17083 11.8292 8.3625 11.6375C8.55417 11.4458 8.65 11.2083 8.65 10.925C8.65 10.6417 8.55417 10.4042 8.3625 10.2125C8.17083 10.0208 7.93333 9.925 7.65 9.925C7.36667 9.925 7.12917 10.0208 6.9375 10.2125C6.74583 10.4042 6.65 10.6417 6.65 10.925C6.65 11.2083 6.74583 11.4458 6.9375 11.6375C7.12917 11.8292 7.36667 11.925 7.65 11.925ZM12.075 11.925C12.3583 11.925 12.5958 11.8292 12.7875 11.6375C12.9792 11.4458 13.075 11.2083 13.075 10.925C13.075 10.6417 12.9792 10.4042 12.7875 10.2125C12.5958 10.0208 12.3583 9.925 12.075 9.925C11.7917 9.925 11.5542 10.0208 11.3625 10.2125C11.1708 10.4042 11.075 10.6417 11.075 10.925C11.075 11.2083 11.1708 11.4458 11.3625 11.6375C11.5542 11.8292 11.7917 11.925 12.075 11.925ZM16.325 11.925C16.6083 11.925 16.8458 11.8292 17.0375 11.6375C17.2292 11.4458 17.325 11.2083 17.325 10.925C17.325 10.6417 17.2292 10.4042 17.0375 10.2125C16.8458 10.0208 16.6083 9.925 16.325 9.925C16.0417 9.925 15.8042 10.0208 15.6125 10.2125C15.4208 10.4042 15.325 10.6417 15.325 10.925C15.325 11.2083 15.4208 11.4458 15.6125 11.6375C15.8042 11.8292 16.0417 11.925 16.325 11.925ZM2 21.2V4.5C2 4.11667 2.15 3.77083 2.45 3.4625C2.75 3.15417 3.1 3 3.5 3H20.5C20.8833 3 21.2292 3.15417 21.5375 3.4625C21.8458 3.77083 22 4.11667 22 4.5V17.5C22 17.8833 21.8458 18.2292 21.5375 18.5375C21.2292 18.8458 20.8833 19 20.5 19H6L3.275 21.725C3.04167 21.9583 2.77083 22.0125 2.4625 21.8875C2.15417 21.7625 2 21.5333 2 21.2ZM3.5 19.375L5.375 17.5H20.5V4.5H3.5V19.375ZM3.5 4.5V17.5V19.375V4.5Z"
                      fill="#404252"
                    />
                  </svg>
                </span>
                <span>Messages</span>
              </NavLink>
            </li>
          </ul>

          <div class="rk-logged-user">
            <NavLink
              onClick={() => (state?.clicked ? dispatcher(toggle()) : "")}
              to="/student-profile"
              class="rk-logged-user-img"
            >
              <img
                src={
                  localStorage.getItem("DM_rockoly_image") ==
                    "profile-img.png" ||
                  localStorage.getItem("DM_rockoly_image") == null ||
                  !localStorage.getItem("DM_rockoly_image")
                    ? "assets/images/profile-img.png"
                    : localStorage.getItem("DM_rockoly_image")
                }
                alt="user-profile"
                className="img-fluid"
              />
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <div class="rk-logged-user-detail">
              <h5 className="rk-logged-user-name">
                {localStorage.getItem("DM_rockoly_name")}
              </h5>
              <p className="rk-logged-user-designation">
                {/* {localStorage.getItem("DM_rockoly_occupation")} */}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
