import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons";

const NavBar = ({ activeTheme }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const themeFixer = () => {
    let textStyle = {},
      borderBottomStyle = {};

    if (activeTheme === "snow") {
      textStyle.color = "#009bef";
      borderBottomStyle = { borderBottom: "2px solid #009bef" };
    } else if (activeTheme === "summer") {
      textStyle.color = "#F4653E";
      borderBottomStyle = { borderBottom: "2px solid #F4653E" };
    } else if (activeTheme === "fall") {
      textStyle.color = "#CA0000";
      borderBottomStyle = { borderBottom: "2px solid #CA0000" };
    } else if (activeTheme === "spring") {
      textStyle.color = "#E5B700";
      borderBottomStyle = { borderBottom: "2px solid #E5B700" };
    }

    return { textStyle, borderBottomStyle };
  };

  const { textStyle, borderBottomStyle } = themeFixer();

  return (
    <div className="nav-box">
      <div className="nav-cont">
        <Link title="About" to="/" className="icon-cont">
          <img className="nav-icon" src={icons.information} alt="Projects" />
          <div
            style={{
              ...textStyle,
              ...(isActive("/") ? borderBottomStyle : {}),
              transition: "0.2s",
            }}
            className={`logo-text ${isActive("/")}`}
          >
            About
          </div>
        </Link>
        <Link title="Projects" to="/projects" className="icon-cont">
          <img className="nav-icon" src={icons.blueprint} alt="Projects" />
          <div
            style={{
              ...textStyle,
              ...(isActive("/projects") ? borderBottomStyle : {}),
              transition: "0.2s",
            }}
            className={`logo-text ${isActive("/projects")}`}
          >
            Projects
          </div>
        </Link>
        <Link title="Career" to="/career" className="icon-cont">
          <img className="nav-icon" src={icons.contract} alt="Contract Work" />
          <div
            style={{
              ...textStyle,
              ...(isActive("/career") ? borderBottomStyle : {}),
              transition: "0.2s",
            }}
            className={`logo-text ${isActive("/contract")}`}
          >
            Career
          </div>
        </Link>
        <Link title="Contact" to="/contact" className="icon-cont">
          <img className="nav-icon" src={icons.contact} alt="Contact" />
          <div
            style={{
              ...textStyle,
              ...(isActive("/contact") ? borderBottomStyle : {}),
              transition: "0.2s",
            }}
            className={`logo-text ${isActive("/contact")}`}
          >
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
