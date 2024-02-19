import React from "react";
import "./NavBar.css";
import icons from "../../assets/icons";

const NavBar = () => {
  return (
    <>
      <div className="nav-box">
        <div className="nav-cont">
          <div className="icon-cont">
            <img className="nav-icon" src={icons.information} />
            <div>About Me</div>
          </div>
          <div className="icon-cont">
            <img className="nav-icon" src={icons.blueprint} />
            <div>Projects</div>
          </div>
          <div className="icon-cont">
            <img className="nav-icon" src={icons.contract} />
            <div>Contract Work</div>
          </div>
          <div className="icon-cont">
            <img className="nav-icon" src={icons.contact} />
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
