import React, { useEffect } from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { ChartChefPayout } from "../../utils/chart";
import CustomScrollBar from "../../utils/ScrollBar";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
export default function ChefPayout() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");

  useEffect(() => {
    ChartChefPayout();
  }, []);

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
              <div class="rk-chef-payout-content">
                <div class="rk-chef-payout-detail">
                  <div class="rk-chef-payout-detail_inner">
                    <div class="rk-chef-payout-card">
                      <div class="rk-payout-card-icon">
                        <img
                          src="assets/images/rk-chef-earning-icon.png"
                          alt="rk-chef-earning-icon"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-payout-card-body">
                        <lable class="rk-payout-label">
                          Total Earning Amount
                        </lable>
                        <h5 class="rk-payout-amount">15,000,00</h5>
                        <p class="rk-payout-description">
                          Compared to ($16,000,00 Last Year)
                        </p>
                      </div>
                    </div>
                    <div class="rk-payout-card-btn">
                      <button
                        class="btn btn-success btn-custom"
                        data-bs-toggle="modal"
                        data-bs-target="#withdrawMoneyModal"
                      >
                        WIthdraw Money
                      </button>
                      &nbsp;
                      <button
                        class="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#transactionHistoryModal"
                      >
                        Transaction History
                      </button>
                    </div>
                  </div>
                  <div class="rk-chef-payout-detail_inner">
                    <div class="rk-chef-payout-chart">
                      <canvas id="myEarningChart"></canvas>
                    </div>
                  </div>
                </div>
                <div class="rk-chef-added-bank-content">
                  <h3 class="rk-chef-added-bank-title">Added Bank</h3>
                  <div class="rk-chef-added-bank-list">
                    <div class="rk-chef-added-bank-item">
                      <div class="rk-chef-added-bank-logo">
                        <img
                          src="assets/images/bank-logo1.png"
                          alt="bank logo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-added-bank-detail">
                        <h3 class="rk-chef-added-bank-acount">
                          <span class="rk-chef-added-bank-acount-number">
                            xxxx 4371
                          </span>
                          <span class="rk-chef-added-bank-type">(Credit)</span>
                        </h3>
                      </div>
                    </div>
                    <div class="rk-chef-added-bank-item">
                      <div class="rk-chef-added-bank-logo">
                        <img
                          src="assets/images/bank-logo2.png"
                          alt="bank logo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-added-bank-detail">
                        <h3 class="rk-chef-added-bank-acount">
                          <span class="rk-chef-added-bank-acount-number">
                            xxxx 4371
                          </span>
                          <span class="rk-chef-added-bank-type">(Credit)</span>
                        </h3>
                      </div>
                    </div>
                    <div class="rk-chef-added-bank-item">
                      <div class="rk-chef-added-bank-logo">
                        <img
                          src="assets/images/bank-logo3.png"
                          alt="bank logo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-added-bank-detail">
                        <h3 class="rk-chef-added-bank-acount">
                          <span class="rk-chef-added-bank-acount-number">
                            xxxx 5456
                          </span>
                          <span class="rk-chef-added-bank-type">(Credit)</span>
                        </h3>
                      </div>
                    </div>
                    <div class="rk-chef-added-bank-item">
                      <div class="rk-chef-added-bank-logo">
                        <img
                          src="assets/images/bank-logo4.png"
                          alt="bank logo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-chef-added-bank-detail">
                        <h3 class="rk-chef-added-bank-acount">
                          <span class="rk-chef-added-bank-acount-number">
                            xxxx 4371
                          </span>
                          <span class="rk-chef-added-bank-type">(Credit)</span>
                        </h3>
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
            class="modal fade rk-side-modal"
            id="transactionHistoryModal"
            tabindex="-1"
            aria-labelledby="transactionHistoryModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <form action="book-request-event.html">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="transactionHistoryModalLabel">
                      <span class="rk-modal-title-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.4498 17.3997L3.5248 12.4997C3.44147 12.4163 3.38314 12.333 3.3498 12.2497C3.31647 12.1663 3.2998 12.0747 3.2998 11.9747C3.2998 11.8747 3.31647 11.783 3.3498 11.6997C3.38314 11.6163 3.44147 11.533 3.5248 11.4497L8.4498 6.52468C8.58314 6.39135 8.75814 6.32051 8.9748 6.31218C9.19147 6.30385 9.3748 6.37468 9.5248 6.52468C9.6748 6.67468 9.7498 6.85385 9.7498 7.06218C9.7498 7.27051 9.6748 7.44968 9.5248 7.59968L5.8998 11.2247H20.2498C20.4665 11.2247 20.6456 11.2955 20.7873 11.4372C20.929 11.5788 20.9998 11.758 20.9998 11.9747C20.9998 12.1913 20.929 12.3705 20.7873 12.5122C20.6456 12.6538 20.4665 12.7247 20.2498 12.7247H5.8998L9.5248 16.3497C9.65814 16.483 9.72897 16.6538 9.7373 16.8622C9.74564 17.0705 9.6748 17.2497 9.5248 17.3997C9.3748 17.5497 9.19564 17.6247 8.9873 17.6247C8.77897 17.6247 8.5998 17.5497 8.4498 17.3997Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span>Transaction History</span>
                    </h5>
                  </div>
                  <div class="modal-body" data-scrollbar>
                    <div class="rk-modal-form-content">
                      <div class="rk-tansaction-history-list">
                        <div class="rk-tansaction-history-card">
                          <div class="rk-tansaction-history-header">
                            <div class="rk-tansaction-history-header__inner">
                              <label class="rk-tansaction-history-label">
                                Withdraw Amount
                              </label>
                              <h3 class="rk-tansaction-history-amount">$500</h3>
                            </div>
                            <div class="rk-tansaction-history-header__inner">
                              <label class="rk-tansaction-history-label">
                                Status
                              </label>
                              <h5 class="rk-tansaction-history-status">
                                Withdrawal Successful
                              </h5>
                            </div>
                          </div>
                          <div class="rk-tansaction-history-body">
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Request Date
                              </label>
                              <h5 class="rk-tansaction-history-detail-value">
                                13-Jun-2022, 7:09pm
                              </h5>
                            </div>
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Withdrawal ID
                              </label>
                              <h5 class="rk-tansaction-history-detail-value">
                                532648921
                              </h5>
                            </div>
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Successful On
                              </label>
                              <h5 class="rk-tansaction-history-detail-value rk-tansaction-history-stus-date">
                                13-Jun-2022
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div class="rk-tansaction-history-card">
                          <div class="rk-tansaction-history-header">
                            <div class="rk-tansaction-history-header__inner">
                              <label class="rk-tansaction-history-label">
                                Withdraw Amount
                              </label>
                              <h3 class="rk-tansaction-history-amount">$500</h3>
                            </div>
                            <div class="rk-tansaction-history-header__inner">
                              <label class="rk-tansaction-history-label">
                                Status
                              </label>
                              <h5 class="rk-tansaction-history-status text-danger">
                                Withdrawal Successful
                              </h5>
                            </div>
                          </div>
                          <div class="rk-tansaction-history-body">
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Request Date
                              </label>
                              <h5 class="rk-tansaction-history-detail-value">
                                13-Jun-2022, 7:09pm
                              </h5>
                            </div>
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Withdrawal ID
                              </label>
                              <h5 class="rk-tansaction-history-detail-value">
                                532648921
                              </h5>
                            </div>
                            <div class="rk-tansaction-history-detail">
                              <label class="rk-tansaction-history-detail-label">
                                Successful On
                              </label>
                              <h5 class="rk-tansaction-history-detail-value rk-tansaction-history-stus-date">
                                13-Jun-2022
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="submit"
                      class="btn btn-success btn-custom w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Events Request Modal End --> */}

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="withdrawMoneyModal"
            tabindex="-1"
            aria-labelledby="withdrawMoneyModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="rk-withdraw-money-content">
                    <div class="rk-chef-payout-card">
                      <div class="rk-payout-card-icon">
                        <img
                          src="assets/images/rk-chef-earning-icon.png"
                          alt="rk-chef-earning-icon"
                          class="img-fluid"
                        />
                      </div>
                      <div class="rk-payout-card-body">
                        <lable class="rk-payout-label">
                          Total Earning Amount
                        </lable>
                        <h5 class="rk-payout-amount">15,000,00</h5>
                      </div>
                    </div>
                    <div class="rk-withdraw-amount-input">
                      <label class="form-label">Withdraw Amount</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Withdraw Amount"
                      />
                      <p class="rk-withdraw-amount-notes">
                        <span class="rk-withdraw-amount-notes-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0626 14.167C10.2431 14.167 10.3924 14.108 10.5105 13.9899C10.6286 13.8719 10.6876 13.7225 10.6876 13.542V9.77116C10.6876 9.60449 10.6251 9.46213 10.5001 9.34408C10.3751 9.22602 10.2292 9.16699 10.0626 9.16699C9.88203 9.16699 9.73272 9.22602 9.61467 9.34408C9.49661 9.46213 9.43758 9.61144 9.43758 9.79199V13.5628C9.43758 13.7295 9.50008 13.8719 9.62508 13.9899C9.75008 14.108 9.89592 14.167 10.0626 14.167ZM10.0001 7.62533C10.1945 7.62533 10.3577 7.56283 10.4897 7.43783C10.6216 7.31283 10.6876 7.1531 10.6876 6.95866C10.6876 6.76421 10.6216 6.59755 10.4897 6.45866C10.3577 6.31977 10.1945 6.25033 10.0001 6.25033C9.80564 6.25033 9.64244 6.31977 9.5105 6.45866C9.37855 6.59755 9.31258 6.76421 9.31258 6.95866C9.31258 7.1531 9.37855 7.31283 9.5105 7.43783C9.64244 7.56283 9.80564 7.62533 10.0001 7.62533ZM10.0001 18.3337C8.81953 18.3337 7.7223 18.1219 6.70842 17.6982C5.69453 17.2746 4.81258 16.6878 4.06258 15.9378C3.31258 15.1878 2.72578 14.3059 2.30216 13.292C1.87855 12.2781 1.66675 11.1809 1.66675 10.0003C1.66675 8.83366 1.87855 7.74338 2.30216 6.72949C2.72578 5.7156 3.31258 4.83366 4.06258 4.08366C4.81258 3.33366 5.69453 2.74338 6.70842 2.31283C7.7223 1.88227 8.81953 1.66699 10.0001 1.66699C11.1667 1.66699 12.257 1.88227 13.2709 2.31283C14.2848 2.74338 15.1667 3.33366 15.9167 4.08366C16.6667 4.83366 17.257 5.7156 17.6876 6.72949C18.1181 7.74338 18.3334 8.83366 18.3334 10.0003C18.3334 11.1809 18.1181 12.2781 17.6876 13.292C17.257 14.3059 16.6667 15.1878 15.9167 15.9378C15.1667 16.6878 14.2848 17.2746 13.2709 17.6982C12.257 18.1219 11.1667 18.3337 10.0001 18.3337ZM10.0001 17.0837C11.9445 17.0837 13.6112 16.3892 15.0001 15.0003C16.389 13.6114 17.0834 11.9448 17.0834 10.0003C17.0834 8.05588 16.389 6.38921 15.0001 5.00033C13.6112 3.61144 11.9445 2.91699 10.0001 2.91699C8.05564 2.91699 6.38897 3.61144 5.00008 5.00033C3.61119 6.38921 2.91675 8.05588 2.91675 10.0003C2.91675 11.9448 3.61119 13.6114 5.00008 15.0003C6.38897 16.3892 8.05564 17.0837 10.0001 17.0837Z"
                              fill="#F2994A"
                            />
                          </svg>
                        </span>
                        <span>
                          &nbsp;The transaction may be processed in 2 to 3
                          working days.
                        </span>
                      </p>
                    </div>
                    <div class="fw-select-bank-content">
                      <label class="fw-select-bank-label">Select to Bank</label>
                      <div class="fw-select-bank-list">
                        <div class="rk-chef-added-bank-item">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="selectBankRadio"
                              id="selectBankRadio1"
                            />
                            <label
                              class="form-check-label"
                              for="selectBankRadio1"
                            ></label>
                          </div>
                          <div class="rk-chef-added-bank-logo">
                            <img
                              src="assets/images/bank-logo1.png"
                              alt="bank logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="rk-chef-added-bank-detail">
                            <h3 class="rk-chef-added-bank-acount">
                              <span class="rk-chef-added-bank-acount-number">
                                xxxx 4371
                                <br />
                              </span>
                              <span class="rk-chef-added-bank-type">
                                (Credit)
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div class="rk-chef-added-bank-item">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="selectBankRadio"
                              id="selectBankRadio2"
                            />
                            <label
                              class="form-check-label"
                              for="selectBankRadio2"
                            ></label>
                          </div>
                          <div class="rk-chef-added-bank-logo">
                            <img
                              src="assets/images/bank-logo2.png"
                              alt="bank logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="rk-chef-added-bank-detail">
                            <h3 class="rk-chef-added-bank-acount">
                              <span class="rk-chef-added-bank-acount-number">
                                xxxx 4371
                                <br />
                              </span>
                              <span class="rk-chef-added-bank-type">
                                (Credit)
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div class="rk-chef-added-bank-item">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="selectBankRadio"
                              id="selectBankRadio3"
                            />
                            <label
                              class="form-check-label"
                              for="selectBankRadio3"
                            ></label>
                          </div>
                          <div class="rk-chef-added-bank-logo">
                            <img
                              src="assets/images/bank-logo3.png"
                              alt="bank logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="rk-chef-added-bank-detail">
                            <h3 class="rk-chef-added-bank-acount">
                              <span class="rk-chef-added-bank-acount-number">
                                xxxx 5456
                                <br />
                              </span>
                              <span class="rk-chef-added-bank-type">
                                (Credit)
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div class="rk-chef-added-bank-item">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="selectBankRadio"
                              id="selectBankRadio4"
                            />
                            <label
                              class="form-check-label"
                              for="selectBankRadio4"
                            ></label>
                          </div>
                          <div class="rk-chef-added-bank-logo">
                            <img
                              src="assets/images/bank-logo4.png"
                              alt="bank logo"
                              class="img-fluid"
                            />
                          </div>
                          <div class="rk-chef-added-bank-detail">
                            <h3 class="rk-chef-added-bank-acount">
                              <span class="rk-chef-added-bank-acount-number">
                                xxxx 4371
                                <br />
                              </span>
                              <span class="rk-chef-added-bank-type">
                                (Credit)
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn  btn-outline-success w-100">
                      WIthdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- Site Content End --> */}
      </div>
    </>
  );
}
