import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

export default function CustomScrollBar(props) {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

  useEffect(() => {
    scroller.current = document.querySelector(props);
    bodyScrollBar.current = Scrollbar.init(scroller.current);
    setScrollBarCreated(true);
  }, []);

  useEffect(() => {
    if (scrollBarCreated) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.scrollerProxy(scroller.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.current.scrollTop = value;
          }
          return bodyScrollBar.current.scrollTop;
        },
      });
      bodyScrollBar.current.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller.current });
    }
  }, [scrollBarCreated]);
}
export const ScrollBar = {
  borderRadius: "4px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  top: 0,
  left: 0,
  width: "8px",
  height: "2px",
};
