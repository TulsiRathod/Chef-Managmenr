import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
export default function EmployeeStudentManagement() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }

  CustomScrollBar(".rk-dashboard-content-area");
  CustomScrollBar(".modal-body");

  return (
    <>
      <div className={state ? "rk-site" : "rk-site rk-menu-show"}>
        {/* <!-- Site Content Start --> */}
        <main className="rk-site-content">
          {/* <!-- Landing Section Start --> */}
          <section className="rk-dashboard-section">
            <SideNavbar />
            <div className="rk-dashboard-content-area" data-scrollbar>
              <div className="rk-dashboard-header rk-event-request-hrader">
                <HeaderLogo />
                <h1 className="rk-dashboard-user-name">
                  <span>Managment </span>
                </h1>
                <div className="rk-dashboard-header-search">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="search"
                  />
                  <img
                    src="assets/images/search-icon.png"
                    alt="search-icon"
                    className="img-fluid"
                  />
                </div>
                <span className="rk-dashboard-notification-icon rk-dashboard-filter-icon">
                  &nbsp;&nbsp;
                  <img
                    src="assets/images/filter-icon.png"
                    alt="filter-icon"
                    className="img-fluid"
                  />
                  <select
                    className="rk-filter-form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="name">
                      By name
                    </option>
                    <option value="1">Department</option>
                    <option value="2">Email ID</option>
                    <option value="3">Employee ID</option>
                    <option value="3">Schedule Management</option>
                  </select>
                </span>
                <span className="rk-dashboard-header-btn">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#AddEmployeeModal"
                  >
                    Add Student
                  </button>
                </span>
                <span className="rk-menu-icon" onClick={toggleList}>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div className="rk-employee-managment-content">
                <div className="row">
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img2.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img3.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img4.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img5.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img6.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img7.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img8.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img9.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-6">
                    <div className="rk-employee-managment-item">
                      <div className="rk-employee-details">
                        <div className="rk-employee-details__inner">
                          <div className="rk-employee-profile">
                            <div className="rk-employee-img">
                              <img
                                src="assets/images/emploiyee-img10.png"
                                alt="emploiyee-img"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="rk-employee-name">
                              Cameron Williamson
                            </h3>
                          </div>
                          <div className="rk-employee-info">
                            <p className="rk-employee-id">
                              <label className="rk-employee-id-label">
                                ID:&nbsp;
                              </label>
                              <span className="rk-employee-id-number">
                                548238546235
                              </span>
                            </p>
                            <p className="rk-employee-email">
                              <span className="rk-employee-email-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.3335 13.8337C2.06683 13.8337 1.8335 13.7337 1.6335 13.5337C1.4335 13.3337 1.3335 13.1003 1.3335 12.8337V4.16699C1.3335 3.90033 1.4335 3.66699 1.6335 3.46699C1.8335 3.26699 2.06683 3.16699 2.3335 3.16699H13.6668C13.9335 3.16699 14.1668 3.26699 14.3668 3.46699C14.5668 3.66699 14.6668 3.90033 14.6668 4.16699V12.8337C14.6668 13.1003 14.5668 13.3337 14.3668 13.5337C14.1668 13.7337 13.9335 13.8337 13.6668 13.8337H2.3335ZM13.6668 5.08366L8.26683 8.61699C8.22238 8.63921 8.18072 8.65866 8.14183 8.67532C8.10294 8.69199 8.05572 8.70033 8.00016 8.70033C7.94461 8.70033 7.89739 8.69199 7.8585 8.67532C7.81961 8.65866 7.77794 8.63921 7.7335 8.61699L2.3335 5.08366V12.8337H13.6668V5.08366ZM8.00016 7.80032L13.6002 4.16699H2.41683L8.00016 7.80032ZM2.3335 5.08366V5.20033C2.3335 5.16699 2.3335 5.12255 2.3335 5.06699C2.3335 5.01144 2.3335 4.95033 2.3335 4.88366C2.3335 4.73921 2.3335 4.62533 2.3335 4.54199C2.3335 4.45866 2.3335 4.46144 2.3335 4.55033V4.16699V4.55033C2.3335 4.46144 2.3335 4.45588 2.3335 4.53366C2.3335 4.61144 2.3335 4.72255 2.3335 4.86699C2.3335 4.93366 2.3335 4.99755 2.3335 5.05866C2.3335 5.11977 2.3335 5.16699 2.3335 5.20033V5.08366V12.8337V5.08366Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-email-text">
                                Cameron Williamson85@gamil.com
                              </span>
                            </p>
                            <p className="rk-employee-date">
                              <span className="rk-employee-date-icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2979 2.09961H12.0708V3.32665C12.0708 3.57205 11.8663 3.73566 11.6618 3.73566C11.4573 3.73566 11.2528 3.57205 11.2528 3.32665V2.09961H4.70859V3.32665C4.70859 3.57205 4.50409 3.73566 4.29958 3.73566C4.09507 3.73566 3.89057 3.57205 3.89057 3.32665V2.09961H2.66353C2.05001 2.09961 1.6001 2.63133 1.6001 3.32665V4.79909H14.6885V3.32665C14.6885 2.63133 13.9523 2.09961 13.2979 2.09961ZM1.6001 5.65802V13.1429C1.6001 13.8792 2.05001 14.37 2.70443 14.37H13.3388C13.9932 14.37 14.7294 13.8383 14.7294 13.1429V5.65802H1.6001ZM5.24031 12.5294H4.25868C4.09507 12.5294 3.93147 12.4067 3.93147 12.2022V11.1797C3.93147 11.0161 4.05417 10.8525 4.25868 10.8525H5.28121C5.44481 10.8525 5.60842 10.9752 5.60842 11.1797V12.2022C5.56752 12.4067 5.44481 12.5294 5.24031 12.5294ZM5.24031 8.84831H4.25868C4.09507 8.84831 3.93147 8.72561 3.93147 8.5211V7.49857C3.93147 7.33497 4.05417 7.17136 4.25868 7.17136H5.28121C5.44481 7.17136 5.60842 7.29407 5.60842 7.49857V8.5211C5.56752 8.72561 5.44481 8.84831 5.24031 8.84831ZM8.51241 12.5294H7.48988C7.32627 12.5294 7.16267 12.4067 7.16267 12.2022V11.1797C7.16267 11.0161 7.28537 10.8525 7.48988 10.8525H8.51241C8.67601 10.8525 8.83962 10.9752 8.83962 11.1797V12.2022C8.83962 12.4067 8.71691 12.5294 8.51241 12.5294ZM8.51241 8.84831H7.48988C7.32627 8.84831 7.16267 8.72561 7.16267 8.5211V7.49857C7.16267 7.33497 7.28537 7.17136 7.48988 7.17136H8.51241C8.67601 7.17136 8.83962 7.29407 8.83962 7.49857V8.5211C8.83962 8.72561 8.71691 8.84831 8.51241 8.84831ZM11.7845 12.5294H10.762C10.5984 12.5294 10.4348 12.4067 10.4348 12.2022V11.1797C10.4348 11.0161 10.5575 10.8525 10.762 10.8525H11.7845C11.9481 10.8525 12.1117 10.9752 12.1117 11.1797V12.2022C12.1117 12.4067 11.989 12.5294 11.7845 12.5294ZM11.7845 8.84831H10.762C10.5984 8.84831 10.4348 8.72561 10.4348 8.5211V7.49857C10.4348 7.33497 10.5575 7.17136 10.762 7.17136H11.7845C11.9481 7.17136 12.1117 7.29407 12.1117 7.49857V8.5211C12.1117 8.72561 11.989 8.84831 11.7845 8.84831Z"
                                    fill="#05AC93"
                                  />
                                </svg>
                              </span>
                              <span className="rk-employee-date-text">
                                <span className="rk-employee-date-text">
                                  24 May 22
                                </span>
                                <span className="rk-employee-date-devider">
                                  {" "}
                                  |{" "}
                                </span>
                                <span className="rk-employee-date-text">
                                  10:00 am
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="rk-employee-details__inner">
                          <label className="rk-employee-designation">
                            IT Department
                          </label>
                          <p className="rk-employee-attend">
                            <span className="rk-employee-attend-icon">
                              <img
                                src="assets/images/event-attend-icon.png"
                                alt="event-attend-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-employee-attend-label">
                              Events Attended:
                            </span>
                            <span className="rk-employee-attend-count">16</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Landing Section End --> */}

          {/* <!-- Events Request Modal Start --> */}
          <div
            className="modal fade rk-side-modal"
            id="AddEmployeeModal"
            tabindex="-1"
            aria-labelledby="AddEmployeelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <form>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="AddEmployeeLabel">
                      <span className="rk-modal-title-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 13.525C18.7833 13.525 18.6042 13.4542 18.4625 13.3125C18.3208 13.1708 18.25 12.9917 18.25 12.775V10.275H15.75C15.5333 10.275 15.3542 10.2042 15.2125 10.0625C15.0708 9.92083 15 9.74167 15 9.525C15 9.30833 15.0708 9.12917 15.2125 8.9875C15.3542 8.84583 15.5333 8.775 15.75 8.775H18.25V6.275C18.25 6.05833 18.3208 5.87917 18.4625 5.7375C18.6042 5.59583 18.7833 5.525 19 5.525C19.2167 5.525 19.3958 5.59583 19.5375 5.7375C19.6792 5.87917 19.75 6.05833 19.75 6.275V8.775H22.25C22.4667 8.775 22.6458 8.84583 22.7875 8.9875C22.9292 9.12917 23 9.30833 23 9.525C23 9.74167 22.9292 9.92083 22.7875 10.0625C22.6458 10.2042 22.4667 10.275 22.25 10.275H19.75V12.775C19.75 12.9917 19.6792 13.1708 19.5375 13.3125C19.3958 13.4542 19.2167 13.525 19 13.525ZM9 11.5C7.9 11.5 7 11.15 6.3 10.45C5.6 9.75 5.25 8.85 5.25 7.75C5.25 6.65 5.6 5.75 6.3 5.05C7 4.35 7.9 4 9 4C10.1 4 11 4.35 11.7 5.05C12.4 5.75 12.75 6.65 12.75 7.75C12.75 8.85 12.4 9.75 11.7 10.45C11 11.15 10.1 11.5 9 11.5ZM1.75 19.525C1.53333 19.525 1.35417 19.4542 1.2125 19.3125C1.07083 19.1708 1 18.9917 1 18.775V17.175C1 16.5917 1.15 16.0625 1.45 15.5875C1.75 15.1125 2.16667 14.7583 2.7 14.525C3.95 13.975 5.0625 13.5875 6.0375 13.3625C7.0125 13.1375 8 13.025 9 13.025C10 13.025 10.9875 13.1375 11.9625 13.3625C12.9375 13.5875 14.0417 13.975 15.275 14.525C15.8083 14.775 16.2292 15.1333 16.5375 15.6C16.8458 16.0667 17 16.5917 17 17.175V18.775C17 18.9917 16.9292 19.1708 16.7875 19.3125C16.6458 19.4542 16.4667 19.525 16.25 19.525H1.75ZM2.5 18.025H15.5V17.175C15.5 16.9083 15.4333 16.6542 15.3 16.4125C15.1667 16.1708 14.9583 15.9917 14.675 15.875C13.5083 15.3083 12.5125 14.9417 11.6875 14.775C10.8625 14.6083 9.96667 14.525 9 14.525C8.03333 14.525 7.1375 14.6125 6.3125 14.7875C5.4875 14.9625 4.48333 15.325 3.3 15.875C3.05 15.9917 2.85417 16.1708 2.7125 16.4125C2.57083 16.6542 2.5 16.9083 2.5 17.175V18.025ZM9 10C9.65 10 10.1875 9.7875 10.6125 9.3625C11.0375 8.9375 11.25 8.4 11.25 7.75C11.25 7.1 11.0375 6.5625 10.6125 6.1375C10.1875 5.7125 9.65 5.5 9 5.5C8.35 5.5 7.8125 5.7125 7.3875 6.1375C6.9625 6.5625 6.75 7.1 6.75 7.75C6.75 8.4 6.9625 8.9375 7.3875 9.3625C7.8125 9.7875 8.35 10 9 10Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span>Add Student</span>
                    </h5>
                  </div>

                  <div className="modal-body" data-scrollbar>
                    <div className="rk-modal-form-content">
                      <div className="rk-modal-form-input">
                        <label className="form-label">
                          Employee/Student Name
                        </label>
                        <div className="rk-form-input">
                          <input
                            type="text"
                            className="form-control"
                            value="Cameron"
                            placeholder="Enter Employee/Student Name"
                          />
                          <span className="rk-form-input-icon">
                            <img
                              src="assets/images/student-name-icon.png"
                              alt="student-name-icon"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label for="inputPassword4" className="form-label">
                          Department
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Department"
                        />
                      </div>
                      <div className="rk-modal-form-input">
                        <label for="inputPassword4" className="form-label">
                          Student ID
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Student ID"
                        />
                      </div>
                      <div className="rk-modal-form-input">
                        <label for="inputPassword4" className="form-label">
                          Email ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-success btn-custom w-100"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Events Request Modal End --> */}
        </main>
        {/* <!-- Site Content End --> */}
      </div>
    </>
  );
}
