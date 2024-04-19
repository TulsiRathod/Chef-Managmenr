import React, { useEffect, useState } from "react";
import EventRequests from "./EventsRequest";
import EventsRequestList from "./EventsRequestList";
import axios from "axios";
export default function EventShow() {
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    getEventList();
  }, []);
  const getEventList = () => {
    const myurl = `${process.env.REACT_APP_base_url}api/requested-events`;
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
        if (response?.data?.success) {
          setList(response?.data?.data);
        }
        setVisible(true);
      })
      .catch((error) => {
        console.log(error.response);
        setVisible(true);
      });
  };
  return (
    <>
      {visible ? (
        list.length > 0 ? (
          <EventsRequestList list={list} />
        ) : (
          <EventRequests />
        )
      ) : null}
    </>
  );
}
