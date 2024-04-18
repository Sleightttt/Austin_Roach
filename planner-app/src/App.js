import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ViewBox from "./components/ViewBox";
import About from "./components/About";
import Projects from "./components/Projects";
import Contract from "./components/Contract";
import Contact from "./components/Contact";
import "./app.css";
import snow from "./assets/images/unsplash.jpg";
import summer from "./assets/images/summer.jpg";
import spring from "./assets/images/spring.jpg";
import fall from "./assets/images/fall.jpg";
import icons from "./assets/icons/index.js";

function App() {
  const [activeTheme, setActiveTheme] = useState(snow);
  const [dropdown, setDropdown] = useState(false);
  const [nextTheme, setNextTheme] = useState(null);
  const dropdownRef = useRef(null);
  const [transitioningOut, setTransitioningOut] = useState(false);
  const [transitioningIn, setTransitioningIn] = useState(false);

  const getThemeName = (theme) => {
    if (theme === snow) return "snow";
    if (theme === summer) return "summer";
    if (theme === spring) return "spring";
    if (theme === fall) return "fall";

    return "unknown";
  };

  const themeFixer2 = () => {
    let textStyle = {},
      borderStyle = {};
    let decoColor = {};

    if (activeTheme === snow) {
      textStyle.color = "#009bef";
      borderStyle = { border: "2px solid #009bef" };
      decoColor = { textDecorationColor: "#19a2eb" };
    } else if (activeTheme === summer) {
      textStyle.color = "#F4653E";
      borderStyle = { border: "2px solid #F4653E" };
      decoColor = { textDecorationColor: "#F4653E" };
    } else if (activeTheme === fall) {
      textStyle.color = "#CA0000";
      borderStyle = { border: "2px solid #CA0000" };
      decoColor = { textDecorationColor: "#CA0000" };
    } else if (activeTheme === spring) {
      textStyle.color = "#E5B700";
      borderStyle = { border: "2px solid #E5B700" };
      decoColor = { textDecorationColor: "#E5B700" };
    }

    return { textStyle, borderStyle, decoColor };
  };

  const { textStyle, borderStyle, decoColor } = themeFixer2();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // useEffect(() => {
  //   const preloadImages = [snow, summer, spring, fall];
  //   preloadImages.forEach((image) => {
  //     const img = new Image();
  //     img.src = image;
  //   });
  // }, []);

  useEffect(() => {
    if (nextTheme !== null) {
      setTransitioningOut(true); // Start fade-out transition
      setActiveTheme(nextTheme);

      const timeout = setTimeout(() => {
        // Switch to the next theme
        setTransitioningOut(false); // End fade-out transition
        setTransitioningIn(true); // Start fade-in transition

        const timeout2 = setTimeout(() => {
          setTransitioningIn(false);
          // End fade-in transition
        }, 1000); // Adjust as needed to match transition duration
        return () => clearTimeout(timeout2);
      }, 1000); // Adjust as needed to match transition duration
      return () => clearTimeout(timeout);
    }
  }, [nextTheme]);

  const handleThemeChange = (theme) => {
    setNextTheme(theme);
  };

  return (
    <div className="App">
      <div className="video-background2">
        <img src={snow} style={{ opacity: 0 }} alt="" />
        <img src={summer} style={{ opacity: 0 }} alt="" />
        <img src={spring} style={{ opacity: 0 }} alt="" />
        <img src={fall} style={{ opacity: 0 }} alt="" />
        <img
          draggable="false"
          className={`background-image ${transitioningOut ? "fade-in" : ""}`}
          src={activeTheme}
          alt="theme background"
        />
        {nextTheme && (
          <img
            draggable="false"
            className={`background-image next ${
              transitioningIn ? "fade-out" : ""
            }`}
            src={nextTheme}
            alt="Next Background"
          />
        )}
      </div>
      <div
        onClick={() => setDropdown(!dropdown)}
        className={`theme ${dropdown ? "open" : ""}`}
        style={borderStyle}
        ref={dropdownRef}
      >
        {dropdown ? (
          <>
            <div
              onClick={() => {
                setActiveTheme(snow);
                setDropdown(false);
                handleThemeChange(snow);
              }}
              style={{
                ...decoColor,
                color: activeTheme === snow ? textStyle.color : undefined,
              }}
            >
              Winter
            </div>
            <div
              onClick={() => {
                setActiveTheme(spring);
                setDropdown(false);
                handleThemeChange(spring);
              }}
              style={{
                ...decoColor,
                color: activeTheme === spring ? textStyle.color : undefined,
              }}
            >
              Spring
            </div>
            <div
              onClick={() => {
                setActiveTheme(summer);
                setDropdown(false);
                handleThemeChange(summer);
              }}
              style={{
                ...decoColor,
                color: activeTheme === summer ? textStyle.color : undefined,
              }}
            >
              Summer
            </div>
            <div
              onClick={() => {
                setActiveTheme(fall);
                setDropdown(false);
                handleThemeChange(fall);
              }}
              style={{
                ...decoColor,
                color: activeTheme === fall ? textStyle.color : undefined,
              }}
            >
              Fall
            </div>
          </>
        ) : (
          <>
            <img alt="theme icon" className="theme-icon" src={icons.menu} />

            {/* <img alt="arrow" className="arrow" src={icons.rightArrow} /> */}
          </>
        )}
      </div>
      <NavBar activeTheme={getThemeName(activeTheme)} />
      <ViewBox activeTheme={getThemeName(activeTheme)}>
        <Routes>
          <Route
            path="/"
            element={<About activeTheme={getThemeName(activeTheme)} />}
          />
          <Route
            path="/projects"
            element={<Projects activeTheme={getThemeName(activeTheme)} />}
          />
          <Route
            path="/contract"
            element={<Contract activeTheme={getThemeName(activeTheme)} />}
          />
          <Route
            path="/contact"
            element={<Contact activeTheme={getThemeName(activeTheme)} />}
          />
        </Routes>
      </ViewBox>
    </div>
  );
}

export default App;
