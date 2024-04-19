import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import Slider from "react-slick";
// import { settings } from "../../utils/SlickSettings";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";

export default function MyEvents() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  const [chefs, setChefs] = useState({ ids: [] });
  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  const [settings, setSettings] = useState({
    upcomingSettings: {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    completedSettings: {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  });
  const [filter, setFilter] = useState({
    date: "",
    location: "",
    chef: "",
    rating: "",
  });
  const [filterList, setFilterList] = useState({
    date: "",
    location: "",
    chef: "",
    rating: "",
  });
  const [locationList, setLocationList] = useState([]);
  const navigate = useNavigate();
  CustomScrollBar(".rk-dashboard-content-area");
  const [list, setList] = useState({ upcoming: [], completed: [] });
  const [chef, setChef] = useState({ upcoming: [], completed: [] });
  const [chefList, setChefList] = useState([]);
  const [mainList, setMainList] = useState({
    event: { upcoming: [], completed: [] },
    chef: { upcoming: [], completed: [] },
  });

  useEffect(() => {
    getMyEvent();
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

  useEffect(() => {
    setSettings({
      completedSettings: {
        ...settings.completedSettings,
        infinite: list.completed.length > 4,
      },
      upcomingSettings: {
        ...settings.upcomingSettings,
        infinite: list.upcoming.length > 4,
      },
    });

    var up = [],
      completed = [];
    list.completed.map((e, i) => {
      completed.push(chefList.filter((e1) => e.chefInvite == e1.id)[0]);
    });
    list.upcoming.map((e, i) => {
      up.push(chefList.filter((e1) => e.chefInvite == e1.id)[0]);
    });
    setChef({ completed: completed, upcoming: up });
  }, [chefList, list]);

  useEffect(() => {
    const myurl = `${process.env.REACT_APP_base_url}api/chef-detail-for-event`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);

    bodyFormData.append("chefId", chefs);

    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        setChefList(response?.data?.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [chefs]);

  const getMyEvent = () => {
    const myurl = `${process.env.REACT_APP_base_url}api/my-events`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
    bodyFormData.append("clientId", 1234);

    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        var completed = [],
          upcoming = [],
          chef = [],
          location = [];

        if (response?.data?.success) {
          response?.data?.data.map((e, i) => {
            // console.log(
            //   new Date(e.date).setHours(0, 0, 0, 0),
            //   new Date().setHours(0, 0, 0, 0)
            // );
            location.push(e.location.toLowerCase());
            chef.push(e.chefInvite);
            if (
              new Date(e.date).setHours(0, 0, 0, 0) >=
              new Date().setHours(0, 0, 0, 0)
            ) {
              upcoming.push(e);
            } else {
              completed.push(e);
            }
          });
          setLocationList([...new Set(location)]);
          setList({ completed: completed, upcoming: upcoming });
          setMainList({
            ...mainList,
            event: { completed: completed, upcoming: upcoming },
          });

          // setSettings({
          //   completedSettings: {
          //     ...settings.completedSettings,
          //     infinite: completed.length > 4,
          //   },
          //   upcomingSettings: {
          //     ...settings.upcomingSettings,
          //     infinite: upcoming.length > 4,
          //   },
          // });
          setChefs([...new Set(chef)]);
          console.log("data", response?.data?.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    filterHandler();
  }, [filterList]);

  const filterHandler = () => {
    let tempList = mainList.event;
    if (filter.date != "") {
      let up = [],
        done = [];
      console.log(
        filter.date,
        new Date(filter.date).setHours(0, 0, 0, 0),
        new Date().setHours(0, 0, 0, 0)
      );
      if (
        new Date(filter.date).setHours(0, 0, 0, 0) >=
        new Date().setHours(0, 0, 0, 0)
      ) {
        tempList.upcoming?.map((e) => {
          if (
            new Date(e.date).setHours(0, 0, 0, 0) ==
            new Date(filter.date).setHours(0, 0, 0, 0)
          ) {
            up.push(e);
          }
        });
        tempList = {
          ...tempList,
          upcoming: up,
        };
      } else {
        tempList.completed?.map((e) => {
          if (
            new Date(e.date).setHours(0, 0, 0, 0) ==
            new Date(filter.date).setHours(0, 0, 0, 0)
          ) {
            done.push(e);
          }
        });
        tempList = {
          ...tempList,
          completed: done,
        };
      }
    }

    if (filter.location != "") {
      let up = [],
        done = [];
      tempList.upcoming?.map((e) => {
        if (e.location.toLowerCase() == filter.location) {
          up.push(e);
        }
      });

      tempList.completed?.map((e) => {
        if (e.location.toLowerCase() == filter.location) {
          done.push(e);
        }
      });
      tempList = {
        upcoming: up,
        completed: done,
      };
    }
    if (filter.chef != "") {
      let up = [],
        done = [];
      tempList.upcoming?.map((e) => {
        if (e.chefInvite == filter.chef) {
          up.push(e);
        }
      });

      tempList.completed?.map((e) => {
        if (e.chefInvite == filter.chef) {
          done.push(e);
        }
      });
      tempList = {
        upcoming: up,
        completed: done,
      };
    }
    setList(tempList);
  };
  return (
    <>
      {console.log(settings)}
      <div className={state ? "rk-site" : "rk-site rk-menu-show"}>
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
              <div className="rk-event-filter">
                <div className="rk-event-filter__inner">
                  <div className="rk-event-filter-input">
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={filter.date}
                      onChange={(event) => {
                        setFilter({ ...filter, date: event.target.value });
                        setFilterList({
                          ...filterList,
                          date: {
                            key: "date",
                            value: event.target.value
                              .split("-")
                              .reverse()
                              .join("-"),
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="rk-event-filter-input">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={
                        filter.location == "" ? "Location" : filter.location
                      }
                      onChange={(event) => {
                        setFilter({ ...filter, location: event.target.value });
                        setFilterList({
                          ...filterList,
                          location: {
                            key: "location",
                            value: event.target.value,
                          },
                        });
                      }}
                    >
                      <option selected disabled>
                        Location
                      </option>
                      {locationList.map((e) => (
                        <option value={e}>{e}</option>
                      ))}
                      {/* <option value="2">Location 2</option>
                      <option value="3">Location 3</option> */}
                    </select>
                  </div>
                  <div className="rk-event-filter-input">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={
                        filter.chef == ""
                          ? "Chef name"
                          : `${filter.chef},${filterList.chef.value}`
                      }
                      onChange={(event) => {
                        let temp = event.target.value.split(",");
                        setFilter({ ...filter, chef: temp[0] });
                        setFilterList({
                          ...filterList,
                          chef: {
                            key: "chef",
                            value: temp[1],
                          },
                        });
                      }}
                    >
                      <option selected disabled>
                        Chef name
                      </option>
                      {chefList.map((e) => (
                        <option value={[e.id, e.name]}>{e.name}</option>
                      ))}
                      {/* <option value="1">Chef name 1</option>
                      <option value="2">Chef name 2</option>
                      <option value="3">Chef name 3</option> */}
                    </select>
                  </div>
                  <div className="rk-event-filter-input">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Rating
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <ul className="rk-event-filter-value-list">
                  {filterList.date.key == "date" ? (
                    <li className="rk-event-filter-value-item">
                      <span className="rk-event-filter-value-label">
                        Date:{" "}
                      </span>
                      <span className="rk-event-filter-value">
                        {" "}
                        {filterList.date.value}
                      </span>
                      <span className="rk-event-filter-value-remove">
                        <img
                          src="assets/images/remove-icon.png"
                          alt="remove-icon"
                          className="img-fluid"
                          onClick={() => {
                            setFilterList({
                              ...filterList,
                              date: "",
                            });
                            setFilter({
                              ...filter,
                              date: "",
                            });
                          }}
                        />
                      </span>
                    </li>
                  ) : null}
                  {filterList.location.key == "location" ? (
                    <li className="rk-event-filter-value-item">
                      <span className="rk-event-filter-value-label">
                        Location:{" "}
                      </span>
                      <span className="rk-event-filter-value">
                        {" "}
                        {filterList.location.value}
                      </span>
                      <span className="rk-event-filter-value-remove">
                        <img
                          src="assets/images/remove-icon.png"
                          alt="remove-icon"
                          className="img-fluid"
                          onClick={() => {
                            setFilterList({
                              ...filterList,
                              location: "",
                            });
                            setFilter({
                              ...filter,
                              location: "",
                            });
                          }}
                        />
                      </span>
                    </li>
                  ) : null}
                  {filterList.chef.key == "chef" ? (
                    <li className="rk-event-filter-value-item">
                      <span className="rk-event-filter-value-label">
                        Chef:{" "}
                      </span>
                      <span className="rk-event-filter-value">
                        {" "}
                        {filterList.chef.value}
                      </span>
                      <span className="rk-event-filter-value-remove">
                        <img
                          src="assets/images/remove-icon.png"
                          alt="remove-icon"
                          className="img-fluid"
                          onClick={() => {
                            setFilterList({
                              ...filterList,
                              chef: "",
                            });
                            setFilter({
                              ...filter,
                              chef: "",
                            });
                          }}
                        />
                      </span>
                    </li>
                  ) : null}
                  {filterList.rating.key == "rating" ? (
                    <li className="rk-event-filter-value-item">
                      <span className="rk-event-filter-value-label">
                        Rating:{" "}
                      </span>
                      <span className="rk-event-filter-value">
                        {" "}
                        {filterList.rating.value}
                      </span>
                      <span className="rk-event-filter-value-remove">
                        <img
                          src="assets/images/remove-icon.png"
                          alt="remove-icon"
                          className="img-fluid"
                          onClick={() => {
                            setFilterList({
                              ...filterList,
                              rating: "",
                            });
                            setFilter({
                              ...filter,
                              rating: "",
                            });
                          }}
                        />
                      </span>
                    </li>
                  ) : null}
                  {/* <li className="rk-event-filter-value-item">
                    <span className="rk-event-filter-value-label">
                      Location:{" "}
                    </span>
                    <span className="rk-event-filter-value">
                      {" "}
                      Bluffton, South Carolina
                    </span>
                    <span className="rk-event-filter-value-remove">
                      <img
                        src="assets/images/remove-icon.png"
                        alt="remove-icon"
                        className="img-fluid"
                      />
                    </span>
                  </li> */}
                </ul>
              </div>
              <div className="rk-event-slider-content">
                <div className="rk-event-slider-heading">
                  <h2 className="rk-event-slider-title">Upcoming Events</h2>
                  <a className="rk-event-slider-link" href="#">
                    See All
                  </a>
                </div>
                {list.upcoming?.length > 0 ? (
                  <div className="rk-event-slider">
                    <Slider {...settings.upcomingSettings}>
                      {list.upcoming.map((e, i) => {
                        return (
                          <div className="rk-event-slide">
                            <div className="rk-event-card">
                              <div className="rk-event-card-img">
                                <img
                                  src={
                                    e.thumbnail
                                      ? e.thumbnail
                                      : "assets/images/event-img1.png"
                                  }
                                  alt="event-img1"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="rk-event-card-body">
                                <div className="rk-event-sponsor">
                                  <div className="rk-event-sponsor-details">
                                    <span className="rk-event-sponsor-img">
                                      <img
                                        src={
                                          chef.upcoming[i]?.image
                                            ? chef.upcoming[i]?.image
                                            : "assets/images/sponsor-img.png"
                                        }
                                        alt="sponsor-img"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <label className="rk-event-sponsor-name">
                                      {chef.upcoming[i]?.name}
                                    </label>
                                  </div>
                                  <span className="rk-event-sponsore-icon">
                                    <svg
                                      width="21"
                                      height="20"
                                      viewBox="0 0 21 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.5833 17.2708L7.52083 15.4792L3.79167 16.9583C3.55556 17.0833 3.32292 17.0764 3.09375 16.9375C2.86458 16.7986 2.75 16.5903 2.75 16.3125V4.6875C2.75 4.50694 2.80208 4.34722 2.90625 4.20833C3.01042 4.06944 3.14583 3.96528 3.3125 3.89583L7.10417 2.5625C7.24306 2.52083 7.38194 2.5 7.52083 2.5C7.65972 2.5 7.79861 2.52083 7.9375 2.5625L13 4.33333L16.7083 2.85417C16.9444 2.74306 17.1771 2.75347 17.4062 2.88542C17.6354 3.01736 17.75 3.22222 17.75 3.5V15.2708C17.75 15.4236 17.6979 15.5556 17.5937 15.6667C17.4896 15.7778 17.3611 15.8611 17.2083 15.9167L13.4167 17.2708C13.2778 17.3125 13.1389 17.3333 13 17.3333C12.8611 17.3333 12.7222 17.3125 12.5833 17.2708ZM12.2917 15.8542V5.33333L8.20833 3.95833V14.4792L12.2917 15.8542Z"
                                        fill="#101223"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="rk-event-detail">
                                  <p className="rk-event-time-date">
                                    <span className="rk-event-date">
                                      {new Date(e.date).getDate() +
                                        "’ " +
                                        new Date(e.date)
                                          .toString()
                                          .slice(4, 7) +
                                        " " +
                                        String(new Date(e.date).getFullYear())}
                                    </span>{" "}
                                    |
                                    <span className="rk-event-time">
                                      {" "}
                                      {timeTo12(e.time)}
                                    </span>
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
                                        <g clip-path="url(#clip0_625_4701)">
                                          <path
                                            d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                            fill="#101223"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_625_4701">
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
                                      {e.noOfParticipants} /100
                                    </span>
                                  </p>
                                </div>
                                <h3 className="rk-event-card-title">
                                  {e.title}
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
                                        fill="#101223"
                                      />
                                    </svg>
                                  </span>
                                  <span>{e.location}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/event-img2.png"
                            alt="event-img1"
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
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5833 17.2708L7.52083 15.4792L3.79167 16.9583C3.55556 17.0833 3.32292 17.0764 3.09375 16.9375C2.86458 16.7986 2.75 16.5903 2.75 16.3125V4.6875C2.75 4.50694 2.80208 4.34722 2.90625 4.20833C3.01042 4.06944 3.14583 3.96528 3.3125 3.89583L7.10417 2.5625C7.24306 2.52083 7.38194 2.5 7.52083 2.5C7.65972 2.5 7.79861 2.52083 7.9375 2.5625L13 4.33333L16.7083 2.85417C16.9444 2.74306 17.1771 2.75347 17.4062 2.88542C17.6354 3.01736 17.75 3.22222 17.75 3.5V15.2708C17.75 15.4236 17.6979 15.5556 17.5937 15.6667C17.4896 15.7778 17.3611 15.8611 17.2083 15.9167L13.4167 17.2708C13.2778 17.3125 13.1389 17.3333 13 17.3333C12.8611 17.3333 12.7222 17.3125 12.5833 17.2708ZM12.2917 15.8542V5.33333L8.20833 3.95833V14.4792L12.2917 15.8542Z"
                                  fill="#101223"
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
                                  <g clip-path="url(#clip0_625_4701)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#101223"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_625_4701">
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
                                  fill="#101223"
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
                            alt="event-img1"
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
                                Jimmie Jay
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5833 17.2708L7.52083 15.4792L3.79167 16.9583C3.55556 17.0833 3.32292 17.0764 3.09375 16.9375C2.86458 16.7986 2.75 16.5903 2.75 16.3125V4.6875C2.75 4.50694 2.80208 4.34722 2.90625 4.20833C3.01042 4.06944 3.14583 3.96528 3.3125 3.89583L7.10417 2.5625C7.24306 2.52083 7.38194 2.5 7.52083 2.5C7.65972 2.5 7.79861 2.52083 7.9375 2.5625L13 4.33333L16.7083 2.85417C16.9444 2.74306 17.1771 2.75347 17.4062 2.88542C17.6354 3.01736 17.75 3.22222 17.75 3.5V15.2708C17.75 15.4236 17.6979 15.5556 17.5937 15.6667C17.4896 15.7778 17.3611 15.8611 17.2083 15.9167L13.4167 17.2708C13.2778 17.3125 13.1389 17.3333 13 17.3333C12.8611 17.3333 12.7222 17.3125 12.5833 17.2708ZM12.2917 15.8542V5.33333L8.20833 3.95833V14.4792L12.2917 15.8542Z"
                                  fill="#101223"
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
                                  <g clip-path="url(#clip0_625_4701)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#101223"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_625_4701">
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
                                  fill="#101223"
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
                                Jimmie Jay
                              </label>
                            </div>
                            <span className="rk-event-sponsore-icon">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5833 17.2708L7.52083 15.4792L3.79167 16.9583C3.55556 17.0833 3.32292 17.0764 3.09375 16.9375C2.86458 16.7986 2.75 16.5903 2.75 16.3125V4.6875C2.75 4.50694 2.80208 4.34722 2.90625 4.20833C3.01042 4.06944 3.14583 3.96528 3.3125 3.89583L7.10417 2.5625C7.24306 2.52083 7.38194 2.5 7.52083 2.5C7.65972 2.5 7.79861 2.52083 7.9375 2.5625L13 4.33333L16.7083 2.85417C16.9444 2.74306 17.1771 2.75347 17.4062 2.88542C17.6354 3.01736 17.75 3.22222 17.75 3.5V15.2708C17.75 15.4236 17.6979 15.5556 17.5937 15.6667C17.4896 15.7778 17.3611 15.8611 17.2083 15.9167L13.4167 17.2708C13.2778 17.3125 13.1389 17.3333 13 17.3333C12.8611 17.3333 12.7222 17.3125 12.5833 17.2708ZM12.2917 15.8542V5.33333L8.20833 3.95833V14.4792L12.2917 15.8542Z"
                                  fill="#101223"
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
                                  <g clip-path="url(#clip0_625_4701)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#101223"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_625_4701">
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
                                  fill="#101223"
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
                            alt="event-img1"
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
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5833 17.2708L7.52083 15.4792L3.79167 16.9583C3.55556 17.0833 3.32292 17.0764 3.09375 16.9375C2.86458 16.7986 2.75 16.5903 2.75 16.3125V4.6875C2.75 4.50694 2.80208 4.34722 2.90625 4.20833C3.01042 4.06944 3.14583 3.96528 3.3125 3.89583L7.10417 2.5625C7.24306 2.52083 7.38194 2.5 7.52083 2.5C7.65972 2.5 7.79861 2.52083 7.9375 2.5625L13 4.33333L16.7083 2.85417C16.9444 2.74306 17.1771 2.75347 17.4062 2.88542C17.6354 3.01736 17.75 3.22222 17.75 3.5V15.2708C17.75 15.4236 17.6979 15.5556 17.5937 15.6667C17.4896 15.7778 17.3611 15.8611 17.2083 15.9167L13.4167 17.2708C13.2778 17.3125 13.1389 17.3333 13 17.3333C12.8611 17.3333 12.7222 17.3125 12.5833 17.2708ZM12.2917 15.8542V5.33333L8.20833 3.95833V14.4792L12.2917 15.8542Z"
                                  fill="#101223"
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
                                  <g clip-path="url(#clip0_625_4701)">
                                    <path
                                      d="M1.125 10.2625C1.01667 10.2625 0.927083 10.2271 0.85625 10.1562C0.785417 10.0854 0.75 9.99583 0.75 9.8875V9.0875C0.75 8.79583 0.825 8.53125 0.975 8.29375C1.125 8.05625 1.33333 7.87917 1.6 7.7625C2.20833 7.49583 2.75625 7.30417 3.24375 7.1875C3.73125 7.07083 4.23333 7.0125 4.75 7.0125C5.26667 7.0125 5.76667 7.07083 6.25 7.1875C6.73333 7.30417 7.27917 7.49583 7.8875 7.7625C8.15417 7.87917 8.36458 8.05625 8.51875 8.29375C8.67292 8.53125 8.75 8.79583 8.75 9.0875V9.8875C8.75 9.99583 8.71458 10.0854 8.64375 10.1562C8.57292 10.2271 8.48333 10.2625 8.375 10.2625H1.125ZM9.225 10.2625C9.30833 10.2458 9.375 10.2021 9.425 10.1312C9.475 10.0604 9.5 9.97083 9.5 9.8625V9.0875C9.5 8.5625 9.36667 8.13125 9.1 7.79375C8.83333 7.45625 8.48333 7.18333 8.05 6.975C8.625 7.04167 9.16667 7.13958 9.675 7.26875C10.1833 7.39792 10.5958 7.54583 10.9125 7.7125C11.1875 7.87083 11.4042 8.06667 11.5625 8.3C11.7208 8.53333 11.8 8.79583 11.8 9.0875V9.8875C11.8 9.99583 11.7646 10.0854 11.6937 10.1562C11.6229 10.2271 11.5333 10.2625 11.425 10.2625H9.225ZM4.75 6.25C4.2 6.25 3.75 6.075 3.4 5.725C3.05 5.375 2.875 4.925 2.875 4.375C2.875 3.825 3.05 3.375 3.4 3.025C3.75 2.675 4.2 2.5 4.75 2.5C5.3 2.5 5.75 2.675 6.1 3.025C6.45 3.375 6.625 3.825 6.625 4.375C6.625 4.925 6.45 5.375 6.1 5.725C5.75 6.075 5.3 6.25 4.75 6.25ZM9.25 4.375C9.25 4.925 9.075 5.375 8.725 5.725C8.375 6.075 7.925 6.25 7.375 6.25C7.28333 6.25 7.18125 6.24375 7.06875 6.23125C6.95625 6.21875 6.85417 6.19583 6.7625 6.1625C6.9625 5.95417 7.11458 5.69792 7.21875 5.39375C7.32292 5.08958 7.375 4.75 7.375 4.375C7.375 4 7.32292 3.66875 7.21875 3.38125C7.11458 3.09375 6.9625 2.82917 6.7625 2.5875C6.85417 2.5625 6.95625 2.54167 7.06875 2.525C7.18125 2.50833 7.28333 2.5 7.375 2.5C7.925 2.5 8.375 2.675 8.725 3.025C9.075 3.375 9.25 3.825 9.25 4.375Z"
                                      fill="#101223"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_625_4701">
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
                                  fill="#101223"
                                />
                              </svg>
                            </span>
                            <span>Bluffton, South Carolina, 29910</span>
                          </p>
                        </div>
                      </div>
                    </div> */}
                    </Slider>
                  </div>
                ) : (
                  <h4
                    className="rk-no-event-title d-flex justify-content-center my-5"
                    style={{ fontSize: "20px" }}
                  >
                    No Upcoming Events.
                  </h4>
                )}
              </div>
              <div className="rk-event-slider-content">
                <div className="rk-event-slider-heading">
                  <h2 className="rk-event-slider-title">Completed Events</h2>
                  <a className="rk-event-slider-link" href="#">
                    See All
                  </a>
                </div>
                {list.completed?.length > 0 ? (
                  <div className="rk-event-slider">
                    <Slider {...settings.completedSettings}>
                      {list.completed.map((e, i) => {
                        return (
                          <div className="rk-event-slide">
                            <div className="rk-event-card">
                              <div className="rk-event-card-img">
                                <img
                                  src={
                                    e.thumbnail
                                      ? e.thumbnail
                                      : "assets/images/complete-event-img1.png"
                                  }
                                  alt="complete-event-img1"
                                  className="img-fluid"
                                />
                                <div className="rk-event-card-rating">
                                  <span className="rk-event-card-rating-icon">
                                    <img
                                      src="assets/images/star-icon.png"
                                      alt="star-icon"
                                      className="img-fluid"
                                    />
                                  </span>
                                  <span className="rk-event-card-rating-point">
                                    {e.rating ? e.rating : 3.5}
                                  </span>
                                </div>
                              </div>
                              <div className="rk-event-card-body">
                                <div className="rk-event-sponsor">
                                  <div className="rk-event-sponsor-details">
                                    <span className="rk-event-sponsor-img">
                                      <img
                                        src={
                                          chef.completed[i]?.image
                                            ? chef.completed[i]?.image
                                            : "assets/images/sponsor-img2.png"
                                        }
                                        alt="sponsor-img2"
                                        className="img-fluid"
                                      />
                                    </span>
                                    <label className="rk-event-sponsor-name">
                                      {chef.completed[i]?.name}
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
                                      {new Date(e.date).getDate() +
                                        "’ " +
                                        new Date(e.date)
                                          .toString()
                                          .slice(4, 7) +
                                        " " +
                                        String(new Date(e.date).getFullYear())}
                                    </span>{" "}
                                    |
                                    <span className="rk-event-time">
                                      {" "}
                                      {timeTo12(e.time)}
                                    </span>
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
                                      {e.noOfParticipants} /100
                                    </span>
                                  </p>
                                </div>
                                <h3 className="rk-event-card-title">
                                  {e.title}
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
                                  <span>{e.location}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/* <div className="rk-event-slide">
                      <div className="rk-event-card">
                        <div className="rk-event-card-img">
                          <img
                            src="assets/images/complete-event-img2.png"
                            alt="complete-event-img2"
                            className="img-fluid"
                          />
                          <div className="rk-event-card-rating">
                            <span className="rk-event-card-rating-icon">
                              <img
                                src="assets/images/star-icon.png"
                                alt="star-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-event-card-rating-point">
                              5.0
                            </span>
                          </div>
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
                                John Doe
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
                            src="assets/images/complete-event-img3.png"
                            alt="complete-event-img3"
                            className="img-fluid"
                          />
                          <div className="rk-event-card-rating">
                            <span className="rk-event-card-rating-icon">
                              <img
                                src="assets/images/star-icon.png"
                                alt="star-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-event-card-rating-point">
                              2.5
                            </span>
                          </div>
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
                                John Doe
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
                            src="assets/images/complete-event-img4.png"
                            alt="complete-event-img4"
                            className="img-fluid"
                          />
                          <div className="rk-event-card-rating">
                            <span className="rk-event-card-rating-icon">
                              <img
                                src="assets/images/star-icon.png"
                                alt="star-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-event-card-rating-point">
                              4.5
                            </span>
                          </div>
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
                                John Doe
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
                            src="assets/images/complete-event-img5.png"
                            alt="complete-event-img5"
                            className="img-fluid"
                          />
                          <div className="rk-event-card-rating">
                            <span className="rk-event-card-rating-icon">
                              <img
                                src="assets/images/star-icon.png"
                                alt="star-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-event-card-rating-point">
                              3.5
                            </span>
                          </div>
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
                                John Doe
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
                    </div> */}
                    </Slider>
                  </div>
                ) : (
                  <h4
                    className="rk-no-event-title d-flex justify-content-center my-5"
                    style={{ fontSize: "20px" }}
                  >
                    No Completed Events.
                  </h4>
                )}
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
