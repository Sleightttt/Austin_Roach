import "./Contact.css";
import React, { useEffect } from "react";
import icons from "../../assets/icons";

const Contact = () => {
  useEffect(() => {
    const bodyEntries = document.querySelectorAll(".body-entry");
    bodyEntries.forEach((entry, index) => {
      entry.style.transitionDelay = `${index * 0.2}s`;
      entry.classList.add("slide-in");
    });
  }, []);

  return (
    <div className="contact-cont">
      <div className="reach-me">
        <div className="reach-me-text">
          Feel free to reach me in any of the following ways:
        </div>
      </div>
      <div className="reach-me-body ">
        <div className="body-entry top">
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.mobile} alt="phone" />
          </div>
          <div className="entry-text"> (909) 210-6114</div>
        </div>
        <div className="body-entry">
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.mail} alt="phone" />
          </div>
          <div className="entry-text">brennancota@yahoo.com</div>
        </div>
        <div className="body-entry">
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.linkedin} alt="phone" />
          </div>
          <div className="entry-text">
            <a
              className="anchor-link"
              href="https://www.linkedin.com/in/brennan-cota-11768aa6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Link
            </a>
          </div>
        </div>
        <div className="body-entry">
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.resume} alt="phone" />
          </div>
          <div className="entry-text">
            <a
              className="anchor-link"
              href={require("../../assets/Resume.pdf")}
              download="Resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="body-entry bottom">
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.logo} alt="phone" />
          </div>
          <div className="entry-text">
            {" "}
            <a
              className="anchor-link"
              href="https://github.com/Sleightttt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
