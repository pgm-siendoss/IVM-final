import React, { useEffect, useRef, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import gsap from "gsap";

import Nav from "../components/Nav";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../constants/styles";

const whitelist = [
  '/'
];

export const IdleTimer = () => {
  const location = useLocation();
  let timeout = null;

  const goBackToHome = () => {
     // reset the application here
  };

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      goBackToHome();
    }, 1000 * 30);
  };

  useEffect(() => {
    //whitelist the home page
    let preventReset = false;
    for (const path of whitelist) {
      if (path === location.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) {
      return;
    }

    // start the timeout and mouse checks
    restartAutoReset();
    window.addEventListener('mousemove', restartAutoReset);

    // cleanup function
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener('mousemove', restartAutoReset);
      }
    };
  }, [location.pathname]);

  return (
    <>
      <div></div>
    </>
  );
};

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