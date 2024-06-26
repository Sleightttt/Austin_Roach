import "./Contact.css";
import React, { useEffect } from "react";
import icons from "../../assets/icons";

const Contact = ({ activeTheme }) => {
  useEffect(() => {
    const bodyEntries = document.querySelectorAll(".body-entry");

    bodyEntries.forEach((entry, index) => {
      entry.style.transitionDelay = `${index * 0.2}s`;
      entry.classList.add("slide-in");
    });

    setTimeout(() => {
      bodyEntries.forEach((entry) => {
        entry.style.transitionDelay = "0s";
      });
    }, bodyEntries.length * 200);

    return () => {
      clearTimeout();
    };
  }, []);

  const themeFixer = () => {
    let bgStyle = {};
    if (activeTheme === "snow") {
      bgStyle = {
        background: "linear-gradient(125deg, #19a2eb, #13618c)",
      };
    } else if (activeTheme === "summer") {
      bgStyle = {
        background: "linear-gradient(125deg, #FFAADA, #F4653E)",
      };
    } else if (activeTheme === "spring") {
      bgStyle = { background: "linear-gradient(125deg, #E5B700, #F4653E)" };
    } else if (activeTheme === "fall") {
      bgStyle = { background: "linear-gradient(125deg,#FF8235, #CA0000 )" };
    }
    return { bgStyle };
  };

  const { bgStyle } = themeFixer();

  return (
    <div className="contact-cont">
      <div className="reach-me">
        <div className="reach-me-text">
          You can reach me in any of the following ways:
        </div>
      </div>
      <div className="reach-me-body ">
        <div className="body-entry top" style={{ ...bgStyle }}>
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.mobile} alt="phone" />
          </div>
          <div className="entry-text"> (909) 210-6114</div>
        </div>
        <div className="body-entry" style={{ ...bgStyle }}>
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.mail} alt="email" />
          </div>
          <div className="entry-text">brennancota@yahoo.com</div>
        </div>
        <div className="body-entry" style={{ ...bgStyle }}>
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.linkedin} alt="linkedin" />
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
        <div className="body-entry" style={{ ...bgStyle }}>
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.resume} alt="resume" />
          </div>
          <div className="entry-text">
            <a
              className="anchor-link"
              href={require("../../assets/Resume.pdf")}
              download="Resume.pdf"
            >
              Resume Download
            </a>
          </div>
        </div>
        <div className="body-entry bottom" style={{ ...bgStyle }}>
          <div className="reach-icon-box">
            <img className="reach-icon" src={icons.logo} alt="github" />
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
