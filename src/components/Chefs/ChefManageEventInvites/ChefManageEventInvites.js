import React, { useState, useEffect } from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
export default function ChefManageEventInvites() {
  const [showOther, setShowOther] = useState(false);
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  const [list, setList] = useState([]);
  const [id, setId] = useState('');
  const [acceptedElem, setAcceptedElem] = useState({
    time:'',
    cost:''
  })
  const [rejectElem, setRejectElem] = useState([]);
  const [other, setOther] = useState('');
  useEffect(() => {
    getEventRequestList();
  }, []);
  function timeTo12(time) {
    var timeSplit = time.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "pm";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "am";
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = "pm";
    }
    return hours + ":" + minutes + " " + meridian;
  }
  const getEventRequestList = () => {
    const myurl = `${process.env.REACT_APP_base_url}api/chef/manage-Event-Invites`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
    let chefId=localStorage.getItem('DM_rockoly_userID');
    bodyFormData.append("chefInvite", chefId);
    console.log(chefId);
    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        console.log(response);
        if (response?.data?.success) {
          setList(response?.data?.data);
        }
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  function acceptRequest() {
    setDisable(true);
    const myurl = `${process.env.REACT_APP_base_url}api/chef/acceptEvent`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
    bodyFormData.append("chefResponse", "accepted");
    bodyFormData.append("chefInvite", localStorage.getItem('DM_rockoly_userID'));
    bodyFormData.append("eventId", id);
    bodyFormData.append("finalCost", Number(acceptedElem.cost));
    bodyFormData.append("chefArrivedTime", acceptedElem.time);
    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        if (response?.data?.success) {
          setDisable(false);

          getEventRequestList();
          toast.success("Event accepted successfully");
        } else {
          toast.error(response?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function cancelRequest() {

    document.getElementById('cancelinvitesCheck')

    setDisable(true);
    let reasons = rejectElem;

    if(showOther === true){
      reasons.push(other)
    }
    const myurl = `${process.env.REACT_APP_base_url}api/chef/reject-event`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
    bodyFormData.append("eventId", id);
    bodyFormData.append("chefResponse", "rejected");
    bodyFormData.append("chefInvite", localStorage.getItem('DM_rockoly_userID'));
    bodyFormData.append("chefRejectedMessage",JSON.stringify(reasons) );
    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        
        if (response?.data?.success) {
          setDisable(false);
          getEventRequestList();
          toast.success("Event Rejected successfully");

        } else {
          toast.error(response?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const handleRejectMessage = (e) =>{
    if(e.target.checked){
      const newData = [...rejectElem];
      newData.push(e.target.value);
      console.log("if", newData);
      setRejectElem(newData);
    }else{
      const newData = [...rejectElem];
      let index = newData.indexOf(e.target.value);
      newData.splice(index, 1);
      console.log("elese",newData);
      setRejectElem(newData);
    }
  }

  const handleAcceptedElem = (e) => {
    const newData = {...acceptedElem};
    newData[e.target.name] = e.target.value;
    setAcceptedElem(newData);
    console.log(newData);
  }

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
                <h1 class="rk-dashboard-user-name">
                  <span>Hi, </span> James Mary
                </h1>
                <div class="rk-dashboard-header-search">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="search"
                  />
                  <img
                    src="assets/images/search-icon.png"
                    alt="search-icon"
                    class="img-fluid"
                  />
                </div>
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
              {list.length > 0 ? (
                <div class="rk-manage-event-invites-content">
                  <div class="row">
                    {list.map((e, i) => {
                      return (
                        <div class="col col-12 col-md-12 col-lg-6">
                          <div class="rk-manage-invites-card">
                            <div class="rk-manage-invites-card-header">
                              <div class="rk-manage-invites-header__inner">
                                <h3 class="rk-manage-invites-card-title">
                                  <span>{e.title}</span>
                                  <span class="rk-manage-invites-card-title-icon">
                                    <img
                                      src="assets/images/invites-title-icon.png"
                                      alt="invites-title-icon"
                                      class="img-fluid"
                                    />
                                  </span>
                                </h3>
                              </div>
                              <div class="rk-manage-invites-header__inner">
                                <p class="rk-requested-event-date-time">
                                  <span class="rk-requested-event-date-icon">
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M3 15.1663C2.73333 15.1663 2.5 15.0663 2.3 14.8663C2.1 14.6663 2 14.433 2 14.1663V3.83301C2 3.56634 2.1 3.33301 2.3 3.13301C2.5 2.93301 2.73333 2.83301 3 2.83301H4.08333V2.34967C4.08333 2.20523 4.13333 2.08301 4.23333 1.98301C4.33333 1.88301 4.46111 1.83301 4.61667 1.83301C4.77222 1.83301 4.90278 1.88301 5.00833 1.98301C5.11389 2.08301 5.16667 2.21079 5.16667 2.36634V2.83301H10.8333V2.34967C10.8333 2.20523 10.8833 2.08301 10.9833 1.98301C11.0833 1.88301 11.2111 1.83301 11.3667 1.83301C11.5222 1.83301 11.6528 1.88301 11.7583 1.98301C11.8639 2.08301 11.9167 2.21079 11.9167 2.36634V2.83301H13C13.2667 2.83301 13.5 2.93301 13.7 3.13301C13.9 3.33301 14 3.56634 14 3.83301V14.1663C14 14.433 13.9 14.6663 13.7 14.8663C13.5 15.0663 13.2667 15.1663 13 15.1663H3ZM3 14.1663H13V6.99967H3V14.1663Z"
                                        fill="#05AC93"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span>
                                    {new Date(e.date).getDate() +
                                      " " +
                                      new Date(e.date).toString().slice(4, 7) +
                                      " " +
                                      String(
                                        new Date(e.date).getFullYear()
                                      ).slice(2, 4)}
                                  </span>
                                  <span class="rk-requested-event-date-devider">
                                    {" "}
                                    |{" "}
                                  </span>
                                  <span>{timeTo12(e?.time)}</span>
                                </p>
                                <p class="rk-requested-event-member">
                                  <span class="rk-requested-event-member-icon">
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.16675 13.517C1.0223 13.517 0.902859 13.4698 0.808415 13.3753C0.71397 13.2809 0.666748 13.1614 0.666748 13.017V11.9503C0.666748 11.5614 0.766748 11.2087 0.966748 10.892C1.16675 10.5753 1.44453 10.3392 1.80008 10.1837C2.61119 9.8281 3.34175 9.57255 3.99175 9.41699C4.64175 9.26144 5.31119 9.18366 6.00008 9.18366C6.68897 9.18366 7.35564 9.26144 8.00008 9.41699C8.64453 9.57255 9.3723 9.8281 10.1834 10.1837C10.539 10.3392 10.8195 10.5753 11.0251 10.892C11.2306 11.2087 11.3334 11.5614 11.3334 11.9503V13.017C11.3334 13.1614 11.2862 13.2809 11.1917 13.3753C11.0973 13.4698 10.9779 13.517 10.8334 13.517H1.16675ZM11.9667 13.517C12.0779 13.4948 12.1667 13.4364 12.2334 13.342C12.3001 13.2475 12.3334 13.1281 12.3334 12.9837V11.9503C12.3334 11.2503 12.1556 10.6753 11.8001 10.2253C11.4445 9.77532 10.9779 9.41144 10.4001 9.13366C11.1667 9.22255 11.889 9.3531 12.5667 9.52533C13.2445 9.69755 13.7945 9.89477 14.2167 10.117C14.5834 10.3281 14.8723 10.5892 15.0834 10.9003C15.2945 11.2114 15.4001 11.5614 15.4001 11.9503V13.017C15.4001 13.1614 15.3529 13.2809 15.2584 13.3753C15.164 13.4698 15.0445 13.517 14.9001 13.517H11.9667ZM6.00008 8.16699C5.26675 8.16699 4.66675 7.93366 4.20008 7.46699C3.73341 7.00033 3.50008 6.40033 3.50008 5.66699C3.50008 4.93366 3.73341 4.33366 4.20008 3.86699C4.66675 3.40033 5.26675 3.16699 6.00008 3.16699C6.73341 3.16699 7.33341 3.40033 7.80008 3.86699C8.26675 4.33366 8.50008 4.93366 8.50008 5.66699C8.50008 6.40033 8.26675 7.00033 7.80008 7.46699C7.33341 7.93366 6.73341 8.16699 6.00008 8.16699ZM12.0001 5.66699C12.0001 6.40033 11.7667 7.00033 11.3001 7.46699C10.8334 7.93366 10.2334 8.16699 9.50008 8.16699C9.37786 8.16699 9.24175 8.15866 9.09175 8.14199C8.94175 8.12533 8.80564 8.09477 8.68341 8.05033C8.95008 7.77255 9.15286 7.43088 9.29175 7.02533C9.43064 6.61977 9.50008 6.16699 9.50008 5.66699C9.50008 5.16699 9.43064 4.72533 9.29175 4.34199C9.15286 3.95866 8.95008 3.60588 8.68341 3.28366C8.80564 3.25033 8.94175 3.22255 9.09175 3.20033C9.24175 3.1781 9.37786 3.16699 9.50008 3.16699C10.2334 3.16699 10.8334 3.40033 11.3001 3.86699C11.7667 4.33366 12.0001 4.93366 12.0001 5.66699Z"
                                        fill="#404252"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span>{e.noOfParticipants}</span>
                                </p>
                              </div>
                            </div>
                            <div class="rk-manage-invites-card-body">
                              <p class="rk-manage-invites-description">
                                {e.description}{" "}
                              </p>
                              <div class="rk-manage-invites-owner-message-content">
                                <p class="rk-manage-invites-owner-message-title">
                                  <span class="rk-manage-invites-owner-message-icon">
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0.9375 5.36816H0.46875C0.209875 5.36816 0 5.57804 0 5.83691V13.3369C0 13.5958 0.209875 13.8057 0.46875 13.8057H0.9375C1.45528 13.8057 1.875 13.3859 1.875 12.8682V6.30566C1.875 5.78791 1.45528 5.36816 0.9375 5.36816Z"
                                        fill="#ABCF37"
                                      />
                                      <path
                                        d="M14.5938 5.36806H10.0378L8.55284 3.88352C7.70506 3.03527 6.36106 2.96206 5.42541 3.70821L2.8125 5.79871C2.8125 11.8527 2.8125 10.3594 2.8125 13.0675C4.16244 13.5481 5.57694 13.8056 7.03125 13.8056H8.90625C9.68169 13.8056 10.3125 13.1748 10.3125 12.3993C10.3125 12.2167 10.2777 12.0418 10.2136 11.8811C10.8106 11.7186 11.25 11.1716 11.25 10.5243C11.25 10.3417 11.2152 10.1668 11.1511 10.0061C11.7481 9.84365 12.1875 9.29662 12.1875 8.64934C12.1875 8.48499 12.1591 8.32709 12.1069 8.18059H14.5938C15.3692 8.18059 16 7.54977 16 6.77434C16 5.9989 15.3692 5.36806 14.5938 5.36806Z"
                                        fill="#ABCF37"
                                      />
                                    </svg>
                                  </span>
                                  <span>Message from Product Owner</span>
                                </p>
                                <div class="rk-manage-invites-owner-message">
                                  <div class="rk-manage-invites-owner-img">
                                    <img
                                      src="assets/images/sponsor-img.png"
                                      alt="sponsor-img"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="rk-manage-invites-owner-details">
                                    <h3 class="rk-manage-invites-owner-title">
                                      Dr chef
                                    </h3>
                                    <p class="rk-manage-invites-owner-description">
                                      {e.adminMessageForChef}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="rk-manage-invites-card-footer">
                              <div class="rk-manage-invites-card-footer__inner">
                                <p class="rk-manage-invites-budget">
                                  <label>Budget:</label>
                                  <span>${e.budget}</span>
                                </p>
                                <p class="rk-manage-invites-budget">
                                  <label>Compensation:</label>
                                  <span class="rk-compensation-price">
                                    ${e.compensation}
                                  </span>
                                </p>
                              </div>
                              <div class="rk-manage-invites-card-footer__inner">
                                <button
                                  type="button"
                                  class="btn btn-success btn-custom"
                                  data-bs-toggle="modal"
                                  data-bs-target="#acceptInvitesModal"
                                  onClick={()=> {setId(e.id)}}
                                      >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancelinvitesModal"
                                  onClick={()=> {setId(e.id)}}
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="rk-no-event-content">
                <div className="rk-no-event-img">
                  <img
                    src="assets/images/no-event-img.png"
                    alt="no-event-img"
                    className="img-fluid"
                  />
                   </div>
                  <h2 className="rk-no-event-title">No Event Invites</h2>
                  <p className="rk-no-event-description">
                    You have not assigned to any upcoming Events.
                  </p>
                </div>
              )}
            </div>
          </section>
          {/* <!-- Landing Section End --> */}

          {/* <!-- Modal --> */}

          <div
            class="modal fade"
            id="cancelinvitesModal"
            tabindex="-1"
            aria-labelledby="cancelinvitesModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="rk-cancel-invites-content">
                    <div class="rk-cancel-invites-reason-list">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Conflict With timings"
                          id="cancelinvitesCheck"
                          onChange={handleRejectMessage}
                        />
                        <label
                          class="form-check-label"
                          for="cancelinvitesCheck"
                        >
                          Conflict With timings
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Not Available to take any events"
                          id="cancelinvitesCheck2"
                          onChange={handleRejectMessage}
                        />
                        <label
                          class="form-check-label"
                          for="cancelinvitesCheck2"
                        >
                          Not Available to take any events
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Location Not Preferred"
                          id="cancelinvitesCheck3"
                          onChange={handleRejectMessage}
                        />
                        <label
                          class="form-check-label"
                          for="cancelinvitesCheck3"
                        >
                          Location Not Preferred
                        </label>
                      </div>
                      <div
                        class="form-check"
                        onClick={(e) => {
                          setShowOther(!showOther);
                        }}
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="cancelinvitesCheck4"
                        />
                        <label
                          class="form-check-label"
                          for="cancelinvitesCheck4"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    <div
                      class={
                        !showOther
                          ? "rk-cancel-invites-other-reason"
                          : "rk-cancel-invites-other-reason show"
                      }
                    >
                      <label class="form-label">Reasons</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Write a reasons..."
                        onChange={(e) => {setOther(e.target.value)}}
                      ></textarea>
                    </div>
                  </div>
                  <div class="rk-cancel-invites-btn">
                    <a href="#" class="btn-link" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <button type="button" class="btn btn-custom btn-success" data-bs-dismiss="modal" onClick={cancelRequest}>
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accept Event Modal */}
          <div
            class="modal fade"
            id="acceptInvitesModal"
            tabindex="-1"
            aria-labelledby="acceptInvitesModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="rk-accept-invites-content">
                    <span>
                      Prefer your time to arrive the event & final cost
                    </span>
                    <div class="form-check-accept my-4">
                      <div className="arriveTime">
                        <label for="acceptTime">
                          <strong> Arrive Time</strong>
                        </label>
                        <br />
                        <input
                          type="time"
                          id="acceptTime"
                          name="time"
                          class="rk-accept-invite-time rounded"
                          required
                          onChange={handleAcceptedElem}
                        />
                      </div>
                      <div className="finalCost-box">
                        <label for="acceptTime">
                          <strong> Final Cost</strong>
                        </label>
                        <br />
                        <div className="inputCost">
                          <input type="number" name="cost" id=""className="finalCost" 
                          onChange={handleAcceptedElem}
                          />
                          <span><img src="assets/images/dollar.png" alt="" height={20}/></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rk-cancel-invites-btn">
                    <a href="#" class="btn-link" data-bs-dismiss="modal">
                      Cancel
                    </a>
                    <button type="button" class="btn btn-custom btn-success" data-bs-dismiss="modal" onClick={acceptRequest}>
                      Confirm
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
