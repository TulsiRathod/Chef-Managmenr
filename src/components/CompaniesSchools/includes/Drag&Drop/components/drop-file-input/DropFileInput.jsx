import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState("");

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    // const newFile = e.target.files[0];
    // if (newFile) {
    //   const updatedList = [...fileList, newFile];
    //   setFileList(updatedList);
    //   props.onFileChange(updatedList);
    // }
    setFileList(e.target.files[0]);
    props.onFileChange(e.target.files[0]);
  };

  const fileRemove = (file) => {
    // const updatedList = [...fileList];
    // updatedList.splice(fileList.indexOf(file), 1);
    // setFileList(updatedList);
    // props.onFileChange(updatedList);
    setFileList("");
    props.onFileChange("");
  };

  return (
    <>
      {fileList == "" ? (
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img
              src={uploadImg}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
            <p>
              Drag and drop Or <br />
              <span style={{ color: "#0a9782" }}>Select a file</span>
            </p>
          </div>
          <input
            type="file"
            value=""
            onChange={onFileDrop}
            className="form-control"
          />
        </div>
      ) : null}
      {fileList != "" ? (
        <div className="drop-file-preview">
          {
            <div class="d-flex flex-row ">
              <div
                className="drop-file-preview__item "
                style={{
                  width: "128px",
                  height: "128px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={URL.createObjectURL(fileList)}
                  alt=""
                  style={{
                    width: "128px",
                    height: "128px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  onClick={() => fileRemove()}
                  style={{
                    padding: "4px",
                    borderRadius: "100px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
                    width: "18px",
                    height: "18px",
                    backgroundColor: " #E7E7E7",
                    position: "absolute",
                    top: "-9px",
                    right: "-9px",
                    textAlign: "center",
                    fontSize: "12px",
                    paddingTop: "0px",
                    cursor: "pointer",
                  }}
                >
                  x
                </div>
              </div>
              <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                style={{
                  width: "128px",
                  height: "128px",
                  padding: "15px",
                  fontSize: "10px",
                }}
              >
                <div className="drop-file-input__label">
                  <img
                    src={uploadImg}
                    alt=""
                    style={{ width: "48px", height: "48px" }}
                  />
                  <p>
                    Drag and drop Or <br />
                    <span style={{ color: "#0a9782" }}>Select a file</span>
                  </p>
                </div>
                <input
                  type="file"
                  value=""
                  onChange={onFileDrop}
                  className="form-control"
                />
              </div>
            </div>
          }
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
