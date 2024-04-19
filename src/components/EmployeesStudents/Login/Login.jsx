import React, { useState, useEffect } from "react";
import Footers from "../includes/Footers";
import Headers from "../includes/Headers";
import { useNavigate } from "react-router-dom";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";

export default function StudentLogin() {
  const navigate = useNavigate();
  CustomScrollBar(".rk-site");
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    let temp = localStorage.getItem("rockolayuser");

    if (temp) {
      setData(JSON.parse(temp));
      setRememberMe(!rememberMe);
    }
  }, []);

  const validate = () => {
    let input = data;

    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email_err"] = "Please enter email";
    } else if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(input.email)
    ) {
      isValid = false;
      errors["email_err"] = "Invalid email";
    }
    if (!input["password"]) {
      isValid = false;
      errors["password_err"] = "Please enter password";
    }

    setErrors(errors);
    return isValid;
  };

  function submitHandler(e) {
    e.preventDefault();
    setDisable(true);

    if (validate()) {
      if (rememberMe) {
        localStorage.setItem("rockolayuser", JSON.stringify(data));
      } else {
        localStorage.removeItem("rockolayuser");
      }
      const myurl = `${process.env.REACT_APP_base_url}api/student/login`;
      var bodyFormData = new URLSearchParams();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("email", data.email);
      bodyFormData.append("password", data.password);
      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response?.data?.success) {
            localStorage.setItem("DM_rockoly", "student");
            localStorage.setItem("DM_rockoly_name", response?.data.data.name);
            localStorage.setItem("DM_rockoly_email", response?.data.data.email);
            localStorage.setItem(
              "DM_rockoly_userID",
              response?.data.data.userID
            );
            localStorage.setItem("DM_rockoly_image", response?.data.data.image);
            localStorage.setItem(
              "DM_rockoly_occupation",
              response?.data.data.occupation
            );
            toast.success("LogIn Successfully...!");

            navigate(`/dashboard`);
          } else {
            setErrors({
              submission_err: "Your email or password is wrong...!",
            });
          }
          setDisable(false);
        })
        .catch((error) => {
          console.log(error);
          setErrors({
            submission_err: "Something went wrong! Please try letter.",
          });

          setDisable(false);
        });
    } else {
      setDisable(false);
    }
  }

  return (
    <div className="rk-site">
      <Headers />

      {/* <!-- Site Content Start --> */}
      <main className="rk-site-content">
        {/* <!-- Landing Section Start --> */}
        <section className="rk-login-reg-section">
          <div className="container">
            <div className="rk-login-reg-content">
              <div className="row">
                <div className="col col-12 col-md-5 col-lg-6">
                  <div className="rk-login-reg-details">
                    <h3 className="rk-login-reg-subtitle">
                      Welcome To Rockoly
                    </h3>
                    <p className="rk-login-reg-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="rk-login-reg-logo">
                      <img
                        src="assets/images/login-regidter-logo.png"
                        alt="login-regidter-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-7 col-lg-6">
                  <div className="rk-login-reg-form-content">
                    <div className="rk-login-reg-form">
                      <div className="rk-login-img">
                        <img
                          src="assets/images/login-img.png"
                          alt="login-img"
                          className="img-fluid"
                        />
                      </div>
                      <h1 className="rk-section-title">Log in to Rockoly</h1>

                      <div className="rk-login-reg">
                        <form>
                          <div className="rk-form-input">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Your Email"
                              value={data.email}
                              onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                                let temp = errors;
                                delete temp.email_err;
                                setErrors(temp);
                              }}
                            />
                            <span className="rk-form-input-icon">
                              <img
                                src="assets/images/mail-icon.png"
                                alt="mail-icon"
                                className="img-fluid"
                              />
                            </span>
                            <div className="text-danger">
                              {errors.email_err}
                            </div>
                          </div>
                          <div className="rk-form-input">
                            <input
                              type={!showPassword ? "password" : "text"}
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Password"
                              value={data.password}
                              onChange={(e) => {
                                setData({ ...data, password: e.target.value });
                                let temp = errors;
                                delete temp.password_err;
                                setErrors(temp);
                              }}
                            />
                            <span className="rk-form-input-icon">
                              <img
                                src="assets/images/password-icon.png"
                                alt="password-icon"
                                className="img-fluid"
                              />
                            </span>
                            <span className="rk-form-input-icon rk-form-passrowd-icon">
                              <img
                                src={
                                  !showPassword
                                    ? "assets/images/eye-icon.png"
                                    : "assets/images/eye-off-icon.png"
                                }
                                alt={
                                  !showPassword ? "eye-icon" : "eye-off-icon"
                                }
                                className="img-fluid hand_arrow"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            </span>
                            <div className="text-danger">
                              {errors.password_err}
                              {errors.submission_err}
                            </div>
                          </div>

                          <div className="rk-remember-content">
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input hand_arrow"
                                id="exampleCheck1"
                                checked={rememberMe}
                                onClick={() => setRememberMe(!rememberMe)}
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheck1"
                              >
                                Remember me out
                              </label>
                            </div>
                            <a
                              onClick={() => {
                                navigate("/forgot-password");
                              }}
                              className="rk-forgot-pass-link hand_arrow"
                              href
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-success w-100"
                            onClick={(e) => submitHandler(e)}
                            disabled={disable}
                          >
                            {disable ? "Processing..." : "Log in"}
                          </button>
                        </form>
                        <p className="rk-login-reg-form-notes">
                          You haven't any account?{" "}
                          <a
                            href
                            onClick={() => {
                              navigate("/register");
                            }}
                            className="rk-login-reg-form-notes-link hand_arrow"
                          >
                            Sign Up
                          </a>
                        </p>
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
      <Footers />
    </div>
  );
}
