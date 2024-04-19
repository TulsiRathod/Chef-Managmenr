import React, { useState } from "react";
import Footers from "../includes/Footers";
import Headers from "../includes/Headers";
import { useNavigate } from "react-router-dom";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";

export default function StudentForgot() {
  const navigate = useNavigate();
  CustomScrollBar(".rk-site");
  const [data, setData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);

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

    setErrors(errors);
    return isValid;
  };
  function submitHandler(e) {
    e.preventDefault();
    setDisable(true);

    if (validate()) {
      const myurl = `${process.env.REACT_APP_base_url}api/check-email`;
      var bodyFormData = new URLSearchParams();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("email", data.email);
      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          if (response?.data?.success) {
            toast.success("Check your mail box...!");
            navigate(`/login`);
          } else {
            setErrors({
              submission_err: response?.data?.message
                ? response?.data?.message
                : "Something went wrong...!",
            });
          }
          setDisable(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            error?.response?.data?.message
              ? error?.response?.data?.message
              : "Something went wrong...!"
          );
          // setErrors({
          //   submission_err: error?.data?.message
          //     ? error?.data?.message
          //     : "Something went wrong...!",
          // });

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
                      <h1 className="rk-section-title">
                        Forgot Password to Rockoly
                      </h1>

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
                              {errors.submission_err}
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-success w-100"
                            onClick={(e) => submitHandler(e)}
                            disabled={disable}
                          >
                            {disable ? "Processing..." : "Confirm"}
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
