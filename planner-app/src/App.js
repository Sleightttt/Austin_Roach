import React, { useState } from "react";
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

  const getThemeName = (theme) => {
    if (theme === snow) return "snow";
    if (theme === summer) return "summer";
    if (theme === spring) return "spring";
    if (theme === fall) return "fall";
    // Default case
    return "unknown";
  };

  const themeFixer = () => {
    if (activeTheme === snow) {
      return { transform: "scaleY(-1)" };
    } else if (activeTheme === summer) {
      return { transform: "scaleX(-1)" };
    } else if (activeTheme === spring) {
      return { transform: "scaleX(1)" };
    } else if (activeTheme === fall) {
      return { transform: "scaleX(-1)" };
    }
  };

  return (
    <div className="App">
      <div className="video-background2">
        <img
          draggable="false"
          style={themeFixer()}
          className="no"
          src={activeTheme}
        />
      </div>
      <div
        onClick={() => setDropdown(!dropdown)}
        className={`theme ${dropdown ? "open" : ""}`}
      >
        {dropdown ? (
          <>
            <div
              onClick={() => {
                setActiveTheme(snow);
                setDropdown(false);
              }}
            >
              Winter
            </div>
            <div
              onClick={() => {
                setActiveTheme(summer);
                setDropdown(false);
              }}
            >
              Summer
            </div>
            <div
              onClick={() => {
                setActiveTheme(fall);
                setDropdown(false);
              }}
            >
              Fall
            </div>
            <div
              onClick={() => {
                setActiveTheme(spring);
                setDropdown(false);
              }}
            >
              Spring
            </div>
          </>
        ) : (
          <img className="theme-icon" src={icons.menu} />
        )}
      </div>
      <NavBar activeTheme={getThemeName(activeTheme)} />
      <ViewBox activeTheme={getThemeName(activeTheme)}>
        <Routes>
          <Route
            path="/"
            element={<About activeTheme={getThemeName(activeTheme)} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ViewBox>
    </div>
  );
}

export default App;
