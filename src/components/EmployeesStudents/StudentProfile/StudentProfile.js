import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../includes/HeaderLogo";
import SideNavbar from "../includes/SideNavbar";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/actions/index";
import CustomScrollBar from "../../utils/ScrollBar";
import axios from "axios";
import { toast } from "react-toastify";

export default function StudentProfile() {
  const [data, setData] = useState({
    name: localStorage.getItem("DM_rockoly_name")
      ? localStorage.getItem("DM_rockoly_name")
      : "",
    email: localStorage.getItem("DM_rockoly_email")
      ? localStorage.getItem("DM_rockoly_email")
      : "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    id: localStorage.getItem("DM_rockoly_userID")
      ? localStorage.getItem("DM_rockoly_userID")
      : "",
    occupation: localStorage.getItem("DM_rockoly_occupation")
      ? localStorage.getItem("DM_rockoly_occupation")
      : "",
    image:
      localStorage.getItem("DM_rockoly_image") == "profile-img.png" ||
      localStorage.getItem("DM_rockoly_image") == null ||
      !localStorage.getItem("DM_rockoly_image")
        ? "assets/images/profile-img.png"
        : localStorage.getItem("DM_rockoly_image"),
  });
  const [showPassword, setShowPassword] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  });
  var viewData = [
    false,
    /[A-Z]/.test(data.newPassword),
    /[a-z]/.test(data.newPassword),
    /[0-9]/.test(data.newPassword),
    /[!@#$%^&*.]/.test(data.newPassword),
    data.newPassword.length >= 8,
  ];
  var calc =
    data.confirmPassword == "" &&
    data.newPassword == "" &&
    data.oldPassword == ""
      ? true
      : data.confirmPassword == "" ||
        data.newPassword == "" ||
        data.oldPassword == ""
      ? false
      : new RegExp(
          /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        ).test(data.newPassword)
      ? data.newPassword != data.oldPassword
      : false;

  const [disable1, setDisable1] = useState(false);
  const [disable, setDisable] = useState(false);
  const [errors, setErrors] = useState({});
  const [nameErrors, setNameErrors] = useState({});

  const [pictureName, setPictureName] = useState({});
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });
  const navigate = useNavigate();
  const state = useSelector((state) => state.setToggle);
  const dispatcher = useDispatch();
  const [isPicUpload, setIsPicUpload] = useState(false);
  const handleImg = (e) => {
    if (e?.target?.files[0]) {
      setImg({
        src: URL.createObjectURL(e?.target?.files[0]),
        alt: e?.target?.files[0].name,
      });
      setDisable(true);
      setIsPicUpload(true);

      const myurl = `${process.env.REACT_APP_base_url}api/upload-img`;
      var bodyFormData = new FormData();

      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);

      bodyFormData.append("image", e?.target?.files[0]);

      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
      })
        .then((result) => {
          if (result?.data?.sucecess == true) {
            setPictureName(result?.data?.data?.filepath_url);
            setDisable(false);
          } else {
            console.log("Error:=====");
            setIsPicUpload(false);
            setPictureName("");
            setDisable(false);
          }
        })
        .catch((error) => {
          console.log("Errors", error);
          setIsPicUpload(false);
          setPictureName("");
          setDisable(false);
        });
    }
  };
  function toggleList(event) {
    event.currentTarget.classList.toggle("rk-menu-icon-active");
    dispatcher(toggle());
  }
  CustomScrollBar(".rk-dashboard-content-area");
  CustomScrollBar(".modal-body");
  const passValidate = () => {
    let input = data;

    let passErrors = {};
    let isValidPass = true;
    if (
      input["newPassword"] == "" &&
      input["confirmPassword"] == "" &&
      input["oldPassword"] == ""
    ) {
      isValidPass = false;
    } else {
      if (input["oldPassword"] == "") {
        isValidPass = false;
        passErrors["old_password"] = "Please enter old password.";
      }
      if (input["newPassword"] == "") {
        isValidPass = false;
        passErrors["new_password"] = "Please enter new password.";
      }
      if (input["confirmPassword"] == "") {
        isValidPass = false;
        passErrors["confirm_password"] = "Please enter confirm password.";
      }
      if (input["newPassword"] != "" && input["confirmPassword"] != "") {
        if (input["newPassword"] != input["confirmPassword"]) {
          isValidPass = false;
          passErrors["password_error"] =
            "New password and confirm password are not same.";
        }
      }
      if (
        input["newPassword"] != "" &&
        input["confirmPassword"] != "" &&
        input["newPassword"] == input["confirmPassword"] &&
        !new RegExp(
          /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        ).test(input.newPassword)
      ) {
        isValidPass = false;
        passErrors["validation_err"] = [
          "Password must contain least :",
          "   One Uppercase characters (A-Z)",
          "   One Lowercase characters (a-z)",
          "   One Digits (0-9)",
          "   One Special characters (!@#$%^&*.)",
          "   length must be 8 or more",
        ];
      }
      if (
        input["newPassword"] != "" &&
        input["confirmPassword"] != "" &&
        input["newPassword"] == input["confirmPassword"] &&
        new RegExp(
          /^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        ).test(input.newPassword) &&
        data.newPassword == data.oldPassword
      ) {
        isValidPass = false;
        passErrors["password_error"] =
          "New password and old password can't be same.";
      }
    }
    setErrors(passErrors);
    return isValidPass;
  };
  const nameValidate = () => {
    let input = data;

    let passErrors = {};
    let isValidPass = true;
    if (
      input["name"] != localStorage.getItem("DM_rockoly_name") ||
      isPicUpload
    ) {
      if (input["name"] == "") {
        isValidPass = false;
        passErrors["name_err"] = "Please enter name.";
      }
    } else {
      isValidPass = false;
    }
    setNameErrors(passErrors);
    return isValidPass;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisable1(true);
    if (nameValidate()) {
      if (isPicUpload) {
        setDisable(true);
        const { name, email } = data;
        const myurl = `${process.env.REACT_APP_base_url}api/update-profiled`;
        var bodyFormData = new URLSearchParams();
        bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);

        bodyFormData.append("name", name);
        bodyFormData.append("image", pictureName);
        bodyFormData.append("email", email);

        axios({
          method: "post",
          url: myurl,
          data: bodyFormData,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then((response) => {
            if (response?.data?.success == true) {
              localStorage.setItem("DM_rockoly_name", name);
              localStorage.setItem(
                "DM_rockoly_image",
                response?.data?.data?.image
              );
              setDisable(false);
              setIsPicUpload(false);
              setPictureName({});
              toast.success("Profile Updated Successfully...!");
              setData({
                ...data,
                name: name,
                image: response?.data?.data?.image,
              });
            } else {
              console.log("===Error===");
              setDisable(false);
              setPictureName({});
              setIsPicUpload(false);
            }
          })
          .catch((error) => {
            toast.success("Something went wrong");
            setPictureName({});
            setDisable(false);
            setIsPicUpload(false);
          });
      } else {
        setDisable(true);
        const { name, email } = data;
        const myurl = `${process.env.REACT_APP_base_url}api/update-profiled`;
        var bodyFormData = new URLSearchParams();
        bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
        bodyFormData.append("email", email);

        bodyFormData.append("name", name);
        bodyFormData.append(
          "image",
          localStorage.getItem("DM_rockoly_image")?.split("/")?.pop()
        );
        axios({
          method: "post",
          url: myurl,
          data: bodyFormData,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then((response) => {
            if (response?.data?.success == true) {
              localStorage.setItem("DM_rockoly_name", name);
              setDisable(false);
              setIsPicUpload(false);
              setPictureName({});
              toast.success("Profile Updated Successfully");
              setData({
                ...data,
                name: name,
                image: response.data.data.image.includes(
                  "assets/images/profile-img.png"
                )
                  ? "assets/images/profile-img.png"
                  : response.data.data.image,
              });
            } else {
              console.log("===Error===");
              setDisable(false);
              setPictureName({});
              setIsPicUpload(false);
            }
          })
          .catch((error) => {
            console.log("Errors");
            toast.error("Something went wrong");
            setPictureName({});
            setDisable(false);
            setIsPicUpload(false);
          });
      }
    }
    if (passValidate()) {
      const myurl = `${process.env.REACT_APP_base_url}api/change-password`;
      var bodyFormData = new URLSearchParams();
      bodyFormData.append("auth_code", process.env.REACT_APP_AUTH_CODE);
      bodyFormData.append("old_password", data.oldPassword);
      bodyFormData.append("new_password", data.newPassword);
      bodyFormData.append("confirm_password", data.confirmPassword);
      bodyFormData.append("email", data.email);

      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          if (response?.data?.success == true) {
            setDisable1(false);
            toast.success("Password Updated Successfully.");
            setErrors({});
            setData({
              ...data,
              oldPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
          } else {
            setDisable1(false);
            toast.error(response?.data?.message);

            setErrors({});
          }
        })
        .catch((error) => {
          setData({
            ...data,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          });

          setErrors({});
          setDisable1(false);
          toast.error("Something went wrong");
        });
    } else {
      setDisable1(false);
    }
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
                  <span>Profile </span>
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
              <div className="rk-profile-content">
                <div className="rk-profile-banner">
                  <img
                    src="assets/images/profile-banner-img.png"
                    alt="profile-banner-img"
                    className="img-fluid"
                  />
                </div>
                <div className="rk-profile-details">
                  <div className="rk-profile-details_inner">
                    <div className="rk-profile-img">
                      <img
                        src={data.image}
                        alt="profile-img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="rk-profile-name">
                      <h3 className="rk-profile-user-name">{data.name}</h3>
                      <p className="rk-profile-user-designation">
                        {/* Sr. Visual Designer */}
                        {data.occupation}
                      </p>
                    </div>
                  </div>
                  <div className="rk-profile-details_inner">
                    <button
                      type="button"
                      className="btn btn-success btn-custom"
                      data-bs-toggle="modal"
                      data-bs-target="#editProfileModal"
                    >
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 16.5107H4.66667L13.8958 7.28155L12.9792 6.36488L3.75 15.594V16.5107ZM16.5417 6.38571L13.875 3.71905L14.75 2.84405C14.9861 2.60794 15.2813 2.49335 15.6354 2.5003C15.9896 2.50724 16.2847 2.62877 16.5208 2.86488L17.4167 3.76071C17.6528 3.99683 17.7708 4.28849 17.7708 4.63571C17.7708 4.98294 17.6528 5.2746 17.4167 5.51071L16.5417 6.38571ZM3.125 17.7607C2.94444 17.7607 2.79514 17.7017 2.67708 17.5836C2.55903 17.4656 2.5 17.3163 2.5 17.1357V15.344C2.5 15.2607 2.51389 15.1843 2.54167 15.1149C2.56944 15.0454 2.61806 14.976 2.6875 14.9065L13 4.59405L15.6667 7.26071L5.35417 17.5732C5.28472 17.6427 5.21528 17.6913 5.14583 17.719C5.07639 17.7468 5 17.7607 4.91667 17.7607H3.125ZM13.4375 6.82321L12.9792 6.36488L13.8958 7.28155L13.4375 6.82321Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
                <div className="rk-profile-info">
                  <div className="rk-profile-info-list">
                    <div className="rk-profile-info-item">
                      <span className="rk-profile-info-icon">
                        <img
                          src="assets/images/info-point-icon.png"
                          alt="info-point-icon"
                          className="img-fluid"
                        />
                      </span>
                      <div className="rk-profile-info__inner">
                        <h3 className="rk-profile-info-label">Your Email</h3>
                        <p className="rk-profile-info-description">
                          {/* Cameron Williamson85@gamil.com */}
                          {data.email}
                        </p>
                      </div>
                    </div>
                    <div className="rk-profile-info-item">
                      <span className="rk-profile-info-icon">
                        <img
                          src="assets/images/info-point-icon.png"
                          alt="info-point-icon"
                          className="img-fluid"
                        />
                      </span>
                      <div className="rk-profile-info__inner">
                        <h3 className="rk-profile-info-label">ID Number</h3>
                        <p className="rk-profile-info-description rk-profile-info-id">
                          {/* 548238546235 */}
                          {data.id}
                        </p>
                      </div>
                    </div>
                    <div className="rk-profile-info-item">
                      <span className="rk-profile-info-icon">
                        <img
                          src="assets/images/info-point-icon.png"
                          alt="info-point-icon"
                          className="img-fluid"
                        />
                      </span>
                      <div className="rk-profile-info__inner">
                        <h3
                          className="rk-profile-info-label rk-profile-info-change-pass-link"
                          data-bs-toggle="modal"
                          data-bs-target="#editProfileModal"
                        >
                          <span>Change Password</span>
                          <span className="rk-profile-info-change-pass-icon">
                            <img
                              src="assets/images/change-pass-link-arrow.png"
                              alt="change-pass-link-arrow"
                              className="img-fluid"
                            />
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Landing Section End --> */}

          {/* <!-- Modal --> */}

          <div
            className="modal fade rk-edit-profile-modal"
            id="editProfileModal"
            tabindex="-1"
            aria-labelledby="editProfileModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="rk-edit-profile-content">
                    <div className="rk-edit-profile-head">
                      <div className="rk-edit-profile-img">
                        <img
                          src={
                            isPicUpload
                              ? `${process.env.REACT_APP_base_url}uploads/${pictureName}`
                              : data.image
                          }
                          alt="profile-img"
                          className="img-fluid"
                        />
                        <div className="rk-edit-profile-choose">
                          <input
                            type="file"
                            className="rk-edit-profile-choose-file"
                            onChange={(e) => handleImg(e)}
                            // accept="image/png, image/gif, image/jpeg"
                          />
                          <span className="rk-edit-profile-choose-icon">
                            <img
                              src="assets/images/edit-icon.png"
                              alt="edit-icon"
                              className="img-fluid"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="rk-modal-form-content">
                        <div className="rk-modal-form-input">
                          <label className="form-label">Name</label>
                          <div className="rk-form-input">
                            <input
                              type="text"
                              className="form-control"
                              value={data.name}
                              placeholder="Enter Name"
                              onChange={(e) => {
                                setData({ ...data, name: e.target.value });
                                let temp = nameErrors;
                                delete temp.name_err;
                                setNameErrors(temp);
                              }}
                            />
                          </div>
                          <div className="text-danger">
                            {nameErrors.name_err}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rk-modal-form-content">
                      <h3 className="rk-update-password-title">
                        Update Password
                      </h3>
                      <div className="rk-modal-form-input">
                        <label className="form-label">Old Password</label>
                        <div className="rk-form-input">
                          <input
                            type={
                              !showPassword.old_password ? "password" : "text"
                            }
                            className="form-control"
                            placeholder="Old Password"
                            value={data.oldPassword}
                            onChange={(e) => {
                              setData({ ...data, oldPassword: e.target.value });
                              let temp = errors;
                              delete temp.old_password;
                              delete temp.password_error;
                              delete temp.validation_err;
                              setErrors(temp);
                            }}
                          />
                          <span className="rk-form-input-icon">
                            <img
                              src={
                                !showPassword.old_password
                                  ? `assets/images/eye-icon.png`
                                  : `assets/images/eye-off-icon.png`
                              }
                              alt={
                                !showPassword.old_password
                                  ? "eye-icon"
                                  : "eye-off-icon"
                              }
                              className="img-fluid hand_arrow"
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  old_password: !showPassword.old_password,
                                })
                              }
                            />
                          </span>
                        </div>
                        <div className="text-danger">{errors.old_password}</div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label className="form-label">
                          Create New Password
                        </label>
                        <div className="rk-form-input">
                          <input
                            type={
                              !showPassword.new_password ? "password" : "text"
                            }
                            className="form-control"
                            placeholder="Create New Password"
                            value={data.newPassword}
                            onChange={(e) => {
                              setData({ ...data, newPassword: e.target.value });
                              let temp = errors;
                              delete temp.new_password;
                              delete temp.password_error;
                              delete temp.validation_err;
                              setErrors(temp);
                            }}
                          />
                          <span className="rk-form-input-icon">
                            <img
                              src={
                                !showPassword.new_password
                                  ? `assets/images/eye-icon.png`
                                  : `assets/images/eye-off-icon.png`
                              }
                              alt={
                                !showPassword.new_password
                                  ? "eye-icon"
                                  : "eye-off-icon"
                              }
                              className="img-fluid hand_arrow"
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  new_password: !showPassword.new_password,
                                })
                              }
                            />
                          </span>
                        </div>
                        <div className="text-danger">{errors.new_password}</div>
                      </div>
                      <div className="rk-modal-form-input">
                        <label className="form-label">
                          Confirm New Password
                        </label>
                        <div className="rk-form-input">
                          <input
                            type={
                              !showPassword.confirm_password
                                ? "password"
                                : "text"
                            }
                            className="form-control"
                            placeholder="Confirm New Password"
                            value={data.confirmPassword}
                            onChange={(e) => {
                              setData({
                                ...data,
                                confirmPassword: e.target.value,
                              });
                              let temp = errors;
                              delete temp.confirm_password;
                              delete temp.password_error;
                              delete temp.validation_err;
                              setErrors(temp);
                            }}
                          />
                          <span className="rk-form-input-icon">
                            <img
                              src={
                                !showPassword.confirm_password
                                  ? `assets/images/eye-icon.png`
                                  : `assets/images/eye-off-icon.png`
                              }
                              alt={
                                !showPassword.confirm_password
                                  ? "eye-icon"
                                  : "eye-off-icon"
                              }
                              className="img-fluid hand_arrow"
                              onClick={() =>
                                setShowPassword({
                                  ...showPassword,
                                  confirm_password:
                                    !showPassword.confirm_password,
                                })
                              }
                            />
                          </span>
                        </div>
                        <div className="text-danger">
                          {errors.confirm_password}
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
                              {i == 0 ? e : `${viewData[i] ? "✅" : "❌"}` + e}
                              <br />
                            </div>
                          ))}
                          {errors.password_error}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rk-modal-footer-btn">
                    <button
                      type="button"
                      data-bs-dismiss={data.name != "" && calc ? "modal" : ""}
                      className="btn btn-success btn-custom"
                      disabled={disable}
                      onClick={(e) => submitHandler(e)}
                    >
                      {disable ? "Processing..." : "Update"}
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-outline-success"
                      onClick={() => {
                        localStorage.removeItem("DM_rockoly");
                        navigate("/login");
                        toast.success("Logout Successfully...!");
                      }}
                      disabled={disable1 && disable}
                    >
                      Sign Out
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
