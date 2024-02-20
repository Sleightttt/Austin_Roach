import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons";

const NavBar = () => {
  return (
    <div className="nav-box">
      <div className="logo-cont">
        {/* Use Link component for logo-cont */}
        <Link to="/" className="logo-link">
          <div className="logo-text">Brennan</div>
          <div className="logo-text">Cota</div>
          <div>&nbsp;</div>
          <div className="logo-text">Software</div>
          <div className="logo-text">Engineer</div>
        </Link>
      </div>
      <div className="nav-cont">
        <Link to="/about" className="icon-cont">
          <img className="nav-icon" src={icons.blueprint} alt="Projects" />
          <div className="logo-text">About Me</div>
        </Link>
        <Link to="/projects" className="icon-cont">
          <img className="nav-icon" src={icons.blueprint} alt="Projects" />
          <div className="logo-text">Projects</div>
        </Link>
        <Link to="/contract" className="icon-cont">
          <img className="nav-icon" src={icons.contract} alt="Contract Work" />
          <div className="logo-text">Contract Work</div>
        </Link>
        <Link to="/contact" className="icon-cont">
          <img className="nav-icon" src={icons.contact} alt="Contact" />
          <div className="logo-text">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
