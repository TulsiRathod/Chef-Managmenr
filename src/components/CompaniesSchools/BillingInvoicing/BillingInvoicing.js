import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { Scrollbars } from "react-custom-scrollbars";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
export default function BillingInvoicing() {
  const navigate = useNavigate();
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
        <main className="rk-site-content">
          {/* <!-- Landing Section Start --> */}
          <section className="rk-dashboard-section">
            <SideNavbar />
            <div className="rk-dashboard-content-area" data-scrollbar>
              <div className="rk-dashboard-header rk-event-request-hrader rk-billing-invoice-hrader">
                <HeaderLogo />
                <h1 className="rk-dashboard-user-name">
                  <span>Billing & Invoicing </span>
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
                <span className="rk-menu-icon" onClick={toggleList}>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div className="rk-billing-content">
                <div className="row">
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6 col-lg-6">
                    <div className="rk-billing-content-card">
                      <div className="rk-billing-content-card-header">
                        <h3 className="rk-billing-card-title">
                          Exclusive Events
                        </h3>
                        <p className="rk-billing-card-amount-text">
                          <span> Total Amount:</span>{" "}
                          <span className="rk-billing-card-amount">
                            $35,000
                          </span>
                        </p>
                      </div>
                      <div className="rk-billing-content-card-body">
                        <div className="rk-billing-details">
                          <p className="rk-billing-tax">
                            <label className="rk-billing-tax-label">TAX:</label>
                            <span> 35%</span>
                          </p>
                          <p className="rk-billing-amount">
                            <label className="rk-billing-amount-label">
                              Billable Amount:
                            </label>
                            <span>$32,000</span>
                          </p>
                          <a href="#" className="btn btn-outline-success">
                            Download Invoice
                          </a>
                        </div>
                        <div className="rk-billing-status-content">
                          <span className="rk-billing-status">Paid</span>
                        </div>
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
