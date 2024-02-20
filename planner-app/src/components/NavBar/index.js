import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons";

const NavBar = () => {
  return (
    <div className="nav-box">
      <div className="nav-cont">
        <Link to="/about" className="icon-cont">
          <img className="nav-icon" src={icons.information} alt="Projects" />
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
