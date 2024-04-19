import React from "react";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import CustomScrollBar from "../../utils/ScrollBar";

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
export default function ChefMessages() {
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();

  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  CustomScrollBar(".rk-message-user-list");
  CustomScrollBar(".rk-user-chat-body");

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
              <div class="rk-message-content">
                <div class="rk-message-content__inner">
                  <div class="rk-message-user-content">
                    <div class="rk-message-user-search">
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
                    </div>

                    <div class="rk-message-user-list">
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img1.png"
                            alt="chat-img1"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img2.png"
                            alt="chat-img2"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-message-icon">
                              <span>1</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img3.png"
                            alt="chat-img3"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-message-icon">
                              <span>2</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img4.png"
                            alt="chat-img4"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img5.png"
                            alt="chat-img5"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img6.png"
                            alt="chat-img6"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img7.png"
                            alt="chat-img7"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rk-message-user-item">
                        <div class="rk-message-user-img">
                          <img
                            src="assets/images/chat-img8.png"
                            alt="chat-img7"
                            class="img-fluid"
                          />
                        </div>
                        <div class="rk-message-user-details">
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-name">Jane Cooper</h5>
                            <span class="rk-message-user-message-time">
                              9:21
                            </span>
                          </div>
                          <div class="rk-message-user-detail-item">
                            <h5 class="rk-message-user-message-content">
                              Current message a chatbot is...
                            </h5>
                            <span class="rk-message-user-send-icon">
                              <img
                                src="assets/images/message-send-icon.png"
                                alt="message-send-icon"
                                class="img-fluid"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rk-message-user-chat-content">
                    <div class="rk-user-chat-header">
                      <div class="rk-user-chat-header__inner">
                        <div class="rk-user-chat-img">
                          <img src="assets/images/chat-img1.png" alt="" />
                        </div>
                        <div class="rk-user-chat-header-details">
                          <h3 class="rk-user-chat-header-name">Jane Cooper</h3>
                          <p class="rk-user-chat-header-designation">
                            Business Consultant
                          </p>
                        </div>
                      </div>
                      <div class="rk-user-chat-header__inner">
                        <div class="btn-group dropstart">
                          <span
                            class="dropdown-toggle rk-user-chat-option"
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
                              <a class="dropdown-item" href="#">
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
                    <div class="rk-user-chat-body" data-scrollbar>
                      <div class="rk-user-chat-message">
                        <ul class="rk-user-chat-message-list">
                          <li class="rk-user-chat-message-item">
                            Hello there! 👋
                          </li>
                          <li class="rk-user-chat-message-item">
                            Lorem ipsum dolor ‍💻
                          </li>
                        </ul>
                        <div class="rk-user-chat-message-sender">
                          <div class="rk-user-chat-message-sender-img">
                            <img
                              src="assets/images/chat-img1.png"
                              alt="chat-img1"
                              class="img-fluid"
                            />
                          </div>
                          <span class="rk-user-chat-message-sender-time">
                            9:21
                          </span>
                        </div>
                      </div>
                      <div class="rk-user-chat-message rk-current-user-chat-message">
                        <ul class="rk-user-chat-message-list">
                          <li class="rk-user-chat-message-item">
                            Hello there! 👋
                          </li>
                          <li class="rk-user-chat-message-item">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                        </ul>
                        <div class="rk-user-chat-message-sender">
                          <div class="rk-user-chat-message-sender-img">
                            <img
                              src="assets/images/chat-img1.png"
                              alt="chat-img1"
                              class="img-fluid"
                            />
                          </div>
                          <span class="rk-user-chat-message-sender-time">
                            9:21
                          </span>
                        </div>
                      </div>
                      <div class="rk-user-chat-message">
                        <ul class="rk-user-chat-message-list">
                          <li class="rk-user-chat-message-item">
                            First things first: what's your name?
                          </li>
                        </ul>
                        <div class="rk-user-chat-message-sender">
                          <div class="rk-user-chat-message-sender-img">
                            <img
                              src="assets/images/chat-img1.png"
                              alt="chat-img1"
                              class="img-fluid"
                            />
                          </div>
                          <span class="rk-user-chat-message-sender-time">
                            9:21
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="rk-user-chat-footer">
                      <div class="rk-user-chat-input">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Write a message"
                        />
                      </div>
                      <div class="rk-user-chat-file">
                        <span class="rk-user-chat-file-*icon">
                          <img
                            src="assets/images/choose-file.png"
                            alt="choose-file"
                            class="img-fluid"
                          />
                        </span>
                      </div>
                      <div class="rk-user-chat-btn">
                        <button class="btn btn-success">
                          <img
                            src="assets/images/send-icon.png"
                            alt="send-icon"
                            class="img-fluid"
                          />
                        </button>
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
