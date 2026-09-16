import "./Contact.css";
import React, { useEffect } from "react";
import icons from "../../assets/icons";

const CONTACT_METHODS = [
  { key: "phone", icon: icons.mobile, content: "(909) 210-6114" },
  { key: "email", icon: icons.mail, content: "brennancota@yahoo.com" },
  {
    key: "linkedin",
    icon: icons.linkedin,
    href: "https://www.linkedin.com/in/brennan-cota-11768aa6/",
    content: "LinkedIn Link",
  },
  {
    key: "resume",
    icon: icons.resume,
    href: require("../../assets/Resume.pdf"),
    download: "Resume.pdf",
    content: "Resume Download",
  },
  {
    key: "github",
    icon: icons.logo,
    href: "https://github.com/Sleightttt",
    content: "Github Link",
  },
];

const Contact = () => {
  useEffect(() => {
    const bodyEntries = document.querySelectorAll(".body-entry");

    bodyEntries.forEach((entry, index) => {
      entry.style.transitionDelay = `${index * 0.2}s`;
      entry.classList.add("slide-in");
    });

    const timeout = setTimeout(() => {
      bodyEntries.forEach((entry) => {
        entry.style.transitionDelay = "0s";
      });
    }, bodyEntries.length * 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="contact-cont page-panel">
      <div className="reach-me">
        <div className="reach-me-text">
          You can reach me in any of the following ways:
        </div>
      </div>
      <div className="reach-me-body">
        {CONTACT_METHODS.map(({ key, icon, href, download, content }, index) => (
          <div
            key={key}
            className={`body-entry ${index === 0 ? "top" : ""} ${
              index === CONTACT_METHODS.length - 1 ? "bottom" : ""
            }`}
          >
            <div className="reach-icon-box">
              <img className="reach-icon" src={icon} alt="" />
            </div>
            <div className="entry-text">
              {href ? (
                <a
                  className="anchor-link"
                  href={href}
                  download={download}
                  target={download ? undefined : "_blank"}
                  rel={download ? undefined : "noopener noreferrer"}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
