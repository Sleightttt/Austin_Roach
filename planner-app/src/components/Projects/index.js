import React, { useState, useEffect } from "react";
import "./Projects.css";
import icons from "../../assets/icons/index.js";
import { PROJECTS } from "./projectsData";

const NAV_ENTRIES = [
  { key: "image", label: [{ text: "Image", color: "#06cbfc" }, { text: "space", color: "#bb00ff" }] },
  { key: "ootify", label: [{ text: "OOTify", color: "#005eb5", className: "oot" }] },
  { key: "proof", label: [{ text: "proofofshred", color: "#e867ff", className: "proof" }] },
  { key: "job", label: [{ text: "Jobseeker", color: "#00d0ff" }] },
];

const ALL_IMAGES = Object.values(PROJECTS).flatMap((entry) => entry.images);

const Projects = () => {
  const [activeEntry, setActiveEntry] = useState("image");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEntryClick = (entry) => {
    setActiveEntry(entry);
    setCurrentImageIndex(0);
  };

  const entry = PROJECTS[activeEntry];

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? entry.images.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === entry.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="projects-cont page-panel">
      <div className="project-nav">
        {NAV_ENTRIES.map(({ key, label }) => (
          <div
            key={key}
            className={`entry-box entry-box-${key} ${
              activeEntry === key ? "active-entry bounce" : ""
            }`}
            onClick={() => handleEntryClick(key)}
          >
            <div className="nav-text">
              {label.map(({ text, color, className }) => (
                <span key={text} className={className} style={{ color }}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="about-box fade-in">
        <div className="image-cont">
          <img
            alt="Previous"
            className="project-arrow"
            src={icons.leftArrow}
            onClick={handleLeftArrowClick}
          />

          <img
            alt={`${activeEntry} screenshot ${currentImageIndex + 1}`}
            className="project-image"
            src={entry.images[currentImageIndex]}
          />
          <img
            alt="Next"
            className="project-arrow"
            src={icons.rightArrow}
            onClick={handleRightArrowClick}
          />
        </div>
        <div className="tracker">
          {entry.images.map((image, index) => (
            <div key={image} className="tracker-diamond-box">
              <svg
                className={`tracker-diamond ${
                  index === currentImageIndex ? "fade-in" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {index === currentImageIndex ? (
                  <polygon points="256,0 72.115,256 256,512 439.885,256" />
                ) : (
                  <path
                    d="M456.225,244.286L270.989,7.314C267.382,2.7,261.857,0,255.999,0c-5.856,0-11.381,2.7-14.989,7.314
			L55.775,244.286c-5.378,6.884-5.378,16.544,0,23.428l185.236,236.972c3.608,4.616,9.132,7.314,14.989,7.314
			c5.858,0,11.383-2.698,14.99-7.314l185.236-236.972C461.603,260.83,461.603,251.17,456.225,244.286z M255.999,477.522L82.84,256
			L255.999,34.478L429.17,256L255.999,477.522z"
                  />
                )}
              </svg>
            </div>
          ))}
        </div>
        <div className="git-live">
          <div className="git-live-entry">
            <a
              title="Github Link"
              href={entry.githubLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Github Link
              <img alt="" className="git-live-logo" src={icons.logo} />
            </a>
          </div>
          {entry.liveLink && (
            <div className="git-live-entry">
              <a
                rel="noreferrer"
                href={entry.liveLink}
                target="_blank"
                className="link"
              >
                Live Link
                <img alt="" className="git-live-logo" src={icons.live} />
              </a>
            </div>
          )}
        </div>
        <div className="about-body2">{entry.about}</div>
        <div className="tech-cont">
          {entry.techIcons.map((icon) => (
            <img key={icon} className="tech-icon" src={icon} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
