import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";
import DropFileInput from "../includes/Drag&Drop/components/drop-file-input/DropFileInput";
import "./App.css";

export default function EventRequests() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  const [disable, setDisable] = useState(false);

  const [info, setInfo] = useState({
    title: "",
    participants: "",
    category: "Select Category 1",
    date: "",
    location: "",
    budget: "",
    Compensation: "",
    description: "",
    time: "",
    thumbnail: "",
  });
  const [error, setError] = useState({});
  const onFileChange = (files) => {
    console.log(files);
    let temp = error;
    delete temp.thumbnail;
    setError(temp);
    setInfo({ ...info, thumbnail: files });
  };
  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  CustomScrollBar(".modal-body");
  const validate = () => {
    let isValid = true;
    let input = info;
    let error = {};
    if (input.title == "") {
      isValid = false;
      error["title"] = "Please enter Event Title.";
    }
    if (input.description == "") {
      isValid = false;
      error["description"] = "Please enter Description.";
    }
    if (input.budget == "" || Number(input.budget) < 0) {
      isValid = false;
      error["budget"] = "Please enter Valid Budget.";
    }
    if (input.Compensation == "" || Number(input.Compensation) < 0) {
      isValid = false;
      error["Compensation"] = "Please enter Valid Compensation.";
    }
    if (input.participants == "" || Number(input.participants) < 0) {
      isValid = false;
      error["participants"] = "Please enter Valid Participants.";
    }
    if (input.category == "") {
      isValid = false;
      error["category"] = "Please Select Category.";
    }
    if (input.date == "") {
      isValid = false;
      error["date"] = "Please enter Date.";
    }
    if (input.time == "") {
      isValid = false;
      error["time"] = "Please enter Time.";
    }
    console.log(input.time);

    if (input.location == "") {
      isValid = false;
      error["location"] = "Please enter Location.";
    }
    if (input.thumbnail == "") {
      isValid = false;
      error["thumbnail"] = "Please upload thumbnail.";
    }
    setError(error);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    console.log(validate());

    if (validate()) {
      const myurl = `${process.env.REACT_APP_base_url}api/add-event`;
      var bodyFormData = new FormData();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("title", info.title);
      bodyFormData.append("description", info.description);
      bodyFormData.append("date", info.date);
      bodyFormData.append("time", info.time);
      bodyFormData.append("location", info.location);
      bodyFormData.append("noOfParticipants", info.participants);
      bodyFormData.append("category", info.category);
      bodyFormData.append("budget", info.budget);
      bodyFormData.append("compensation", info.Compensation);
      bodyFormData.append("clientId", 1234);
      bodyFormData.append("thumbnail", info.thumbnail);

      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response?.data?.success) {
            setDisable(false);
            toast.success("Event Requested successfully.");
            navigate(0);
          } else {
            toast.error(response?.data?.message);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else setDisable(false);
  };
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
                  <span>Event Request </span>
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
                <span className="rk-menu-icon" onClick={toggleList}>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                  <span className="rk-menu-icon__inner"></span>
                </span>
              </div>
              <div className="rk-no-event-content">
                <div className="rk-no-event-img">
                  <img
                    src="assets/images/no-event-img.png"
                    alt="no-event-img"
                    className="img-fluid"
                  />
                </div>
                <h2 className="rk-no-event-title">No Event Created</h2>
                <p className="rk-no-event-description">
                  You have not create any upcoming Events. Let’s create New
                  Events
                </p>
                <button
                  type="button"
                  className="btn btn-success btn-custom"
                  data-bs-toggle="modal"
                  data-bs-target="#EventsRequestModal"
                >
                  Create Event
                </button>
              </div>
            </div>
          </section>
          {/* <!-- Landing Section End --> */}

          {/* <!-- Events Request Modal Start --> */}
          <div
            className="modal fade rk-side-modal"
            id="EventsRequestModal"
            tabindex="-1"
            aria-labelledby="EventsRequestModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <form action="book-request-event.html">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="EventsRequestModalLabel">
                      <span className="rk-modal-title-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.75 9V3.75C12.75 3.53333 12.8208 3.35417 12.9625 3.2125C13.1042 3.07083 13.2833 3 13.5 3H20.25C20.4667 3 20.6458 3.07083 20.7875 3.2125C20.9292 3.35417 21 3.53333 21 3.75V9C21 9.21667 20.9292 9.39583 20.7875 9.5375C20.6458 9.67917 20.4667 9.75 20.25 9.75H13.5C13.2833 9.75 13.1042 9.67917 12.9625 9.5375C12.8208 9.39583 12.75 9.21667 12.75 9ZM3 12V3.75C3 3.53333 3.07083 3.35417 3.2125 3.2125C3.35417 3.07083 3.53333 3 3.75 3H10.5C10.7167 3 10.8958 3.07083 11.0375 3.2125C11.1792 3.35417 11.25 3.53333 11.25 3.75V12C11.25 12.2167 11.1792 12.3958 11.0375 12.5375C10.8958 12.6792 10.7167 12.75 10.5 12.75H3.75C3.53333 12.75 3.35417 12.6792 3.2125 12.5375C3.07083 12.3958 3 12.2167 3 12ZM12.75 20.25V12C12.75 11.7833 12.8208 11.6042 12.9625 11.4625C13.1042 11.3208 13.2833 11.25 13.5 11.25H20.25C20.4667 11.25 20.6458 11.3208 20.7875 11.4625C20.9292 11.6042 21 11.7833 21 12V20.25C21 20.4667 20.9292 20.6458 20.7875 20.7875C20.6458 20.9292 20.4667 21 20.25 21H13.5C13.2833 21 13.1042 20.9292 12.9625 20.7875C12.8208 20.6458 12.75 20.4667 12.75 20.25ZM3 20.25V15C3 14.7833 3.07083 14.6042 3.2125 14.4625C3.35417 14.3208 3.53333 14.25 3.75 14.25H10.5C10.7167 14.25 10.8958 14.3208 11.0375 14.4625C11.1792 14.6042 11.25 14.7833 11.25 15V20.25C11.25 20.4667 11.1792 20.6458 11.0375 20.7875C10.8958 20.9292 10.7167 21 10.5 21H3.75C3.53333 21 3.35417 20.9292 3.2125 20.7875C3.07083 20.6458 3 20.4667 3 20.25ZM4.5 11.25H9.75V4.5H4.5V11.25ZM14.25 19.5H19.5V12.75H14.25V19.5ZM14.25 8.25H19.5V4.5H14.25V8.25ZM4.5 19.5H9.75V15.75H4.5V19.5Z"
                            fill="#101223"
                          />
                        </svg>
                      </span>
                      <span>Events Request</span>
                    </h5>
                  </div>

                  <div className="modal-body" data-scrollbar>
                    <div className="rk-modal-form-content">
                      <div class={"rk-modal-form-input"}>
                        <label class="form-label">Event Title</label>
                        <div class="rk-form-input">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Event Title"
                            value={info.title}
                            onChange={(e) => {
                              setInfo({ ...info, title: e.target.value });
                              let temp = error;
                              delete temp.title;
                              setError(temp);
                            }}
                          />
                          <div className="text-danger ">{error.title}</div>
                        </div>
                      </div>

                      <div className="rk-modal-form-input rk-form-numner-input">
                        <label for="inputPassword4" className="form-label">
                          No. of Participants
                        </label>
                        <div className="rk-form-input">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="No. of Participants"
                            value={info.participants}
                            onChange={(e) => {
                              setInfo({
                                ...info,
                                participants: e.target.value,
                              });
                              let temp = error;
                              delete temp.participants;
                              setError(temp);
                            }}
                          />

                          <div className="rk-form-input-number">
                            <span
                              className="rk-form-input-arrow rk-form-input-number-increse"
                              onClick={() =>
                                setInfo({
                                  ...info,
                                  participants: Number(info.participants) + 1,
                                })
                              }
                            >
                              <img
                                src="assets/images/up-arrow.png"
                                alt="up-arrow"
                                className="img-fluid"
                              />
                            </span>
                            <span
                              className="rk-form-input-arrow rk-form-input-number-decrese"
                              onClick={() =>
                                setInfo({
                                  ...info,
                                  participants: Number(info.participants) - 1,
                                })
                              }
                            >
                              <img
                                src="assets/images/down-arrow.png"
                                alt="up-arrow"
                                className="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                        <div
                          className="text-danger"
                          style={
                            error.participants ? { marginTop: "-20px" } : {}
                          }
                        >
                          {error.participants}
                        </div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label className="form-label">Event Category</label>
                        <select
                          className="form-select"
                          value={info.category}
                          onChange={(e) => {
                            setInfo({ ...info, category: e.target.value });
                            let temp = error;
                            delete temp.category;
                            setError(temp);
                          }}
                        >
                          <option selected disabled>
                            Select Category
                          </option>
                          <option value="Select Category 1">
                            Select Category 1
                          </option>
                          <option value="Select Category 2">
                            Select Category 2
                          </option>
                          <option value="Select Category 3">
                            Select Category 3
                          </option>
                        </select>
                        <div className="text-danger ">{error.category}</div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div className="rk-modal-form-input">
                            <label for="inputAddress2" className="form-label">
                              Date
                            </label>
                            <div className="rk-form-input">
                              <input
                                type="date"
                                className="form-control"
                                id="inputAddress2"
                                placeholder="DD/MM/YY"
                                value={info.date}
                                onChange={(e) => {
                                  setInfo({ ...info, date: e.target.value });
                                  let temp = error;
                                  delete temp.date;
                                  setError(temp);
                                }}
                              />
                              <div className="text-danger ">{error.date}</div>

                              {/* <span className="rk-form-input-icon">
                            <img
                              src="assets/images/date-icon.png"
                              alt="date-icon"
                              className="img-fluid"
                            />
                          </span> */}
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div className="rk-modal-form-input">
                            <label for="inputAddress2" className="form-label">
                              Time
                            </label>
                            <div className="rk-form-input">
                              <input
                                placeholder="HH:MM"
                                type="time"
                                className="form-control"
                                id="inputAddress2"
                                value={info.time != "" ? info.time : "00:00"}
                                onChange={(e) => {
                                  setInfo({ ...info, time: e.target.value });
                                  let temp = error;
                                  delete temp.time;
                                  setError(temp);
                                }}
                                // onFocus={(e) => (e.currentTarget.type = "time")}
                                // onBlur={(e) => {
                                //   e.currentTarget.type = "text";
                                //   e.currentTarget.placeholder = "HH:MM";
                                // }}
                              />
                              {/* <span className="rk-form-input-icon">
                                <img
                                  src="assets/images/time.png"
                                  alt="date-icon"
                                  className="img-fluid"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </span> */}
                              <div className="text-danger ">{error.time}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rk-modal-form-input">
                        <label for="inputAddress" className="form-label">
                          Location
                        </label>
                        <div className="rk-form-input">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Near By Location"
                            value={info.location}
                            onChange={(e) => {
                              setInfo({ ...info, location: e.target.value });
                              let temp = error;
                              delete temp.location;
                              setError(temp);
                            }}
                          />
                          <span className="rk-form-input-icon">
                            <img
                              src="assets/images/form-location-icon.png"
                              alt="form-location-icon"
                              className="img-fluid"
                            />
                          </span>
                          <div className="text-danger ">{error.location}</div>
                        </div>
                      </div>
                      <div class="rk-modal-form-input">
                        <label for="inputBudget" class="form-label">
                          Budget
                        </label>
                        <div class="rk-form-input">
                          <input
                            type="number"
                            class="form-control"
                            id="inputBudget"
                            placeholder="Budget"
                            value={info.budget}
                            onChange={(e) => {
                              setInfo({ ...info, budget: e.target.value });
                              let temp = error;
                              delete temp.budget;
                              setError(temp);
                            }}
                          />
                          <span class="rk-form-input-icon">
                            <img
                              src="assets/images/dollar.png"
                              alt="date-icon"
                              class="img-fluid"
                              height="16"
                              width="16"
                            />
                          </span>
                          <div className="text-danger ">{error.budget}</div>
                        </div>
                      </div>
                      <div class="rk-modal-form-input">
                        <label for="inputCompensation" class="form-label">
                          Compensation
                        </label>
                        <div class="rk-form-input">
                          <input
                            type="number"
                            class="form-control"
                            id="inputCompensation"
                            placeholder="Compensation"
                            value={info.Compensation}
                            onChange={(e) => {
                              setInfo({
                                ...info,
                                Compensation: e.target.value,
                              });
                              let temp = error;
                              delete temp.Compensation;
                              setError(temp);
                            }}
                          />
                          <span class="rk-form-input-icon">
                            <img
                              src="assets/images/dollar.png"
                              alt="date-icon"
                              class="img-fluid"
                              height="16"
                              width="16"
                            />
                          </span>
                          <div className="text-danger ">
                            {error.Compensation}
                          </div>
                        </div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label for="inputAddress2" className="form-label">
                          Description
                        </label>
                        <textarea
                          placeholder="Write a description..."
                          rows="4"
                          className="form-control"
                          value={info.description}
                          onChange={(e) => {
                            setInfo({ ...info, description: e.target.value });
                            let temp = error;
                            delete temp.description;
                            setError(temp);
                          }}
                        ></textarea>
                        <div className="text-danger ">{error.description}</div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label for="inputAddress2" className="form-label">
                          Event Thumbnail
                        </label>
                        <div className="box">
                          {/* <h2 className="header">React drop files input</h2> */}
                          <DropFileInput
                            onFileChange={(files) => onFileChange(files)}
                          />
                        </div>
                        <div className="text-danger ">{error.thumbnail}</div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-success btn-custom w-100"
                      onClick={submitHandler}
                      disabled={disable}
                    >
                      {disable ? "Processing..." : "Submit"}
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
