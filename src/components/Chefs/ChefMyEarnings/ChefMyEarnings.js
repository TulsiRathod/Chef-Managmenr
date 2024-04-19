import React from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import CustomScrollBar from "../../utils/ScrollBar";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
export default function ChefMyEarnings() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");

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
              <div class="rk-chef-total-earning-content">
                <div class="row">
                  <div class="col col-12 col-md-6 col-lg-4">
                    <div class="rk-chef-earning-card">
                      <div class="rk-chef-earning-card-icon">
                        <img
                          src="assets/images/rk-chef-earning-icon.png"
                          alt="rk-chef-earning-icon"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-earning-card-body">
                        <lable class="rk-chef-earning-label">
                          Total Earning Amount
                        </lable>
                        <h5 class="rk-chef-earning-amount">15,000,00</h5>
                        <p class="rk-chef-earning-description">
                          Compared to ($16,000,00 Last Year)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col col-12 col-md-6 col-lg-4">
                    <div class="rk-chef-earning-card rk-chef-earning-pending-amount-card">
                      <div class="rk-chef-earning-card-icon">
                        <img
                          src="assets/images/rk-chef-earning-icon.png"
                          alt="rk-chef-earning-icon"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-earning-card-body">
                        <lable class="rk-chef-earning-label">
                          Pending Amount
                        </lable>
                        <h5 class="rk-chef-earning-amount">2,000,00</h5>
                        <p class="rk-chef-earning-description">
                          Compared to ($16,000,00 Last Year)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col col-12 col-md-6 col-lg-4">
                    <div class="rk-chef-earning-card rk-chef-earning-available-amount-card">
                      <div class="rk-chef-earning-card-icon">
                        <img
                          src="assets/images/rk-chef-earning-icon.png"
                          alt="rk-chef-earning-icon"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-earning-card-body">
                        <lable class="rk-chef-earning-label">
                          Available Earning
                        </lable>
                        <h5 class="rk-chef-earning-amount">13,000,00</h5>
                        <p class="rk-chef-earning-description">
                          Compared to ($16,000,00 Last Year)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rk-chef-event-earning-content">
                <div class="rk-chef-event-earning-header">
                  <h3 class="rk-chef-event-earning-title">
                    Event Wise Earning
                  </h3>
                  <span class="rk-chef-event-earning-filter">
                    <img
                      src="assets/images/filter-icon.png"
                      alt="filter-icon"
                      class="img-fluid"
                    />
                  </span>
                </div>
                <div class="table-responsive">
                  <table class="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Earning</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img1.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">Jimmie Jay</span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">25,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img2.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">Wade Warren</span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">35,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img3.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">
                              Leslie Alexander
                            </span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">25,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status rk-chef-event-amount-status-unpaid">
                            UNPAID
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img4.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">Guy Hawkins</span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">35,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img5.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">Jacob Jones</span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">1,02,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status rk-chef-event-amount-status-unpaid">
                            UNPAID
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img6.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">
                              Kristin Watson
                            </span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">25,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img7.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">Cody Fisher</span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">12,00,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img8.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">
                              Savannah Nguyen
                            </span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">25,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status">PAID</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="rk-event-owner">
                            <span class="rk-event-owner-img">
                              <img
                                src="assets/images/event-owner-img9.png"
                                alt="event-owner-img"
                                class="img-fluid"
                              />
                            </span>
                            <span class="rk-event-owner-name">
                              Ralph Edwards
                            </span>
                          </div>
                        </td>
                        <td>
                          <span class="rk-chef-event-name">
                            Exclusive Events
                          </span>
                        </td>
                        <td>
                          <span class="rk-chef-event-date">24’ May 2022</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-earning">25,000</span>
                        </td>
                        <td>
                          <span class="rk-chef-event-amount-status rk-chef-event-amount-status-unpaid">
                            UNPAID
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
