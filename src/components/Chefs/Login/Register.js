import React, { useState } from "react";
import Footers from "../includes/Footers";
import Headers from "../includes/Headers";
import { useNavigate } from "react-router-dom";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";

export default function ChefRegister() {
  const navigate = useNavigate();
  CustomScrollBar(".rk-site");
  const [data, setData] = useState({
    email: "",
    password1: "",
    password2: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState({
    password1: false,
    password2: false,
  });
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);
  var viewData = [
    false,
    /[A-Z]/.test(data.password1),
    /[a-z]/.test(data.password1),
    /[0-9]/.test(data.password1),
    /[!@#$%^&*.]/.test(data.password1),
    data.password1.length >= 8,
  ];
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
    if (!input["password1"]) {
      isValid = false;
      errors["password_err1"] = "Please create password";
    }
    console.log(!new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(input.phone));
    if (!input["phone"]) {
      isValid = false;
      errors["phone_err"] = "Please enter phone number";
    } else if (!new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(input.phone)) {
      isValid = false;
      errors["phone_err"] = "Invalid Phone number";
    }

    if (!input["password2"]) {
      isValid = false;
      errors["password_err2"] = "Please confirm password";
    }
    if (
      input["password1"] &&
      input["password2"] &&
      input["password2"] !== input["password1"]
    ) {
      isValid = false;
      errors["equalization_err"] = "Please enter same password";
    }

    if (
      input["password1"] &&
      input["password2"] &&
      input["password2"] === input["password1"] &&
      !new RegExp(
        /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      ).test(input.password1)
    ) {
      isValid = false;
      errors["validation_err"] = [
        "Password must contain least :",
        "   One Uppercase characters (A-Z)",
        "   One Lowercase characters (a-z)",
        "   One Digits (0-9)",
        "   One Special characters (!@#$%^&*.)",
        "   length must be 8 or more",
      ];
    }

    setErrors(errors);
    return isValid;
  };
  function submitHandler(e) {
    e.preventDefault();
    setDisable(true);

    if (validate()) {
      const myurl = `${process.env.REACT_APP_base_url}api/register`;
      var bodyFormData = new URLSearchParams();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("email", data.email);
      bodyFormData.append("password", data.password1);
      bodyFormData.append("phone", data.phone);

      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response?.data?.success) {
            navigate(`/chef-login`);
            toast.success("User Registered Successfully...!");
          } else {
            setDisable(false);
            setErrors({ submission_err: "Email already exist" });
          }
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
                <div className="col col-12 col-md-6 col-lg-6">
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
                <div className="col col-12 col-md-6 col-lg-6">
                  <div className="rk-login-reg-form-content">
                    <div className="rk-login-reg-form">
                      <div className="rk-login-img">
                        <img
                          src="assets/images/login-img.png"
                          alt="login-img"
                          className="img-fluid"
                        />
                      </div>
                      <h1 className="rk-section-title">Sign up to Rockoly</h1>

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
                              type={
                                !showPassword.password1 ? "password" : "text"
                              }
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Create Your Password"
                              value={data.password1}
                              onChange={(e) => {
                                setData({ ...data, password1: e.target.value });
                                let temp = errors;
                                delete temp.password_err1;
                                delete temp.equalization_err;
                                delete temp.validation_err;
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
                                  !showPassword.password1
                                    ? "assets/images/eye-icon.png"
                                    : "assets/images/eye-off-icon.png"
                                }
                                alt={
                                  !showPassword.password1
                                    ? "eye-icon"
                                    : "eye-off-icon"
                                }
                                className="img-fluid hand_arrow"
                                onClick={() => {
                                  setShowPassword({
                                    ...showPassword,
                                    password1: !showPassword.password1,
                                  });
                                }}
                              />
                            </span>
                            <div className="text-danger">
                              {errors.password_err1}
                            </div>
                          </div>
                          <div className="rk-form-input">
                            <input
                              type={
                                !showPassword.password2 ? "password" : "text"
                              }
                              className="form-control"
                              id="exampleInputEmail1"
                              value={data.password2}
                              placeholder="Confirm Your Password"
                              onChange={(e) => {
                                setData({ ...data, password2: e.target.value });
                                let temp = errors;
                                delete temp.password_err2;
                                delete temp.equalization_err;
                                delete temp.validation_err;
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
                                  !showPassword.password2
                                    ? "assets/images/eye-icon.png"
                                    : "assets/images/eye-off-icon.png"
                                }
                                alt={
                                  !showPassword.password2
                                    ? "eye-icon"
                                    : "eye-off-icon"
                                }
                                className="img-fluid hand_arrow"
                                onClick={() =>
                                  setShowPassword({
                                    ...showPassword,
                                    password2: !showPassword.password2,
                                  })
                                }
                              />
                            </span>
                            <div className="text-danger">
                              {errors.password_err2}
                              {errors.equalization_err}
                              {errors.validation_err?.map((e, i) => (
                                <div
                                  className={
                                    i == 0
                                      ? "text-secondary"
                                      : viewData[i]
                                      ? "text-success"
                                      : "text-danger"
                                  }
                                >
                                  {i == 0
                                    ? e
                                    : `${viewData[i] ? "✅" : "❌"}` + e}
                                  <br />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rk-form-input">
                            <input
                              type="number"
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="Phone Number"
                              value={data.phone}
                              onChange={(e) => {
                                setData({ ...data, phone: e.target.value });
                                let temp = errors;
                                delete temp.phone_err;
                                setErrors(temp);
                              }}
                            />
                            <span className="rk-form-input-icon">
                              <img
                                src="assets/images/call-icon.png"
                                alt="call-icon"
                                className="img-fluid"
                              />
                            </span>
                            <div className="text-danger">
                              {errors.phone_err}
                              {errors.submission_err}
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-success w-100"
                            onClick={(e) => submitHandler(e)}
                            disabled={disable}
                          >
                            {disable ? "Processing..." : "Register"}
                          </button>
                        </form>
                        <p className="rk-login-reg-form-notes">
                          You have already an account?{" "}
                          <a
                            href
                            onClick={() => {
                              navigate("/login");
                            }}
                            className="rk-login-reg-form-notes-link hand_arrow"
                          >
                            Sign In
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
