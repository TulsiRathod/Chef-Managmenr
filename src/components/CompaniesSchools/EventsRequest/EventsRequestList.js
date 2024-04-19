import React from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
export default function EventsRequestList(props) {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  console.log(props.list);
  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  function timeTo12(time) {
    var timeSplit = time.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    return hours + ":" + minutes + " " + meridian;
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
              <div class="rk-dashboard-header rk-event-request-hrader">
                <HeaderLogo />
                <h1 class="rk-dashboard-user-name">
                  <span>Event Request </span>
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
                <span class="rk-menu-icon" onClick={toggleList}>
                  <span class="rk-menu-icon__inner"></span>
                  <span class="rk-menu-icon__inner"></span>
                  <span class="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div class="rk-requested-event-content">
                <div class="rk-requested-event-list">
                  {props.list?.map((e, i) => {
                    return (
                      <div class="rk-requested-event-item">
                        <div class="rk-requested-event-img">
                          <img
                            src={
                              e.thumbnail
                                ? e.thumbnail
                                : "assets/images/requested-event-img1.png"
                            }
                            alt="requested-event-img1"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-requested-event-details">
                          <div class="rk-requested-event-details__inner">
                            <div class="rk-requested-event-info">
                              <h3 class="rk-requested-event-title">
                                {e.title}
                              </h3>
                              <p class="rk-requested-event-category">
                                <label class="rk-requested-event-category-label">
                                  Category:{" "}
                                </label>
                                <span class="rk-requested-event-category-name">
                                  {" "}
                                  {e.category}
                                </span>
                              </p>
                              <p class="rk-requested-event-location">
                                <span class="rk-requested-event-location-icon">
                                  <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.83325 12.6163C7.75547 12.6163 7.68325 12.608 7.61659 12.5913C7.54992 12.5747 7.48881 12.5441 7.43325 12.4997C6.04436 11.4219 5.01381 10.3858 4.34159 9.39134C3.66936 8.3969 3.33325 7.41079 3.33325 6.43301C3.33325 5.67745 3.46936 5.01356 3.74159 4.44134C4.01381 3.86912 4.36659 3.38856 4.79992 2.99967C5.23325 2.61079 5.71659 2.31912 6.24992 2.12467C6.78325 1.93023 7.31103 1.83301 7.83325 1.83301C8.35547 1.83301 8.88325 1.93023 9.41659 2.12467C9.94992 2.31912 10.4333 2.61079 10.8666 2.99967C11.2999 3.38856 11.6527 3.86912 11.9249 4.44134C12.1971 5.01356 12.3333 5.67745 12.3333 6.43301C12.3333 7.41079 11.9971 8.3969 11.3249 9.39134C10.6527 10.3858 9.62214 11.4219 8.23325 12.4997C8.1777 12.5441 8.11659 12.5747 8.04992 12.5913C7.98325 12.608 7.91103 12.6163 7.83325 12.6163ZM7.83325 7.49967C8.15547 7.49967 8.43047 7.38579 8.65825 7.15801C8.88603 6.93023 8.99992 6.65523 8.99992 6.33301C8.99992 6.01079 8.88603 5.73579 8.65825 5.50801C8.43047 5.28023 8.15547 5.16634 7.83325 5.16634C7.51103 5.16634 7.23603 5.28023 7.00825 5.50801C6.78047 5.73579 6.66659 6.01079 6.66659 6.33301C6.66659 6.65523 6.78047 6.93023 7.00825 7.15801C7.23603 7.38579 7.51103 7.49967 7.83325 7.49967ZM3.83325 15.1663C3.68881 15.1663 3.56936 15.1191 3.47492 15.0247C3.38047 14.9302 3.33325 14.8108 3.33325 14.6663C3.33325 14.5219 3.38047 14.4025 3.47492 14.308C3.56936 14.2136 3.68881 14.1663 3.83325 14.1663H11.8333C11.9777 14.1663 12.0971 14.2136 12.1916 14.308C12.286 14.4025 12.3333 14.5219 12.3333 14.6663C12.3333 14.8108 12.286 14.9302 12.1916 15.0247C12.0971 15.1191 11.9777 15.1663 11.8333 15.1663H3.83325Z"
                                      fill="#404252"
                                    />
                                  </svg>
                                </span>
                                <span>{e.location}</span>
                              </p>
                            </div>
                            <div class="rk-requested-event-info">
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
                                    />
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
                                <span>{timeTo12(e.time)}</span>
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
                                    />
                                  </svg>
                                </span>
                                <span>{e.noOfParticipants} /100</span>
                              </p>
                              <div class="rk-requested-event-participant">
                                <label class="rk-requested-event-participant-label">
                                  Participants Members
                                </label>
                                <ul class="rk-requested-event-participant-list">
                                  <li class="rk-requested-event-participant-item">
                                    <img
                                      src="assets/images/event-participant-img1.png"
                                      alt="event-participant"
                                      class="img-fluid"
                                    />
                                  </li>
                                  <li class="rk-requested-event-participant-item">
                                    <img
                                      src="assets/images/event-participant-img2.png"
                                      alt="event-participant"
                                      class="img-fluid"
                                    />
                                  </li>
                                  <li class="rk-requested-event-participant-item">
                                    <img
                                      src="assets/images/event-participant-img3.png"
                                      alt="event-participant"
                                      class="img-fluid"
                                    />
                                  </li>
                                  <li class="rk-requested-event-participant-item">
                                    <img
                                      src="assets/images/event-participant-img4.png"
                                      alt="event-participant"
                                      class="img-fluid"
                                    />
                                  </li>
                                  <li class="rk-requested-event-participant-item">
                                    <img
                                      src="assets/images/event-participant-img5.png"
                                      alt="event-participant"
                                      class="img-fluid"
                                    />
                                  </li>
                                  <li class="rk-requested-event-participant-item">
                                    <span class="rk-requested-event-participant-more">
                                      +5
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <p class="rk-requested-event-description">
                            {e.description}{" "}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div class="rk-requested-event-item">
                    <div class="rk-requested-event-img">
                      <img
                        src="assets/images/requested-event-img2.png"
                        alt="requested-event-img1"
                        class="img-fluid"
                      />
                    </div>
                    <div class="rk-requested-event-details">
                      <div class="rk-requested-event-details__inner">
                        <div class="rk-requested-event-info">
                          <h3 class="rk-requested-event-title">
                            Exclusive Events
                          </h3>
                          <p class="rk-requested-event-category">
                            <label class="rk-requested-event-category-label">
                              Category:{" "}
                            </label>
                            <span class="rk-requested-event-category-name">
                              {" "}
                              Student Event
                            </span>
                          </p>
                          <p class="rk-requested-event-location">
                            <span class="rk-requested-event-location-icon">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.83325 12.6163C7.75547 12.6163 7.68325 12.608 7.61659 12.5913C7.54992 12.5747 7.48881 12.5441 7.43325 12.4997C6.04436 11.4219 5.01381 10.3858 4.34159 9.39134C3.66936 8.3969 3.33325 7.41079 3.33325 6.43301C3.33325 5.67745 3.46936 5.01356 3.74159 4.44134C4.01381 3.86912 4.36659 3.38856 4.79992 2.99967C5.23325 2.61079 5.71659 2.31912 6.24992 2.12467C6.78325 1.93023 7.31103 1.83301 7.83325 1.83301C8.35547 1.83301 8.88325 1.93023 9.41659 2.12467C9.94992 2.31912 10.4333 2.61079 10.8666 2.99967C11.2999 3.38856 11.6527 3.86912 11.9249 4.44134C12.1971 5.01356 12.3333 5.67745 12.3333 6.43301C12.3333 7.41079 11.9971 8.3969 11.3249 9.39134C10.6527 10.3858 9.62214 11.4219 8.23325 12.4997C8.1777 12.5441 8.11659 12.5747 8.04992 12.5913C7.98325 12.608 7.91103 12.6163 7.83325 12.6163ZM7.83325 7.49967C8.15547 7.49967 8.43047 7.38579 8.65825 7.15801C8.88603 6.93023 8.99992 6.65523 8.99992 6.33301C8.99992 6.01079 8.88603 5.73579 8.65825 5.50801C8.43047 5.28023 8.15547 5.16634 7.83325 5.16634C7.51103 5.16634 7.23603 5.28023 7.00825 5.50801C6.78047 5.73579 6.66659 6.01079 6.66659 6.33301C6.66659 6.65523 6.78047 6.93023 7.00825 7.15801C7.23603 7.38579 7.51103 7.49967 7.83325 7.49967ZM3.83325 15.1663C3.68881 15.1663 3.56936 15.1191 3.47492 15.0247C3.38047 14.9302 3.33325 14.8108 3.33325 14.6663C3.33325 14.5219 3.38047 14.4025 3.47492 14.308C3.56936 14.2136 3.68881 14.1663 3.83325 14.1663H11.8333C11.9777 14.1663 12.0971 14.2136 12.1916 14.308C12.286 14.4025 12.3333 14.5219 12.3333 14.6663C12.3333 14.8108 12.286 14.9302 12.1916 15.0247C12.0971 15.1191 11.9777 15.1663 11.8333 15.1663H3.83325Z"
                                  fill="#404252"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                        <div class="rk-requested-event-info">
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
                                />
                              </svg>
                            </span>
                            <span>24 May 22</span>
                            <span class="rk-requested-event-date-devider">
                              {" "}
                              |{" "}
                            </span>
                            <span>10:00 am</span>
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
                                />
                              </svg>
                            </span>
                            <span>96 /100</span>
                          </p>
                          <div class="rk-requested-event-participant">
                            <label class="rk-requested-event-participant-label">
                              Participants Members
                            </label>
                            <ul class="rk-requested-event-participant-list">
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img1.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img2.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img3.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img4.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img5.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <span class="rk-requested-event-participant-more">
                                  +5
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p class="rk-requested-event-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Arcu et in sit at platea massa. Eget tempus fames quis
                        in eget pharetra. Enim mauris ultrices laoreet cursus in
                        id massa ultrices. Pretium egestas arcu vitae dapibus
                        scelerisque sed ullamcorper quis pellentesque.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="rk-requested-event-item">
                    <div class="rk-requested-event-img">
                      <img
                        src="assets/images/requested-event-img3.png"
                        alt="requested-event-img1"
                        class="img-fluid"
                      />
                    </div>
                    <div class="rk-requested-event-details">
                      <div class="rk-requested-event-details__inner">
                        <div class="rk-requested-event-info">
                          <h3 class="rk-requested-event-title">
                            Exclusive Events
                          </h3>
                          <p class="rk-requested-event-category">
                            <label class="rk-requested-event-category-label">
                              Category:{" "}
                            </label>
                            <span class="rk-requested-event-category-name">
                              {" "}
                              Student Event
                            </span>
                          </p>
                          <p class="rk-requested-event-location">
                            <span class="rk-requested-event-location-icon">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.83325 12.6163C7.75547 12.6163 7.68325 12.608 7.61659 12.5913C7.54992 12.5747 7.48881 12.5441 7.43325 12.4997C6.04436 11.4219 5.01381 10.3858 4.34159 9.39134C3.66936 8.3969 3.33325 7.41079 3.33325 6.43301C3.33325 5.67745 3.46936 5.01356 3.74159 4.44134C4.01381 3.86912 4.36659 3.38856 4.79992 2.99967C5.23325 2.61079 5.71659 2.31912 6.24992 2.12467C6.78325 1.93023 7.31103 1.83301 7.83325 1.83301C8.35547 1.83301 8.88325 1.93023 9.41659 2.12467C9.94992 2.31912 10.4333 2.61079 10.8666 2.99967C11.2999 3.38856 11.6527 3.86912 11.9249 4.44134C12.1971 5.01356 12.3333 5.67745 12.3333 6.43301C12.3333 7.41079 11.9971 8.3969 11.3249 9.39134C10.6527 10.3858 9.62214 11.4219 8.23325 12.4997C8.1777 12.5441 8.11659 12.5747 8.04992 12.5913C7.98325 12.608 7.91103 12.6163 7.83325 12.6163ZM7.83325 7.49967C8.15547 7.49967 8.43047 7.38579 8.65825 7.15801C8.88603 6.93023 8.99992 6.65523 8.99992 6.33301C8.99992 6.01079 8.88603 5.73579 8.65825 5.50801C8.43047 5.28023 8.15547 5.16634 7.83325 5.16634C7.51103 5.16634 7.23603 5.28023 7.00825 5.50801C6.78047 5.73579 6.66659 6.01079 6.66659 6.33301C6.66659 6.65523 6.78047 6.93023 7.00825 7.15801C7.23603 7.38579 7.51103 7.49967 7.83325 7.49967ZM3.83325 15.1663C3.68881 15.1663 3.56936 15.1191 3.47492 15.0247C3.38047 14.9302 3.33325 14.8108 3.33325 14.6663C3.33325 14.5219 3.38047 14.4025 3.47492 14.308C3.56936 14.2136 3.68881 14.1663 3.83325 14.1663H11.8333C11.9777 14.1663 12.0971 14.2136 12.1916 14.308C12.286 14.4025 12.3333 14.5219 12.3333 14.6663C12.3333 14.8108 12.286 14.9302 12.1916 15.0247C12.0971 15.1191 11.9777 15.1663 11.8333 15.1663H3.83325Z"
                                  fill="#404252"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                        <div class="rk-requested-event-info">
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
                                />
                              </svg>
                            </span>
                            <span>24 May 22</span>
                            <span class="rk-requested-event-date-devider">
                              {" "}
                              |{" "}
                            </span>
                            <span>10:00 am</span>
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
                                />
                              </svg>
                            </span>
                            <span>96 /100</span>
                          </p>
                          <div class="rk-requested-event-participant">
                            <label class="rk-requested-event-participant-label">
                              Participants Members
                            </label>
                            <ul class="rk-requested-event-participant-list">
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img1.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img2.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img3.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img4.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img5.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <span class="rk-requested-event-participant-more">
                                  +5
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p class="rk-requested-event-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Arcu et in sit at platea massa. Eget tempus fames quis
                        in eget pharetra. Enim mauris ultrices laoreet cursus in
                        id massa ultrices. Pretium egestas arcu vitae dapibus
                        scelerisque sed ullamcorper quis pellentesque.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="rk-requested-event-item">
                    <div class="rk-requested-event-img">
                      <img
                        src="assets/images/requested-event-img4.png"
                        alt="requested-event-img1"
                        class="img-fluid"
                      />
                    </div>
                    <div class="rk-requested-event-details">
                      <div class="rk-requested-event-details__inner">
                        <div class="rk-requested-event-info">
                          <h3 class="rk-requested-event-title">
                            Exclusive Events
                          </h3>
                          <p class="rk-requested-event-category">
                            <label class="rk-requested-event-category-label">
                              Category:{" "}
                            </label>
                            <span class="rk-requested-event-category-name">
                              {" "}
                              Student Event
                            </span>
                          </p>
                          <p class="rk-requested-event-location">
                            <span class="rk-requested-event-location-icon">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.83325 12.6163C7.75547 12.6163 7.68325 12.608 7.61659 12.5913C7.54992 12.5747 7.48881 12.5441 7.43325 12.4997C6.04436 11.4219 5.01381 10.3858 4.34159 9.39134C3.66936 8.3969 3.33325 7.41079 3.33325 6.43301C3.33325 5.67745 3.46936 5.01356 3.74159 4.44134C4.01381 3.86912 4.36659 3.38856 4.79992 2.99967C5.23325 2.61079 5.71659 2.31912 6.24992 2.12467C6.78325 1.93023 7.31103 1.83301 7.83325 1.83301C8.35547 1.83301 8.88325 1.93023 9.41659 2.12467C9.94992 2.31912 10.4333 2.61079 10.8666 2.99967C11.2999 3.38856 11.6527 3.86912 11.9249 4.44134C12.1971 5.01356 12.3333 5.67745 12.3333 6.43301C12.3333 7.41079 11.9971 8.3969 11.3249 9.39134C10.6527 10.3858 9.62214 11.4219 8.23325 12.4997C8.1777 12.5441 8.11659 12.5747 8.04992 12.5913C7.98325 12.608 7.91103 12.6163 7.83325 12.6163ZM7.83325 7.49967C8.15547 7.49967 8.43047 7.38579 8.65825 7.15801C8.88603 6.93023 8.99992 6.65523 8.99992 6.33301C8.99992 6.01079 8.88603 5.73579 8.65825 5.50801C8.43047 5.28023 8.15547 5.16634 7.83325 5.16634C7.51103 5.16634 7.23603 5.28023 7.00825 5.50801C6.78047 5.73579 6.66659 6.01079 6.66659 6.33301C6.66659 6.65523 6.78047 6.93023 7.00825 7.15801C7.23603 7.38579 7.51103 7.49967 7.83325 7.49967ZM3.83325 15.1663C3.68881 15.1663 3.56936 15.1191 3.47492 15.0247C3.38047 14.9302 3.33325 14.8108 3.33325 14.6663C3.33325 14.5219 3.38047 14.4025 3.47492 14.308C3.56936 14.2136 3.68881 14.1663 3.83325 14.1663H11.8333C11.9777 14.1663 12.0971 14.2136 12.1916 14.308C12.286 14.4025 12.3333 14.5219 12.3333 14.6663C12.3333 14.8108 12.286 14.9302 12.1916 15.0247C12.0971 15.1191 11.9777 15.1663 11.8333 15.1663H3.83325Z"
                                  fill="#404252"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                        <div class="rk-requested-event-info">
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
                                />
                              </svg>
                            </span>
                            <span>24 May 22</span>
                            <span class="rk-requested-event-date-devider">
                              {" "}
                              |{" "}
                            </span>
                            <span>10:00 am</span>
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
                                />
                              </svg>
                            </span>
                            <span>96 /100</span>
                          </p>
                          <div class="rk-requested-event-participant">
                            <label class="rk-requested-event-participant-label">
                              Participants Members
                            </label>
                            <ul class="rk-requested-event-participant-list">
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img1.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img2.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img3.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img4.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <img
                                  src="assets/images/event-participant-img5.png"
                                  alt="event-participant"
                                  class="img-fluid"
                                />
                              </li>
                              <li class="rk-requested-event-participant-item">
                                <span class="rk-requested-event-participant-more">
                                  +5
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p class="rk-requested-event-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Arcu et in sit at platea massa. Eget tempus fames quis
                        in eget pharetra. Enim mauris ultrices laoreet cursus in
                        id massa ultrices. Pretium egestas arcu vitae dapibus
                        scelerisque sed ullamcorper quis pellentesque.{" "}
                      </p>
                    </div>
                  </div> */}
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
