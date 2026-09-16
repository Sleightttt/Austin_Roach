import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import icons from "../../assets/icons";

const NAV_ITEMS = [
  { path: "/", label: "About", icon: icons.information },
  { path: "/projects", label: "Projects", icon: icons.blueprint },
  { path: "/career", label: "Career", icon: icons.contract },
  { path: "/contact", label: "Contact", icon: icons.contact },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="nav-box">
      <div className="nav-cont">
        {NAV_ITEMS.map(({ path, label, icon }) => (
          <Link
            key={path}
            title={label}
            to={path}
            className={`icon-cont ${location.pathname === path ? "active" : ""}`}
          >
            <img className="nav-icon" src={icon} alt="" />
            <div className="logo-text">{label}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
