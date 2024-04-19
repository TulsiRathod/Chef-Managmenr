import React, { useState, useEffect } from "react";
import Footers from "../includes/Footers";
import Headers from "../includes/Headers";
import { useNavigate, useParams } from "react-router-dom";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { baseURL } from "../../utils/base_url";
import { toast } from "react-toastify";

export default function StudentSetPassword() {
  const { id } = useParams();
  const [visible, setVisible] = useState({ component: false, loader: true });
  const [tokenData, setTokenData] = useState();
  const navigate = useNavigate();
  CustomScrollBar(".rk-site");
  const [data, setData] = useState({ password1: "", password2: "" });
  const [showPassword, setShowPassword] = useState({
    password1: false,
    password2: false,
  });
  const [change, setChange] = useState(false);
  var viewData = [
    false,
    /[A-Z]/.test(data.password1),
    /[a-z]/.test(data.password1),
    /[0-9]/.test(data.password1),
    /[!@#$%^&*.]/.test(data.password1),
    data.password1.length >= 8,
  ];
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);

  const validate = () => {
    let input = data;

    let errors = {};
    let isValid = true;

    if (!input["password1"]) {
      isValid = false;
      errors["password_err1"] = "Please create password";
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
      const myurl = `${process.env.REACT_APP_base_url}api/${tokenData.type}-forgot-password`;
      var bodyFormData = new URLSearchParams();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("email", tokenData.email);
      bodyFormData.append("new_password", data.password1);
      bodyFormData.append("confirm_password", data.password2);

      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => {
          console.log(response);

          if (response.data.success) {
            toast.success("Password Changed Successfully...!");
            navigate(`/login`);
          } else {
            toast.error({
              submission_err: response?.data?.message
                ? response?.data?.message
                : "Something went wrong...!",
            });
          }
          setDisable(false);
          setChange(!change);
        })
        .catch((error) => {
          console.log(error);
          setChange(!change);

          toast.error({
            submission_err: error?.data?.message
              ? error?.data?.message
              : "Something went wrong...!",
          });

          setDisable(false);
        });
    } else {
      setDisable(false);
    }
  }
  useEffect(() => {
    verifyToken();
  }, [change]);
  const verifyToken = () => {
    const myurl = `${process.env.REACT_APP_base_url}api/verify-token`;
    var bodyFormData = new URLSearchParams();
    bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
    bodyFormData.append("token", id);
    axios({
      method: "post",
      url: myurl,
      data: bodyFormData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        console.log(response);
        if (response?.data?.success) {
          setVisible({ loader: false, component: true });
          setTokenData(response.data.data);
        } else {
          toast.error({
            submission_err: response?.data?.message
              ? response?.data?.message
              : "Something Went wrong",
          });
          setVisible({ loader: false, component: false });
        }
      })
      .catch((error) => {
        console.log(error);
        setVisible({ loader: false, component: false });

        toast.error({
          submission_err: error?.data?.message
            ? error?.data?.message
            : "Something Went wrong",
        });
      });
  };

  return visible.component ? (
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
                        src={`${baseURL}/assets/images/login-regidter-logo.png`}
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
                          src={`${baseURL}/assets/images/login-img.png`}
                          alt="login-img"
                          className="img-fluid"
                        />
                      </div>
                      <h1 className="rk-section-title">
                        Create Password to Rockoly
                      </h1>

                      <div className="rk-login-reg">
                        <form>
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
                                setData({
                                  ...data,
                                  password1: e.target.value,
                                });
                                let temp = errors;
                                delete temp.password_err1;
                                delete temp.equalization_err;
                                delete temp.validation_err;
                                setErrors(temp);
                              }}
                            />
                            <span className="rk-form-input-icon">
                              <img
                                src={`${baseURL}/assets/images/password-icon.png`}
                                alt="password-icon"
                                className="img-fluid hand_arrow"
                              />
                            </span>
                            <span className="rk-form-input-icon rk-form-passrowd-icon">
                              <img
                                src={
                                  !showPassword.password1
                                    ? `${baseURL}/assets/images/eye-icon.png`
                                    : `${baseURL}/assets/images/eye-off-icon.png`
                                }
                                alt={
                                  !showPassword.password1
                                    ? "eye-icon"
                                    : "eye-off-icon"
                                }
                                className="img-fluid hand_arrow"
                                onClick={() =>
                                  setShowPassword({
                                    ...showPassword,
                                    password1: !showPassword.password1,
                                  })
                                }
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
                              placeholder="Confirm Your Password"
                              value={data.password2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  password2: e.target.value,
                                });
                                let temp = errors;
                                delete temp.password_err2;
                                delete temp.equalization_err;
                                delete temp.validation_err;
                                setErrors(temp);
                              }}
                            />
                            <span className="rk-form-input-icon">
                              <img
                                src={`${baseURL}/assets/images/password-icon.png`}
                                alt="password-icon"
                                className="img-fluid hand_arrow"
                              />
                            </span>
                            <span className="rk-form-input-icon rk-form-passrowd-icon">
                              <img
                                src={
                                  !showPassword.password2
                                    ? `${baseURL}/assets/images/eye-icon.png`
                                    : `${baseURL}/assets/images/eye-off-icon.png`
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
                              {errors.password_err2}
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
  ) : visible.loader ? (
    <div class="d-flex justify-content-center mt-5">
      <div class="spinner-border" role="status">
        <span class="rk-site"> &nbsp;</span>
      </div>
    </div>
  ) : (
    <div class="d-flex justify-content-center mt-5 b-2">
      <div className="rk-site">
        <img
          src={`${baseURL}/assets/images/link-expired.png`}
          alt="Link expired"
        />
      </div>
    </div>
  );
}
