import React, { useState } from "react";
import SideNavbar from "../includes/SideNavbar";
import HeaderLogo from "../includes/HeaderLogo";
import CustomScrollBar from "../../utils/ScrollBar";

// import { useSelector, useDispatch } from "react-redux";
// import { toggle } from "../../redux/actions/index";

export default function ChefManageQr() {
const [qr, setQr] = useState(1);
// const state = useSelector((state) => state.setToggle);
// const dispatcher = useDispatch();

// function toggleList(event) {
// event.currentTarget.classList.toggle("rk-menu-icon-active");
// dispatcher(toggle());
// }
// CustomScrollBar(".rk-dashboard-content-area");
// CustomScrollBar(".rk-message-user-list");
// CustomScrollBar(".rk-user-chat-body");
return (
<div className="rk-site">
    <main className="rk-site-content">
        <section className="rk-qr-section">
            <SideNavbar />
            <div className="rk-dashboard-content-area" data-scrollbar>
                <div className="rk-dashboard-header">
                    <div className="rk-site-header-logo">
                        <a className="navbar-brand" href="#">
                            <img src="assets/images/logo.png" alt="logo" className="img-fluid" />
                        </a>
                    </div>
                    <h1 className="rk-dashboard-user-name me-auto">
                        <span>Hi, </span> James Mary
                    </h1>
                    <div className="rk-dashboard-header-search">
                        <input type="email" className="form-control" placeholder="search" />
                        <img src="assets/images/search-icon.png" alt="search-icon" className="img-fluid" />
                    </div>
                    <span className="rk-dashboard-notification-icon">
                        <img src="assets/images/notification-icon.png" alt="notification-icon" className="img-fluid" />
                    </span>
                    <span className="rk-menu-icon">
                        <span className="rk-menu-icon__inner"></span>
                        <span className="rk-menu-icon__inner"></span>
                        <span className="rk-menu-icon__inner"></span>
                    </span>
                </div>

                {qr === 0 ? (
                <div className="rk-qr-code-content ">
                    <div className="rk-QR-img">
                        <img src="assets/images/big-black-qr-code.svg" alt="no-event-img" className="img-fluid" />
                    </div>
                    <h2 className="rk-no-event-title">No QR Code Generated</h2>
                    <p className="rk-no-event-description">
                        You have not created any QR Code Please click to create New QR
                        code
                    </p>
                    <button type="button" className="btn btn-success btn-custom" data-bs-toggle="modal"
                        data-bs-target="#transactionHistoryModal">
                        Create QR code
                    </button>
                </div>
                ) : (
                <>
                    <div className="row d-flex justify-content-between ">
                        <div className="col rk-qr-list-title">
                            <p>Events QR Codes</p>
                        </div>
                        <div className="col rk-qr-list-title" style={{ textAlign: "right" }}>
                        <button type="button" className="btn btn-success btn-custom" data-bs-toggle="modal"
                        data-bs-target="#transactionHistoryModal">
                        Create QR code
                    </button>
                        </div>
                    </div>

                    <div className="container-fluid my-2">
                        <div className="row  d-flex justify-content-around" style={{ display: "inline-table" }}>
                            <div className="col-4 p-4 ">
                                <div className="rk-qr-generatedbox " style={{ textAlign: "center" }}>
                                    <img src="./assets/images/small-black-qr-code.svg" className="m-3" alt="" />
                                    <br />
                                    <img src="./assets/images/gradient-line.svg" className="my-2" alt="" />
                                    <div className="row px-3">
                                        <div className="col qr-text" style={{ textAlign: "left" }}>
                                            <p> Exclusive Events</p>
                                        </div>
                                        <div className="col qr-text" style={{ textAlign: "right" }}>
                                            <svg width="30" height="30" viewBox="0 0 41 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.12512 37.406L12.508 34.1192L15.6787 37.29C16.167 37.7782 16.958 37.7782 17.4464 37.29L20.5 34.2365L23.5536 37.2901C24.0419 37.7784 24.8329 37.7784 25.3213 37.2901L28.492 34.1194L32.8749 37.4061C33.0959 37.5715 33.3595 37.6564 33.625 37.6564C33.8154 37.6564 34.0071 37.613 34.1841 37.5245C34.6076 37.3126 34.875 36.8799 34.875 36.4062V3.59375C34.875 2.9035 34.3153 2.34375 33.625 2.34375L7.375 2.34375C6.68475 2.34375 6.125 2.9035 6.125 3.59375L6.125 36.4062C6.125 36.8799 6.39238 37.3126 6.81588 37.5244C7.23763 37.7356 7.74425 37.6899 8.12512 37.406ZM8.625 4.84375L32.375 4.84375V33.9062L29.1249 31.4691C28.6256 31.095 27.9298 31.145 27.491 31.5851L24.4374 34.6387L21.3838 31.5851C21.1396 31.341 20.8197 31.2189 20.5 31.2189C20.1803 31.2189 19.8604 31.341 19.6163 31.5851L16.5626 34.6387L13.509 31.5851C13.0695 31.145 12.3731 31.095 11.8751 31.4691L8.625 33.9062L8.625 4.84375Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 25.8438H27.0625C27.7528 25.8438 28.3125 25.284 28.3125 24.5938C28.3125 23.9035 27.7528 23.3438 27.0625 23.3438H13.9375C13.2472 23.3438 12.6875 23.9035 12.6875 24.5938C12.6875 25.284 13.2472 25.8438 13.9375 25.8438Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 19.2812H27.0625C27.7528 19.2812 28.3125 18.7215 28.3125 18.0312C28.3125 17.341 27.7528 16.7812 27.0625 16.7812H13.9375C13.2472 16.7812 12.6875 17.341 12.6875 18.0312C12.6875 18.7215 13.2472 19.2812 13.9375 19.2812Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 12.7188H27.0625C27.7528 12.7188 28.3125 12.159 28.3125 11.4688C28.3125 10.7785 27.7528 10.2188 27.0625 10.2188H13.9375C13.2472 10.2188 12.6875 10.7785 12.6875 11.4688C12.6875 12.159 13.2472 12.7188 13.9375 12.7188Z"
                                                    fill="#5B5D6B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row my-2 d-flex justify-content-center">
                                        <div className="col-md-5 ">
                                            <a href="" className="btn btn-success btn-custom w-100">
                                                Manage QR Code
                                            </a>
                                        </div>
                                        <div className="col-md-5 ">
                                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal"
                                                data-bs-target="#cancelinvitesModal">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-4 ">
                                <div className="rk-qr-generatedbox " style={{ textAlign: "center" }}>
                                    <img src="./assets/images/small-yellow-qr-code.svg" className="m-3" alt=""
                                        srcset="" />
                                    <br />
                                    <img src="./assets/images/gradient-line.svg" className="my-2" alt="" srcset="" />
                                    <div className="row mx-3">
                                        <div className="col qr-text" style={{ textAlign: "left" }}>
                                            <p> Exclusive Events</p>
                                        </div>
                                        <div className="col qr-text" style={{ textAlign: "right" }}>
                                            <svg width="30" height="30" viewBox="0 0 41 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.12512 37.406L12.508 34.1192L15.6787 37.29C16.167 37.7782 16.958 37.7782 17.4464 37.29L20.5 34.2365L23.5536 37.2901C24.0419 37.7784 24.8329 37.7784 25.3213 37.2901L28.492 34.1194L32.8749 37.4061C33.0959 37.5715 33.3595 37.6564 33.625 37.6564C33.8154 37.6564 34.0071 37.613 34.1841 37.5245C34.6076 37.3126 34.875 36.8799 34.875 36.4062V3.59375C34.875 2.9035 34.3153 2.34375 33.625 2.34375L7.375 2.34375C6.68475 2.34375 6.125 2.9035 6.125 3.59375L6.125 36.4062C6.125 36.8799 6.39238 37.3126 6.81588 37.5244C7.23763 37.7356 7.74425 37.6899 8.12512 37.406ZM8.625 4.84375L32.375 4.84375V33.9062L29.1249 31.4691C28.6256 31.095 27.9298 31.145 27.491 31.5851L24.4374 34.6387L21.3838 31.5851C21.1396 31.341 20.8197 31.2189 20.5 31.2189C20.1803 31.2189 19.8604 31.341 19.6163 31.5851L16.5626 34.6387L13.509 31.5851C13.0695 31.145 12.3731 31.095 11.8751 31.4691L8.625 33.9062L8.625 4.84375Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 25.8438H27.0625C27.7528 25.8438 28.3125 25.284 28.3125 24.5938C28.3125 23.9035 27.7528 23.3438 27.0625 23.3438H13.9375C13.2472 23.3438 12.6875 23.9035 12.6875 24.5938C12.6875 25.284 13.2472 25.8438 13.9375 25.8438Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 19.2812H27.0625C27.7528 19.2812 28.3125 18.7215 28.3125 18.0312C28.3125 17.341 27.7528 16.7812 27.0625 16.7812H13.9375C13.2472 16.7812 12.6875 17.341 12.6875 18.0312C12.6875 18.7215 13.2472 19.2812 13.9375 19.2812Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 12.7188H27.0625C27.7528 12.7188 28.3125 12.159 28.3125 11.4688C28.3125 10.7785 27.7528 10.2188 27.0625 10.2188H13.9375C13.2472 10.2188 12.6875 10.7785 12.6875 11.4688C12.6875 12.159 13.2472 12.7188 13.9375 12.7188Z"
                                                    fill="#5B5D6B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row my-2 d-flex justify-content-center">
                                        <div className="col-md-5 ">
                                            <a href="./chef-QR-list.html" className="btn btn-success btn-custom  w-100">
                                                Manage QR Code
                                            </a>
                                        </div>
                                        <div className="col-md-5 ">
                                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal"
                                                data-bs-target="#cancelinvitesModal">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-4 ">
                                <div className="rk-qr-generatedbox " style={{ textAlign: "center" }}>
                                    <img src="./assets/images/small-blue-qr-code.svg" className="m-3" alt=""
                                        srcset="" />
                                    <br />
                                    <img src="./assets/images/gradient-line.svg" className="my-2" alt="" srcset="" />
                                    <div className="row px-3">
                                        <div className="col qr-text" style={{ textAlign: "left" }}>
                                            <p> Exclusive Events</p>
                                        </div>
                                        <div className="col qr-text" style={{ textAlign: "right" }}>
                                            <svg width="30" height="30" viewBox="0 0 41 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.12512 37.406L12.508 34.1192L15.6787 37.29C16.167 37.7782 16.958 37.7782 17.4464 37.29L20.5 34.2365L23.5536 37.2901C24.0419 37.7784 24.8329 37.7784 25.3213 37.2901L28.492 34.1194L32.8749 37.4061C33.0959 37.5715 33.3595 37.6564 33.625 37.6564C33.8154 37.6564 34.0071 37.613 34.1841 37.5245C34.6076 37.3126 34.875 36.8799 34.875 36.4062V3.59375C34.875 2.9035 34.3153 2.34375 33.625 2.34375L7.375 2.34375C6.68475 2.34375 6.125 2.9035 6.125 3.59375L6.125 36.4062C6.125 36.8799 6.39238 37.3126 6.81588 37.5244C7.23763 37.7356 7.74425 37.6899 8.12512 37.406ZM8.625 4.84375L32.375 4.84375V33.9062L29.1249 31.4691C28.6256 31.095 27.9298 31.145 27.491 31.5851L24.4374 34.6387L21.3838 31.5851C21.1396 31.341 20.8197 31.2189 20.5 31.2189C20.1803 31.2189 19.8604 31.341 19.6163 31.5851L16.5626 34.6387L13.509 31.5851C13.0695 31.145 12.3731 31.095 11.8751 31.4691L8.625 33.9062L8.625 4.84375Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 25.8438H27.0625C27.7528 25.8438 28.3125 25.284 28.3125 24.5938C28.3125 23.9035 27.7528 23.3438 27.0625 23.3438H13.9375C13.2472 23.3438 12.6875 23.9035 12.6875 24.5938C12.6875 25.284 13.2472 25.8438 13.9375 25.8438Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 19.2812H27.0625C27.7528 19.2812 28.3125 18.7215 28.3125 18.0312C28.3125 17.341 27.7528 16.7812 27.0625 16.7812H13.9375C13.2472 16.7812 12.6875 17.341 12.6875 18.0312C12.6875 18.7215 13.2472 19.2812 13.9375 19.2812Z"
                                                    fill="#5B5D6B" />
                                                <path
                                                    d="M13.9375 12.7188H27.0625C27.7528 12.7188 28.3125 12.159 28.3125 11.4688C28.3125 10.7785 27.7528 10.2188 27.0625 10.2188H13.9375C13.2472 10.2188 12.6875 10.7785 12.6875 11.4688C12.6875 12.159 13.2472 12.7188 13.9375 12.7188Z"
                                                    fill="#5B5D6B" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="row my-2 d-flex justify-content-center">
                                        <div className="col-md-5 ">
                                            <button class="btn btn-success btn-custom" data-bs-toggle="modal"
                                                data-bs-target="#withdrawMoneyModal">
                                                Manage Qr Code
                                            </button>
                                        </div>
                                        <div className="col-md-5 ">
                                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal"
                                                data-bs-target="#cancelinvitesModal">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </section>

        <div className="modal fade rk-side-modal" id="transactionHistoryModal" tabindex="-1"
            aria-labelledby="EventsRequestModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <form action="book-request-event.html">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EventsRequestModalLabel">
                                <span className="rk-modal-title-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.5 9.75C4.69891 9.75 4.88968 9.67098 5.03033 9.53033C5.17098 9.38968 5.25 9.19891 5.25 9V5.25H9C9.19891 5.25 9.38968 5.17098 9.53033 5.03033C9.67098 4.88968 9.75 4.69891 9.75 4.5C9.75 4.30109 9.67098 4.11032 9.53033 3.96967C9.38968 3.82902 9.19891 3.75 9 3.75H4.5C4.30109 3.75 4.11032 3.82902 3.96967 3.96967C3.82902 4.11032 3.75 4.30109 3.75 4.5V9C3.75 9.19891 3.82902 9.38968 3.96967 9.53033C4.11032 9.67098 4.30109 9.75 4.5 9.75Z"
                                            fill="black" />
                                        <path
                                            d="M15 5.25H18.75V9C18.75 9.19891 18.829 9.38968 18.9697 9.53033C19.1103 9.67098 19.3011 9.75 19.5 9.75C19.6989 9.75 19.8897 9.67098 20.0303 9.53033C20.171 9.38968 20.25 9.19891 20.25 9V4.5C20.25 4.30109 20.171 4.11032 20.0303 3.96967C19.8897 3.82902 19.6989 3.75 19.5 3.75H15C14.8011 3.75 14.6103 3.82902 14.4697 3.96967C14.329 4.11032 14.25 4.30109 14.25 4.5C14.25 4.69891 14.329 4.88968 14.4697 5.03033C14.6103 5.17098 14.8011 5.25 15 5.25Z"
                                            fill="black" />
                                        <path
                                            d="M9 18.75H5.25V15C5.25 14.8011 5.17098 14.6103 5.03033 14.4697C4.88968 14.329 4.69891 14.25 4.5 14.25C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9C9.19891 20.25 9.38968 20.171 9.53033 20.0303C9.67098 19.8897 9.75 19.6989 9.75 19.5C9.75 19.3011 9.67098 19.1103 9.53033 18.9697C9.38968 18.829 9.19891 18.75 9 18.75Z"
                                            fill="black" />
                                        <path
                                            d="M19.5 14.25C19.3011 14.25 19.1103 14.329 18.9697 14.4697C18.829 14.6103 18.75 14.8011 18.75 15V18.75H15C14.8011 18.75 14.6103 18.829 14.4697 18.9697C14.329 19.1103 14.25 19.3011 14.25 19.5C14.25 19.6989 14.329 19.8897 14.4697 20.0303C14.6103 20.171 14.8011 20.25 15 20.25H19.5C19.6989 20.25 19.8897 20.171 20.0303 20.0303C20.171 19.8897 20.25 19.6989 20.25 19.5V15C20.25 14.8011 20.171 14.6103 20.0303 14.4697C19.8897 14.329 19.6989 14.25 19.5 14.25Z"
                                            fill="black" />
                                        <path
                                            d="M22.5 11.25H1.5C1.30109 11.25 1.11032 11.329 0.96967 11.4697C0.829018 11.6103 0.75 11.8011 0.75 12C0.75 12.1989 0.829018 12.3897 0.96967 12.5303C1.11032 12.671 1.30109 12.75 1.5 12.75H22.5C22.6989 12.75 22.8897 12.671 23.0303 12.5303C23.171 12.3897 23.25 12.1989 23.25 12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                <span>QR Generated Code</span>
                            </h5>
                        </div>
                        <div className="modal-body" data-scrollbar>
                            <div className="rk-modal-form-content">
                                <div className="rk-modal-form-input">
                                    <label className="form-label">Event Category</label>
                                    <select className="form-select">
                                        <option selected>Exclusive Event</option>
                                        <option value="1">Select Category 1</option>
                                        <option value="1">Select Category 2</option>
                                        <option value="1">Select Category 3</option>
                                    </select>
                                </div>

                                <div className="rk-modal-form-input">
                                    <label for="" className="form-label">
                                        Comment
                                    </label>
                                    <textarea placeholder="type Your Comments..." rows="4"
                                        className="form-control"></textarea>
                                </div>

                                <div className="rk-qrmodal-filebox my-3">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.12512 37.406L12.508 34.1192L15.6787 37.29C16.167 37.7782 16.958 37.7782 17.4464 37.29L20.5 34.2365L23.5536 37.2901C24.0419 37.7784 24.8329 37.7784 25.3213 37.2901L28.492 34.1194L32.8749 37.4061C33.0959 37.5715 33.3595 37.6564 33.625 37.6564C33.8154 37.6564 34.0071 37.613 34.1841 37.5245C34.6076 37.3126 34.875 36.8799 34.875 36.4062V3.59375C34.875 2.9035 34.3153 2.34375 33.625 2.34375L7.375 2.34375C6.68475 2.34375 6.125 2.9035 6.125 3.59375L6.125 36.4062C6.125 36.8799 6.39238 37.3126 6.81588 37.5244C7.23763 37.7356 7.74425 37.6899 8.12512 37.406ZM8.625 4.84375L32.375 4.84375V33.9062L29.1249 31.4691C28.6256 31.095 27.9298 31.145 27.491 31.5851L24.4374 34.6387L21.3838 31.5851C21.1396 31.341 20.8197 31.2189 20.5 31.2189C20.1803 31.2189 19.8604 31.341 19.6163 31.5851L16.5626 34.6387L13.509 31.5851C13.0695 31.145 12.3731 31.095 11.8751 31.4691L8.625 33.9062L8.625 4.84375Z"
                                            fill="#1A1C2C" />
                                        <path
                                            d="M13.9375 25.8438H27.0625C27.7528 25.8438 28.3125 25.284 28.3125 24.5938C28.3125 23.9035 27.7528 23.3438 27.0625 23.3438H13.9375C13.2472 23.3438 12.6875 23.9035 12.6875 24.5938C12.6875 25.284 13.2472 25.8438 13.9375 25.8438Z"
                                            fill="#1A1C2C" />
                                        <path
                                            d="M13.9375 19.2812H27.0625C27.7528 19.2812 28.3125 18.7215 28.3125 18.0312C28.3125 17.341 27.7528 16.7812 27.0625 16.7812H13.9375C13.2472 16.7812 12.6875 17.341 12.6875 18.0312C12.6875 18.7215 13.2472 19.2812 13.9375 19.2812Z"
                                            fill="#1A1C2C" />
                                        <path
                                            d="M13.9375 12.7188H27.0625C27.7528 12.7188 28.3125 12.159 28.3125 11.4688C28.3125 10.7785 27.7528 10.2188 27.0625 10.2188H13.9375C13.2472 10.2188 12.6875 10.7785 12.6875 11.4688C12.6875 12.159 13.2472 12.7188 13.9375 12.7188Z"
                                            fill="#1A1C2C" />
                                    </svg>
                                    <div className="p-2">
                                        <div className="rk-qrmodal-dragdroptext">
                                            Drag and Drop file here
                                        </div>
                                        <div className="rk-qrmodal-ortext">OR</div>
                                        <div className="rk-qrmodal-browsetext">
                                            Upload receipe
                                        </div>
                                    </div>
                                </div>

                                <div className="rk-modal-form-qredit">
                                    <label for="" className="form-label">
                                        Select QR Code
                                    </label>
                                    <div className="p-3 rk-modal-form-qredit-box border">
                                        <img src="assets/images/small-green-qr-code.svg" height="150px" width="150px"
                                            alt="no-event-img" className="img-fluid" />
                                        <div className="rk-qr-colorpalets-box d-flex justify-content-between">
                                            <button type="button" className="rk-qr-colorpalets bg-success"></button>
                                            <button type="button" className="rk-qr-colorpalets bg-dark"></button>
                                            <button type="button" className="rk-qr-colorpalets bg-danger"></button>
                                            <button type="button" className="rk-qr-colorpalets" style={{
                                                backgroundColor: "#9b51e0" }}></button>
                                            <button type="button" className="rk-qr-colorpalets bg-primary"></button>
                                            <button type="button" className="rk-qr-colorpalets bg-warning"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row qr-modal-footer justify-content-between d-flex">
                            <div className="col-md-6">
                                <a href="./chef-QR-list.html" className="btn btn-success btn-custom w-100">
                                    Add
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="./chef-QR-list.html" className="btn btn-outline-success btn-custom w-100">
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
);
}