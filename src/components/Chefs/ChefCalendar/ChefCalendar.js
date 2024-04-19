import React from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import CustomScrollBar from "../../utils/ScrollBar";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
export default function ChefCalendar() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  CustomScrollBar(".rk-schedule-calendar-area");

  return (
    <>
      <div className={state ? "rk-site" : "rk-site rk-menu-show"}>
        {/* <!-- Site Content Start --> */}
        <main class="rk-site-content">
          {/* <!-- Landing Section Start --> */}
          <section class="rk-dashboard-section">
            <SideNavbar />
            <div class="rk-dashboard-content-area" data-scrollbar>
              <div class="rk-dashboard-header">
                <HeaderLogo />
                <h1 class="rk-dashboard-user-name me-auto">
                  <span>Hi, </span> James Mary
                </h1>
                <span class="rk-dashboard-notification-icon">
                  <img
                    src="assets/images/notification-icon.png"
                    alt="notification-icon"
                    class="img-fluid"
                  />
                </span>
                <span className="rk-menu-icon" onClick={toggleList}>
                  <span class="rk-menu-icon__inner"></span>
                  <span class="rk-menu-icon__inner"></span>
                  <span class="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div class="rk-schedule-calendar-content">
                <div class="rk-schedule-calendar-header">
                  <div class="rk-schedule-calendar-detail">
                    <h3 class="rk-schedule-calendar-selected-month">
                      January 2021
                    </h3>
                    <div class="rk-schedule-calendar-select">
                      <select class="form-select rk-schedule-calendar-selected-type">
                        <option value="" selected>
                          Week
                        </option>
                        <option value="">Month</option>
                      </select>
                      <span class="rk-schedule-calendar-selecte-option">
                        <img
                          src="assets/images/date-select-arrow.png"
                          alt="date-select-arrow"
                          class="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="rk-schedule-calendar-detail">
                    <button class="btn btn-outline-success">
                      Create New Event
                    </button>
                    <div class="btn-group dropstart rk-more-action-dropdown">
                      <span
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="assets/images/more-icon.png"
                          alt="more-icon"
                          class="img-fluid"
                        />
                      </span>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item active" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="rk-schedule-calendar-body">
                  <div class="rk-schedule-calendar-area" data-scrollbar>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">MON</label>
                          <h5 class="rk-schedule-calendar-date">21</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">TUE</label>
                          <h5 class="rk-schedule-calendar-date">22</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">WED</label>
                          <h5 class="rk-schedule-calendar-date">23</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">THU</label>
                          <h5 class="rk-schedule-calendar-date">24</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">FRI</label>
                          <h5 class="rk-schedule-calendar-date">25</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
                    <div class="rk-schedule-calendar-list">
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info">
                          <label class="rk-schedule-calendar-day">SAT</label>
                          <h5 class="rk-schedule-calendar-date">26</h5>
                          <span class="rk-schedule-calendar-month">Jan</span>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info">
                          <div class="rk-schedule-calendar-event-info__inner">
                            <h5 class="rk-schedule-calendar-event-name">
                              Music Event
                            </h5>
                            <span class="rk-schedule-calendar-event-time">
                              8:00 - 11:30
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                      <div class="rk-schedule-calendar-item">
                        <div class="rk-schedule-calendar-info rk-schedule-calendar-event-info"></div>
                      </div>
                    </div>
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
