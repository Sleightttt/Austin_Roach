import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons";

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="nav-box">
      <div className="nav-cont">
        <Link to="/" className="icon-cont">
          <img className="nav-icon" src={icons.information} alt="Projects" />
          <div className={`logo-text ${isActive("/")}`}>About Me</div>
        </Link>
        <Link to="/projects" className="icon-cont">
          <img className="nav-icon" src={icons.blueprint} alt="Projects" />
          <div className={`logo-text ${isActive("/projects")}`}>Projects</div>
        </Link>
        <Link to="/contract" className="icon-cont">
          <img className="nav-icon" src={icons.contract} alt="Contract Work" />
          <div className={`logo-text ${isActive("/contract")}`}>
            Contract Work
          </div>
        </Link>
        <Link to="/contact" className="icon-cont">
          <img className="nav-icon" src={icons.contact} alt="Contact" />
          <div className={`logo-text ${isActive("/contact")}`}>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
