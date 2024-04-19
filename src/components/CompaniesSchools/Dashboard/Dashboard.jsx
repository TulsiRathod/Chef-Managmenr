import React from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import Slider from "react-slick";
import { settings } from "../../utils/SlickSettings";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
export default function Dashboard() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");

  return (
    <>
      <div className={state?.state ? "rk-site" : "rk-site rk-menu-show"}>
        {/* <!-- Site Content Start --> */}
        <main className="rk-site-content">
          {/* <!-- Landing Section Start --> */}
          <section className="rk-dashboard-section">
            <SideNavbar />

            <div className="rk-dashboard-content-area" data-scrollbar>
              <div className="rk-dashboard-header">
                <HeaderLogo />
                <h1 className="rk-dashboard-user-name">
                  <span>Hi, </span> James Mary
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
                <span className="rk-dashboard-notification-icon">
                  <img
                    src="assets/images/notification-icon.png"
                    alt="notification-icon"
                    className="img-fluid"
                  />
                </span>
                <span className="rk-menu-icon" onClick={toggleList}>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div className="rk-dashboard-count-card-content">
                <div className="row">
                  <div className="col col-12 col-md-4 col-lg-4">
                    <div className="rk-dashboard-count-card">
                      <h2 className="rk-dashboard-counter">19</h2>
                      <p className="rk-dashboard-count-label">
                        Total of Events
                      </p>
                    </div>
                  </div>
                  <div className="col col-12 col-md-4 col-lg-4">
                    <div className="rk-dashboard-count-card rk-dashboard-count-employee">
                      <h2 className="rk-dashboard-counter">197</h2>
                      <p className="rk-dashboard-count-label">Total Employee</p>
                    </div>
                  </div>
                  <div className="col col-12 col-md-4 col-lg-4">
                    <div className="rk-dashboard-count-card rk-dashboard-count-events-card">
                      <h2 className="rk-dashboard-counter">56</h2>
                      <p className="rk-dashboard-count-label">
                        Remainig Events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rk-event-slider-content">
                <div className="rk-event-slider-heading">
                  <h2 className="rk-event-slider-title">
                    Upcoming Events (06)
                  </h2>
                  <a className="rk-event-slider-link" href="#">
                    See All
                  </a>
                </div>
                <div className="rk-event-slider">
                  <Slider {...settings}>
                    <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img1.png"
                            alt="event-img1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="rk-event-card-body">
                          <div className="rk-event-sponsor">
                            <div className="rk-event-sponsor-details">
                              <span className="rk-event-sponsor-img">
                                <img
                                  src="assets/images/sponsor-img.png"
                                  alt="sponsor-img"
                                  className="img-fluid"
                                />
                              </span>
                              <label className="rk-event-sponsor-name">
                                Dr chef
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.05 20.725L8.975 18.575L4.5 20.35C4.21667 20.5 3.9375 20.4917 3.6625 20.325C3.3875 20.1583 3.25 19.9083 3.25 19.575V5.625C3.25 5.40833 3.3125 5.21667 3.4375 5.05C3.5625 4.88333 3.725 4.75833 3.925 4.675L8.475 3.075C8.64167 3.025 8.80833 3 8.975 3C9.14167 3 9.30833 3.025 9.475 3.075L15.55 5.2L20 3.425C20.2833 3.29167 20.5625 3.30417 20.8375 3.4625C21.1125 3.62083 21.25 3.86667 21.25 4.2V18.325C21.25 18.5083 21.1875 18.6667 21.0625 18.8C20.9375 18.9333 20.7833 19.0333 20.6 19.1L16.05 20.725C15.8833 20.775 15.7167 20.8 15.55 20.8C15.3833 20.8 15.2167 20.775 15.05 20.725ZM14.7 19.025V6.4L9.8 4.75V17.375L14.7 19.025Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="rk-event-detail">
                            <p className="rk-event-time-date">
                              <span className="rk-event-date">
                                24’ May 2022
                              </span>{" "}
                              |<span className="rk-event-time"> 10:00 am</span>
                            </p>
                            <p className="rk-event-participate">
                              <span className="rk-event-participate-icon">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1019_3522)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#05AC93"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1019_3522">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                        transform="translate(0.25 0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="rk-event-participate-count">
                                96 /100
                              </span>
                            </p>
                          </div>
                          <h3 className="rk-event-card-title">
                            Exclusive Events
                          </h3>
                          <p className="rk-event-card-location">
                            <span className="rk-event-card-location-icon">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.875 9.5875C5.81667 9.5875 5.7625 9.58125 5.7125 9.56875C5.6625 9.55625 5.61667 9.53333 5.575 9.5C4.53333 8.69167 3.76042 7.91458 3.25625 7.16875C2.75208 6.42292 2.5 5.68333 2.5 4.95C2.5 4.38333 2.60208 3.88542 2.80625 3.45625C3.01042 3.02708 3.275 2.66667 3.6 2.375C3.925 2.08333 4.2875 1.86458 4.6875 1.71875C5.0875 1.57292 5.48333 1.5 5.875 1.5C6.26667 1.5 6.6625 1.57292 7.0625 1.71875C7.4625 1.86458 7.825 2.08333 8.15 2.375C8.475 2.66667 8.73958 3.02708 8.94375 3.45625C9.14792 3.88542 9.25 4.38333 9.25 4.95C9.25 5.68333 8.99792 6.42292 8.49375 7.16875C7.98958 7.91458 7.21667 8.69167 6.175 9.5C6.13333 9.53333 6.0875 9.55625 6.0375 9.56875C5.9875 9.58125 5.93333 9.5875 5.875 9.5875ZM5.875 5.75C6.11667 5.75 6.32292 5.66458 6.49375 5.49375C6.66458 5.32292 6.75 5.11667 6.75 4.875C6.75 4.63333 6.66458 4.42708 6.49375 4.25625C6.32292 4.08542 6.11667 4 5.875 4C5.63333 4 5.42708 4.08542 5.25625 4.25625C5.08542 4.42708 5 4.63333 5 4.875C5 5.11667 5.08542 5.32292 5.25625 5.49375C5.42708 5.66458 5.63333 5.75 5.875 5.75ZM2.875 11.5C2.76667 11.5 2.67708 11.4646 2.60625 11.3938C2.53542 11.3229 2.5 11.2333 2.5 11.125C2.5 11.0167 2.53542 10.9271 2.60625 10.8562C2.67708 10.7854 2.76667 10.75 2.875 10.75H8.875C8.98333 10.75 9.07292 10.7854 9.14375 10.8562C9.21458 10.9271 9.25 11.0167 9.25 11.125C9.25 11.2333 9.21458 11.3229 9.14375 11.3938C9.07292 11.4646 8.98333 11.5 8.875 11.5H2.875Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img2.png"
                            alt="event-img2"
                            className="img-fluid"
                          />
                        </div>
                        <div className="rk-event-card-body">
                          <div className="rk-event-sponsor">
                            <div className="rk-event-sponsor-details">
                              <span className="rk-event-sponsor-img">
                                <img
                                  src="assets/images/sponsor-img2.png"
                                  alt="sponsor-img2"
                                  className="img-fluid"
                                />
                              </span>
                              <label className="rk-event-sponsor-name">
                                Dr chef
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.05 20.725L8.975 18.575L4.5 20.35C4.21667 20.5 3.9375 20.4917 3.6625 20.325C3.3875 20.1583 3.25 19.9083 3.25 19.575V5.625C3.25 5.40833 3.3125 5.21667 3.4375 5.05C3.5625 4.88333 3.725 4.75833 3.925 4.675L8.475 3.075C8.64167 3.025 8.80833 3 8.975 3C9.14167 3 9.30833 3.025 9.475 3.075L15.55 5.2L20 3.425C20.2833 3.29167 20.5625 3.30417 20.8375 3.4625C21.1125 3.62083 21.25 3.86667 21.25 4.2V18.325C21.25 18.5083 21.1875 18.6667 21.0625 18.8C20.9375 18.9333 20.7833 19.0333 20.6 19.1L16.05 20.725C15.8833 20.775 15.7167 20.8 15.55 20.8C15.3833 20.8 15.2167 20.775 15.05 20.725ZM14.7 19.025V6.4L9.8 4.75V17.375L14.7 19.025Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="rk-event-detail">
                            <p className="rk-event-time-date">
                              <span className="rk-event-date">
                                24’ May 2022
                              </span>{" "}
                              |<span className="rk-event-time"> 10:00 am</span>
                            </p>
                            <p className="rk-event-participate">
                              <span className="rk-event-participate-icon">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1019_3522)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#05AC93"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1019_3522">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                        transform="translate(0.25 0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="rk-event-participate-count">
                                96 /100
                              </span>
                            </p>
                          </div>
                          <h3 className="rk-event-card-title">
                            Exclusive Events
                          </h3>
                          <p className="rk-event-card-location">
                            <span className="rk-event-card-location-icon">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.875 9.5875C5.81667 9.5875 5.7625 9.58125 5.7125 9.56875C5.6625 9.55625 5.61667 9.53333 5.575 9.5C4.53333 8.69167 3.76042 7.91458 3.25625 7.16875C2.75208 6.42292 2.5 5.68333 2.5 4.95C2.5 4.38333 2.60208 3.88542 2.80625 3.45625C3.01042 3.02708 3.275 2.66667 3.6 2.375C3.925 2.08333 4.2875 1.86458 4.6875 1.71875C5.0875 1.57292 5.48333 1.5 5.875 1.5C6.26667 1.5 6.6625 1.57292 7.0625 1.71875C7.4625 1.86458 7.825 2.08333 8.15 2.375C8.475 2.66667 8.73958 3.02708 8.94375 3.45625C9.14792 3.88542 9.25 4.38333 9.25 4.95C9.25 5.68333 8.99792 6.42292 8.49375 7.16875C7.98958 7.91458 7.21667 8.69167 6.175 9.5C6.13333 9.53333 6.0875 9.55625 6.0375 9.56875C5.9875 9.58125 5.93333 9.5875 5.875 9.5875ZM5.875 5.75C6.11667 5.75 6.32292 5.66458 6.49375 5.49375C6.66458 5.32292 6.75 5.11667 6.75 4.875C6.75 4.63333 6.66458 4.42708 6.49375 4.25625C6.32292 4.08542 6.11667 4 5.875 4C5.63333 4 5.42708 4.08542 5.25625 4.25625C5.08542 4.42708 5 4.63333 5 4.875C5 5.11667 5.08542 5.32292 5.25625 5.49375C5.42708 5.66458 5.63333 5.75 5.875 5.75ZM2.875 11.5C2.76667 11.5 2.67708 11.4646 2.60625 11.3938C2.53542 11.3229 2.5 11.2333 2.5 11.125C2.5 11.0167 2.53542 10.9271 2.60625 10.8562C2.67708 10.7854 2.76667 10.75 2.875 10.75H8.875C8.98333 10.75 9.07292 10.7854 9.14375 10.8562C9.21458 10.9271 9.25 11.0167 9.25 11.125C9.25 11.2333 9.21458 11.3229 9.14375 11.3938C9.07292 11.4646 8.98333 11.5 8.875 11.5H2.875Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img3.png"
                            alt="event-img3"
                            className="img-fluid"
                          />
                        </div>
                        <div className="rk-event-card-body">
                          <div className="rk-event-sponsor">
                            <div className="rk-event-sponsor-details">
                              <span className="rk-event-sponsor-img">
                                <img
                                  src="assets/images/sponsor-img3.png"
                                  alt="sponsor-img3"
                                  className="img-fluid"
                                />
                              </span>
                              <label className="rk-event-sponsor-name">
                                Dr chef
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.05 20.725L8.975 18.575L4.5 20.35C4.21667 20.5 3.9375 20.4917 3.6625 20.325C3.3875 20.1583 3.25 19.9083 3.25 19.575V5.625C3.25 5.40833 3.3125 5.21667 3.4375 5.05C3.5625 4.88333 3.725 4.75833 3.925 4.675L8.475 3.075C8.64167 3.025 8.80833 3 8.975 3C9.14167 3 9.30833 3.025 9.475 3.075L15.55 5.2L20 3.425C20.2833 3.29167 20.5625 3.30417 20.8375 3.4625C21.1125 3.62083 21.25 3.86667 21.25 4.2V18.325C21.25 18.5083 21.1875 18.6667 21.0625 18.8C20.9375 18.9333 20.7833 19.0333 20.6 19.1L16.05 20.725C15.8833 20.775 15.7167 20.8 15.55 20.8C15.3833 20.8 15.2167 20.775 15.05 20.725ZM14.7 19.025V6.4L9.8 4.75V17.375L14.7 19.025Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="rk-event-detail">
                            <p className="rk-event-time-date">
                              <span className="rk-event-date">
                                24’ May 2022
                              </span>{" "}
                              |<span className="rk-event-time"> 10:00 am</span>
                            </p>
                            <p className="rk-event-participate">
                              <span className="rk-event-participate-icon">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1019_3522)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#05AC93"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1019_3522">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                        transform="translate(0.25 0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="rk-event-participate-count">
                                96 /100
                              </span>
                            </p>
                          </div>
                          <h3 className="rk-event-card-title">
                            Exclusive Events
                          </h3>
                          <p className="rk-event-card-location">
                            <span className="rk-event-card-location-icon">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.875 9.5875C5.81667 9.5875 5.7625 9.58125 5.7125 9.56875C5.6625 9.55625 5.61667 9.53333 5.575 9.5C4.53333 8.69167 3.76042 7.91458 3.25625 7.16875C2.75208 6.42292 2.5 5.68333 2.5 4.95C2.5 4.38333 2.60208 3.88542 2.80625 3.45625C3.01042 3.02708 3.275 2.66667 3.6 2.375C3.925 2.08333 4.2875 1.86458 4.6875 1.71875C5.0875 1.57292 5.48333 1.5 5.875 1.5C6.26667 1.5 6.6625 1.57292 7.0625 1.71875C7.4625 1.86458 7.825 2.08333 8.15 2.375C8.475 2.66667 8.73958 3.02708 8.94375 3.45625C9.14792 3.88542 9.25 4.38333 9.25 4.95C9.25 5.68333 8.99792 6.42292 8.49375 7.16875C7.98958 7.91458 7.21667 8.69167 6.175 9.5C6.13333 9.53333 6.0875 9.55625 6.0375 9.56875C5.9875 9.58125 5.93333 9.5875 5.875 9.5875ZM5.875 5.75C6.11667 5.75 6.32292 5.66458 6.49375 5.49375C6.66458 5.32292 6.75 5.11667 6.75 4.875C6.75 4.63333 6.66458 4.42708 6.49375 4.25625C6.32292 4.08542 6.11667 4 5.875 4C5.63333 4 5.42708 4.08542 5.25625 4.25625C5.08542 4.42708 5 4.63333 5 4.875C5 5.11667 5.08542 5.32292 5.25625 5.49375C5.42708 5.66458 5.63333 5.75 5.875 5.75ZM2.875 11.5C2.76667 11.5 2.67708 11.4646 2.60625 11.3938C2.53542 11.3229 2.5 11.2333 2.5 11.125C2.5 11.0167 2.53542 10.9271 2.60625 10.8562C2.67708 10.7854 2.76667 10.75 2.875 10.75H8.875C8.98333 10.75 9.07292 10.7854 9.14375 10.8562C9.21458 10.9271 9.25 11.0167 9.25 11.125C9.25 11.2333 9.21458 11.3229 9.14375 11.3938C9.07292 11.4646 8.98333 11.5 8.875 11.5H2.875Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img4.png"
                            alt="event-img4"
                            className="img-fluid"
                          />
                        </div>
                        <div className="rk-event-card-body">
                          <div className="rk-event-sponsor">
                            <div className="rk-event-sponsor-details">
                              <span className="rk-event-sponsor-img">
                                <img
                                  src="assets/images/sponsor-img3.png"
                                  alt="sponsor-img3"
                                  className="img-fluid"
                                />
                              </span>
                              <label className="rk-event-sponsor-name">
                                Dr chef
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.05 20.725L8.975 18.575L4.5 20.35C4.21667 20.5 3.9375 20.4917 3.6625 20.325C3.3875 20.1583 3.25 19.9083 3.25 19.575V5.625C3.25 5.40833 3.3125 5.21667 3.4375 5.05C3.5625 4.88333 3.725 4.75833 3.925 4.675L8.475 3.075C8.64167 3.025 8.80833 3 8.975 3C9.14167 3 9.30833 3.025 9.475 3.075L15.55 5.2L20 3.425C20.2833 3.29167 20.5625 3.30417 20.8375 3.4625C21.1125 3.62083 21.25 3.86667 21.25 4.2V18.325C21.25 18.5083 21.1875 18.6667 21.0625 18.8C20.9375 18.9333 20.7833 19.0333 20.6 19.1L16.05 20.725C15.8833 20.775 15.7167 20.8 15.55 20.8C15.3833 20.8 15.2167 20.775 15.05 20.725ZM14.7 19.025V6.4L9.8 4.75V17.375L14.7 19.025Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="rk-event-detail">
                            <p className="rk-event-time-date">
                              <span className="rk-event-date">
                                24’ May 2022
                              </span>{" "}
                              |<span className="rk-event-time"> 10:00 am</span>
                            </p>
                            <p className="rk-event-participate">
                              <span className="rk-event-participate-icon">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1019_3522)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#05AC93"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1019_3522">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                        transform="translate(0.25 0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="rk-event-participate-count">
                                96 /100
                              </span>
                            </p>
                          </div>
                          <h3 className="rk-event-card-title">
                            Exclusive Events
                          </h3>
                          <p className="rk-event-card-location">
                            <span className="rk-event-card-location-icon">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.875 9.5875C5.81667 9.5875 5.7625 9.58125 5.7125 9.56875C5.6625 9.55625 5.61667 9.53333 5.575 9.5C4.53333 8.69167 3.76042 7.91458 3.25625 7.16875C2.75208 6.42292 2.5 5.68333 2.5 4.95C2.5 4.38333 2.60208 3.88542 2.80625 3.45625C3.01042 3.02708 3.275 2.66667 3.6 2.375C3.925 2.08333 4.2875 1.86458 4.6875 1.71875C5.0875 1.57292 5.48333 1.5 5.875 1.5C6.26667 1.5 6.6625 1.57292 7.0625 1.71875C7.4625 1.86458 7.825 2.08333 8.15 2.375C8.475 2.66667 8.73958 3.02708 8.94375 3.45625C9.14792 3.88542 9.25 4.38333 9.25 4.95C9.25 5.68333 8.99792 6.42292 8.49375 7.16875C7.98958 7.91458 7.21667 8.69167 6.175 9.5C6.13333 9.53333 6.0875 9.55625 6.0375 9.56875C5.9875 9.58125 5.93333 9.5875 5.875 9.5875ZM5.875 5.75C6.11667 5.75 6.32292 5.66458 6.49375 5.49375C6.66458 5.32292 6.75 5.11667 6.75 4.875C6.75 4.63333 6.66458 4.42708 6.49375 4.25625C6.32292 4.08542 6.11667 4 5.875 4C5.63333 4 5.42708 4.08542 5.25625 4.25625C5.08542 4.42708 5 4.63333 5 4.875C5 5.11667 5.08542 5.32292 5.25625 5.49375C5.42708 5.66458 5.63333 5.75 5.875 5.75ZM2.875 11.5C2.76667 11.5 2.67708 11.4646 2.60625 11.3938C2.53542 11.3229 2.5 11.2333 2.5 11.125C2.5 11.0167 2.53542 10.9271 2.60625 10.8562C2.67708 10.7854 2.76667 10.75 2.875 10.75H8.875C8.98333 10.75 9.07292 10.7854 9.14375 10.8562C9.21458 10.9271 9.25 11.0167 9.25 11.125C9.25 11.2333 9.21458 11.3229 9.14375 11.3938C9.07292 11.4646 8.98333 11.5 8.875 11.5H2.875Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img2.png"
                            alt="event-img2"
                            className="img-fluid"
                          />
                        </div>
                        <div className="rk-event-card-body">
                          <div className="rk-event-sponsor">
                            <div className="rk-event-sponsor-details">
                              <span className="rk-event-sponsor-img">
                                <img
                                  src="assets/images/sponsor-img.png"
                                  alt="sponsor-img"
                                  className="img-fluid"
                                />
                              </span>
                              <label className="rk-event-sponsor-name">
                                Dr chef
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.05 20.725L8.975 18.575L4.5 20.35C4.21667 20.5 3.9375 20.4917 3.6625 20.325C3.3875 20.1583 3.25 19.9083 3.25 19.575V5.625C3.25 5.40833 3.3125 5.21667 3.4375 5.05C3.5625 4.88333 3.725 4.75833 3.925 4.675L8.475 3.075C8.64167 3.025 8.80833 3 8.975 3C9.14167 3 9.30833 3.025 9.475 3.075L15.55 5.2L20 3.425C20.2833 3.29167 20.5625 3.30417 20.8375 3.4625C21.1125 3.62083 21.25 3.86667 21.25 4.2V18.325C21.25 18.5083 21.1875 18.6667 21.0625 18.8C20.9375 18.9333 20.7833 19.0333 20.6 19.1L16.05 20.725C15.8833 20.775 15.7167 20.8 15.55 20.8C15.3833 20.8 15.2167 20.775 15.05 20.725ZM14.7 19.025V6.4L9.8 4.75V17.375L14.7 19.025Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="rk-event-detail">
                            <p className="rk-event-time-date">
                              <span className="rk-event-date">
                                24’ May 2022
                              </span>{" "}
                              |<span className="rk-event-time"> 10:00 am</span>
                            </p>
                            <p className="rk-event-participate">
                              <span className="rk-event-participate-icon">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1019_3522)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#05AC93"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1019_3522">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                        transform="translate(0.25 0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="rk-event-participate-count">
                                96 /100
                              </span>
                            </p>
                          </div>
                          <h3 className="rk-event-card-title">
                            Exclusive Events
                          </h3>
                          <p className="rk-event-card-location">
                            <span className="rk-event-card-location-icon">
                              <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.875 9.5875C5.81667 9.5875 5.7625 9.58125 5.7125 9.56875C5.6625 9.55625 5.61667 9.53333 5.575 9.5C4.53333 8.69167 3.76042 7.91458 3.25625 7.16875C2.75208 6.42292 2.5 5.68333 2.5 4.95C2.5 4.38333 2.60208 3.88542 2.80625 3.45625C3.01042 3.02708 3.275 2.66667 3.6 2.375C3.925 2.08333 4.2875 1.86458 4.6875 1.71875C5.0875 1.57292 5.48333 1.5 5.875 1.5C6.26667 1.5 6.6625 1.57292 7.0625 1.71875C7.4625 1.86458 7.825 2.08333 8.15 2.375C8.475 2.66667 8.73958 3.02708 8.94375 3.45625C9.14792 3.88542 9.25 4.38333 9.25 4.95C9.25 5.68333 8.99792 6.42292 8.49375 7.16875C7.98958 7.91458 7.21667 8.69167 6.175 9.5C6.13333 9.53333 6.0875 9.55625 6.0375 9.56875C5.9875 9.58125 5.93333 9.5875 5.875 9.5875ZM5.875 5.75C6.11667 5.75 6.32292 5.66458 6.49375 5.49375C6.66458 5.32292 6.75 5.11667 6.75 4.875C6.75 4.63333 6.66458 4.42708 6.49375 4.25625C6.32292 4.08542 6.11667 4 5.875 4C5.63333 4 5.42708 4.08542 5.25625 4.25625C5.08542 4.42708 5 4.63333 5 4.875C5 5.11667 5.08542 5.32292 5.25625 5.49375C5.42708 5.66458 5.63333 5.75 5.875 5.75ZM2.875 11.5C2.76667 11.5 2.67708 11.4646 2.60625 11.3938C2.53542 11.3229 2.5 11.2333 2.5 11.125C2.5 11.0167 2.53542 10.9271 2.60625 10.8562C2.67708 10.7854 2.76667 10.75 2.875 10.75H8.875C8.98333 10.75 9.07292 10.7854 9.14375 10.8562C9.21458 10.9271 9.25 11.0167 9.25 11.125C9.25 11.2333 9.21458 11.3229 9.14375 11.3938C9.07292 11.4646 8.98333 11.5 8.875 11.5H2.875Z"
                                  fill="#05AC93"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="row">
                <div className="col col-12 col-md-12 col-lg-9">
                  <div className="rk-event-slider-heading">
                    <h2 className="rk-event-slider-title">Recent Events</h2>
                    <a className="rk-event-slider-link" href="#">
                      See All
                    </a>
                  </div>
                  <div className="rk-recent-events-content">
                    <div className="rk-recent-events-item">
                      <div className="rk-recent-events-img">
                        <img
                          src="assets/images/recent-event-img.png"
                          alt="recent-event-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="rk-recent-events-details">
                        <h3 className="rk-recent-events-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-recent-events-location">
                          <span className="rk-recent-events-location-icon">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.8335 12.6163C7.75572 12.6163 7.6835 12.608 7.61683 12.5913C7.55016 12.5747 7.48905 12.5441 7.4335 12.4997C6.04461 11.4219 5.01405 10.3858 4.34183 9.39134C3.66961 8.3969 3.3335 7.41079 3.3335 6.43301C3.3335 5.67745 3.46961 5.01356 3.74183 4.44134C4.01405 3.86912 4.36683 3.38856 4.80016 2.99967C5.2335 2.61079 5.71683 2.31912 6.25016 2.12467C6.7835 1.93023 7.31127 1.83301 7.8335 1.83301C8.35572 1.83301 8.8835 1.93023 9.41683 2.12467C9.95016 2.31912 10.4335 2.61079 10.8668 2.99967C11.3002 3.38856 11.6529 3.86912 11.9252 4.44134C12.1974 5.01356 12.3335 5.67745 12.3335 6.43301C12.3335 7.41079 11.9974 8.3969 11.3252 9.39134C10.6529 10.3858 9.62239 11.4219 8.2335 12.4997C8.17794 12.5441 8.11683 12.5747 8.05016 12.5913C7.9835 12.608 7.91127 12.6163 7.8335 12.6163ZM7.8335 7.49967C8.15572 7.49967 8.43072 7.38579 8.6585 7.15801C8.88627 6.93023 9.00016 6.65523 9.00016 6.33301C9.00016 6.01079 8.88627 5.73579 8.6585 5.50801C8.43072 5.28023 8.15572 5.16634 7.8335 5.16634C7.51127 5.16634 7.23627 5.28023 7.0085 5.50801C6.78072 5.73579 6.66683 6.01079 6.66683 6.33301C6.66683 6.65523 6.78072 6.93023 7.0085 7.15801C7.23627 7.38579 7.51127 7.49967 7.8335 7.49967ZM3.8335 15.1663C3.68905 15.1663 3.56961 15.1191 3.47516 15.0247C3.38072 14.9302 3.3335 14.8108 3.3335 14.6663C3.3335 14.5219 3.38072 14.4025 3.47516 14.308C3.56961 14.2136 3.68905 14.1663 3.8335 14.1663H11.8335C11.9779 14.1663 12.0974 14.2136 12.1918 14.308C12.2863 14.4025 12.3335 14.5219 12.3335 14.6663C12.3335 14.8108 12.2863 14.9302 12.1918 15.0247C12.0974 15.1191 11.9779 15.1663 11.8335 15.1663H3.8335Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <span>Bluffton, South Carolina, 29910</span>
                        </p>
                        <div className="rk-event-sponsor-details">
                          <span className="rk-event-sponsor-img">
                            <img
                              src="assets/images/sponsor-img.png"
                              alt="sponsor-img"
                              className="img-fluid"
                            />
                          </span>
                          <label className="rk-event-sponsor-name">
                            Dr chef
                          </label>
                        </div>
                      </div>
                      <div className="rk-recent-events-info">
                        <p className="rk-event-time-date">
                          <span className="rk-event-date">24’ May 2022</span> |
                          <span className="rk-event-time"> 10:00 am</span>
                        </p>
                        <p className="rk-event-participate">
                          <span className="rk-event-participate-icon">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.1665 13.517C1.02206 13.517 0.902615 13.4698 0.808171 13.3753C0.713726 13.2809 0.666504 13.1614 0.666504 13.017V11.9503C0.666504 11.5614 0.766504 11.2087 0.966504 10.892C1.1665 10.5753 1.44428 10.3392 1.79984 10.1837C2.61095 9.8281 3.3415 9.57255 3.9915 9.41699C4.6415 9.26144 5.31095 9.18366 5.99984 9.18366C6.68873 9.18366 7.35539 9.26144 7.99984 9.41699C8.64428 9.57255 9.37206 9.8281 10.1832 10.1837C10.5387 10.3392 10.8193 10.5753 11.0248 10.892C11.2304 11.2087 11.3332 11.5614 11.3332 11.9503V13.017C11.3332 13.1614 11.2859 13.2809 11.1915 13.3753C11.0971 13.4698 10.9776 13.517 10.8332 13.517H1.1665ZM11.9665 13.517C12.0776 13.4948 12.1665 13.4364 12.2332 13.342C12.2998 13.2475 12.3332 13.1281 12.3332 12.9837V11.9503C12.3332 11.2503 12.1554 10.6753 11.7998 10.2253C11.4443 9.77532 10.9776 9.41144 10.3998 9.13366C11.1665 9.22255 11.8887 9.3531 12.5665 9.52533C13.2443 9.69755 13.7943 9.89477 14.2165 10.117C14.5832 10.3281 14.8721 10.5892 15.0832 10.9003C15.2943 11.2114 15.3998 11.5614 15.3998 11.9503V13.017C15.3998 13.1614 15.3526 13.2809 15.2582 13.3753C15.1637 13.4698 15.0443 13.517 14.8998 13.517H11.9665ZM5.99984 8.16699C5.2665 8.16699 4.6665 7.93366 4.19984 7.46699C3.73317 7.00033 3.49984 6.40033 3.49984 5.66699C3.49984 4.93366 3.73317 4.33366 4.19984 3.86699C4.6665 3.40033 5.2665 3.16699 5.99984 3.16699C6.73317 3.16699 7.33317 3.40033 7.79984 3.86699C8.2665 4.33366 8.49984 4.93366 8.49984 5.66699C8.49984 6.40033 8.2665 7.00033 7.79984 7.46699C7.33317 7.93366 6.73317 8.16699 5.99984 8.16699ZM11.9998 5.66699C11.9998 6.40033 11.7665 7.00033 11.2998 7.46699C10.8332 7.93366 10.2332 8.16699 9.49984 8.16699C9.37761 8.16699 9.2415 8.15866 9.0915 8.14199C8.9415 8.12533 8.80539 8.09477 8.68317 8.05033C8.94984 7.77255 9.15261 7.43088 9.2915 7.02533C9.43039 6.61977 9.49984 6.16699 9.49984 5.66699C9.49984 5.16699 9.43039 4.72533 9.2915 4.34199C9.15261 3.95866 8.94984 3.60588 8.68317 3.28366C8.80539 3.25033 8.9415 3.22255 9.0915 3.20033C9.2415 3.1781 9.37761 3.16699 9.49984 3.16699C10.2332 3.16699 10.8332 3.40033 11.2998 3.86699C11.7665 4.33366 11.9998 4.93366 11.9998 5.66699Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <span className="rk-event-participate-count">
                            96 /100
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="rk-recent-events-item">
                      <div className="rk-recent-events-img">
                        <img
                          src="assets/images/recent-event-img2.png"
                          alt="recent-event-img2"
                          className="img-fluid"
                        />
                      </div>
                      <div className="rk-recent-events-details">
                        <h3 className="rk-recent-events-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-recent-events-location">
                          <span className="rk-recent-events-location-icon">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.8335 12.6163C7.75572 12.6163 7.6835 12.608 7.61683 12.5913C7.55016 12.5747 7.48905 12.5441 7.4335 12.4997C6.04461 11.4219 5.01405 10.3858 4.34183 9.39134C3.66961 8.3969 3.3335 7.41079 3.3335 6.43301C3.3335 5.67745 3.46961 5.01356 3.74183 4.44134C4.01405 3.86912 4.36683 3.38856 4.80016 2.99967C5.2335 2.61079 5.71683 2.31912 6.25016 2.12467C6.7835 1.93023 7.31127 1.83301 7.8335 1.83301C8.35572 1.83301 8.8835 1.93023 9.41683 2.12467C9.95016 2.31912 10.4335 2.61079 10.8668 2.99967C11.3002 3.38856 11.6529 3.86912 11.9252 4.44134C12.1974 5.01356 12.3335 5.67745 12.3335 6.43301C12.3335 7.41079 11.9974 8.3969 11.3252 9.39134C10.6529 10.3858 9.62239 11.4219 8.2335 12.4997C8.17794 12.5441 8.11683 12.5747 8.05016 12.5913C7.9835 12.608 7.91127 12.6163 7.8335 12.6163ZM7.8335 7.49967C8.15572 7.49967 8.43072 7.38579 8.6585 7.15801C8.88627 6.93023 9.00016 6.65523 9.00016 6.33301C9.00016 6.01079 8.88627 5.73579 8.6585 5.50801C8.43072 5.28023 8.15572 5.16634 7.8335 5.16634C7.51127 5.16634 7.23627 5.28023 7.0085 5.50801C6.78072 5.73579 6.66683 6.01079 6.66683 6.33301C6.66683 6.65523 6.78072 6.93023 7.0085 7.15801C7.23627 7.38579 7.51127 7.49967 7.8335 7.49967ZM3.8335 15.1663C3.68905 15.1663 3.56961 15.1191 3.47516 15.0247C3.38072 14.9302 3.3335 14.8108 3.3335 14.6663C3.3335 14.5219 3.38072 14.4025 3.47516 14.308C3.56961 14.2136 3.68905 14.1663 3.8335 14.1663H11.8335C11.9779 14.1663 12.0974 14.2136 12.1918 14.308C12.2863 14.4025 12.3335 14.5219 12.3335 14.6663C12.3335 14.8108 12.2863 14.9302 12.1918 15.0247C12.0974 15.1191 11.9779 15.1663 11.8335 15.1663H3.8335Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <span>Bluffton, South Carolina, 29910</span>
                        </p>
                        <div className="rk-event-sponsor-details">
                          <span className="rk-event-sponsor-img">
                            <img
                              src="assets/images/sponsor-img.png"
                              alt="sponsor-img"
                              className="img-fluid"
                            />
                          </span>
                          <label className="rk-event-sponsor-name">
                            Dr chef
                          </label>
                        </div>
                      </div>
                      <div className="rk-recent-events-info">
                        <p className="rk-event-time-date">
                          <span className="rk-event-date">24’ May 2022</span> |
                          <span className="rk-event-time"> 10:00 am</span>
                        </p>
                        <p className="rk-event-participate">
                          <span className="rk-event-participate-icon">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.1665 13.517C1.02206 13.517 0.902615 13.4698 0.808171 13.3753C0.713726 13.2809 0.666504 13.1614 0.666504 13.017V11.9503C0.666504 11.5614 0.766504 11.2087 0.966504 10.892C1.1665 10.5753 1.44428 10.3392 1.79984 10.1837C2.61095 9.8281 3.3415 9.57255 3.9915 9.41699C4.6415 9.26144 5.31095 9.18366 5.99984 9.18366C6.68873 9.18366 7.35539 9.26144 7.99984 9.41699C8.64428 9.57255 9.37206 9.8281 10.1832 10.1837C10.5387 10.3392 10.8193 10.5753 11.0248 10.892C11.2304 11.2087 11.3332 11.5614 11.3332 11.9503V13.017C11.3332 13.1614 11.2859 13.2809 11.1915 13.3753C11.0971 13.4698 10.9776 13.517 10.8332 13.517H1.1665ZM11.9665 13.517C12.0776 13.4948 12.1665 13.4364 12.2332 13.342C12.2998 13.2475 12.3332 13.1281 12.3332 12.9837V11.9503C12.3332 11.2503 12.1554 10.6753 11.7998 10.2253C11.4443 9.77532 10.9776 9.41144 10.3998 9.13366C11.1665 9.22255 11.8887 9.3531 12.5665 9.52533C13.2443 9.69755 13.7943 9.89477 14.2165 10.117C14.5832 10.3281 14.8721 10.5892 15.0832 10.9003C15.2943 11.2114 15.3998 11.5614 15.3998 11.9503V13.017C15.3998 13.1614 15.3526 13.2809 15.2582 13.3753C15.1637 13.4698 15.0443 13.517 14.8998 13.517H11.9665ZM5.99984 8.16699C5.2665 8.16699 4.6665 7.93366 4.19984 7.46699C3.73317 7.00033 3.49984 6.40033 3.49984 5.66699C3.49984 4.93366 3.73317 4.33366 4.19984 3.86699C4.6665 3.40033 5.2665 3.16699 5.99984 3.16699C6.73317 3.16699 7.33317 3.40033 7.79984 3.86699C8.2665 4.33366 8.49984 4.93366 8.49984 5.66699C8.49984 6.40033 8.2665 7.00033 7.79984 7.46699C7.33317 7.93366 6.73317 8.16699 5.99984 8.16699ZM11.9998 5.66699C11.9998 6.40033 11.7665 7.00033 11.2998 7.46699C10.8332 7.93366 10.2332 8.16699 9.49984 8.16699C9.37761 8.16699 9.2415 8.15866 9.0915 8.14199C8.9415 8.12533 8.80539 8.09477 8.68317 8.05033C8.94984 7.77255 9.15261 7.43088 9.2915 7.02533C9.43039 6.61977 9.49984 6.16699 9.49984 5.66699C9.49984 5.16699 9.43039 4.72533 9.2915 4.34199C9.15261 3.95866 8.94984 3.60588 8.68317 3.28366C8.80539 3.25033 8.9415 3.22255 9.0915 3.20033C9.2415 3.1781 9.37761 3.16699 9.49984 3.16699C10.2332 3.16699 10.8332 3.40033 11.2998 3.86699C11.7665 4.33366 11.9998 4.93366 11.9998 5.66699Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <span className="rk-event-participate-count">
                            96 /100
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-12 col-lg-3">
                  <div className="rk-event-book-content">
                    <h3 className="rk-event-book-title">
                      Book with more than <br />
                      30 peaople and claim it
                    </h3>
                    <div className="rk-event-book-img">
                      <img
                        src="assets/images/book-img.png"
                        alt="book-img"
                        className="img-fluid"
                      />
                    </div>
                    <a href="#" className="btn btn-secondary">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Landing Section End --> */}
        </main>
        {/* <!-- Site Content End --> */}
      </div>
    </>
  );
}
