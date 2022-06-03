import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';

import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import gsap from "gsap";
import { lightTheme } from "../constants/styles";

export const IdleTimer = () => {

  const router = useRouter();
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

  const onMouseMove = () => {
    restartAutoReset();
  };

  useEffect(() => {
    restartAutoReset();
    window.addEventListener('mousemove', _onMouseMove);

    // cleanup function
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [router.pathname]);

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