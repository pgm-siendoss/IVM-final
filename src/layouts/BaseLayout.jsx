import React, { useEffect, useRef, useState } from "react";

import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import gsap from "gsap";
import { lightTheme } from "../constants/styles";

const BaseLayout = () => {
  const [time, setTime] = useState(0);
  const timer = useRef();
  const timeElement = useRef();
  const [theme] = useState(lightTheme);

  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

  }, []);
  useEffect(() => {
    gsap.from(timeElement.current, {opacity: 0, delay: 1})
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <span ref={timeElement}>
        {time}
      </span>
      <span ref={timeElement}>
        {time}
      </span>
      <span ref={timeElement}>
        {time}
      </span>
      <Nav />
      <Outlet />
    </ThemeProvider>
  );
};

export default BaseLayout;