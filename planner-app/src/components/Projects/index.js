import React, { useState } from "react";
import "./Projects.css";
import imagespace from "../../assets/images/ImageSpace-demo-pic.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import test from "../../assets/images/67269.jpg";
import icons from "../../assets/icons/index.js";
import job1 from "../../assets/images/jobseeker1.jpeg";
import job2 from "../../assets/images/jobseeker2.jpeg";
import job3 from "../../assets/images/jobseeker3.jpeg";
import pos1 from "../../assets/images/pos1.jpg";
import pos2 from "../../assets/images/pos2.jpg";
import pos3 from "../../assets/images/pos3.jpg";
import pos4 from "../../assets/images/pos4.jpg";
import pos5 from "../../assets/images/pos5.jpg";

const Projects = () => {
  const [activeEntry, setActiveEntry] = useState("image");
  const handleEntryClick = (entry) => {
    setActiveEntry(entry);
    setCurrentImageIndex(0);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const entryContent = {
    image: {
      about:
        "A Flickr clone with 5 CRUD features built using a React frontend with a Flask backend. Imagespace features an auto-tagging feature by implementing the AI image recognition API Imagga. Users can sign up for accounts, follow and unfollow other users, both like and comment on photos, and upload their own! Imagespace also features a search bar that allows users to search for other users, images, and tags. Users can also edit their own profiles and delete their own images and comments. This website was built with a 'mobile first' approach, and is fully responsive for mobile, tablet, and desktop.",
      githubLink: "https://github.com/Sleightttt/AA-Captstone-Project",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      ],
      images: [imagespace, img1, img2, img3, img4, img5, img6],
      liveLink: "https://imagespace.onrender.com/",
    },
    proof: {
      about:
        "Proofofshred is a skateboarding application that is currently in development. It will feature a map that displays skate spots, a user profile, and a social media aspect. Users will be able to upload their own skate spots, and follow other users. Users will also be able to like and comment on skate spots. This application is being built with a 'mobile first' approach, and will be fully responsive for mobile, tablet, and desktop. Using React Native paired with Expo, the app will be available on both the App Store and Google Play.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      ],
      images: [pos1, pos2, pos3, pos4, pos5],
      githubLink: "https://github.com/DangerWill/proofofshred",
      liveLink: "http://dev.proofofshred.com:50080/",
    },
    job: {
      about:
        "I developed a sophisticated job-seeking app using React Native, featuring a seamless UI for an optimized job search. Utilizing the Axios library and Jsearch API from RapidApi, the app integrates real-time and accurate job data. Prioritizing clean code architecture, I implemented best practices for scalability and performance, employing modularization, code reusability, and responsive design. This project showcases my expertise in software engineering, API integration, and mobile app development, from crafting pixel-perfect UI components to managing asynchronous data fetching and state. It not only meets industry standards but sets a benchmark for user-centric job-seeking solutions, reflecting my commitment to delivering top-tier technical solutions and empowering jobseekers in their career aspirations.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
      ],
      images: [job1, job2, job3],
      githubLink: "https://github.com/Sleightttt/Geist",
    },
  };

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? entryContent[activeEntry].images.length - 1
        : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === entryContent[activeEntry].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className="projects-cont">
      <div className="project-nav">
        <div
          className={`entry-box entry-box-image ${
            activeEntry === "image" ? "active-entry" : ""
          }`}
          onClick={() => handleEntryClick("image")}
        >
          <div className="nav-text">
            <span style={{ color: "#06cbfc" }}>Image</span>
            <span style={{ color: "#bb00ff" }}>space</span>
          </div>
        </div>
        <div
          className={`entry-box entry-box-proof ${
            activeEntry === "proof" ? "active-entry" : ""
          }`}
          onClick={() => handleEntryClick("proof")}
        >
          <div className="nav-text">
            <span style={{ color: "#e867ff" }}>proofofshred</span>
          </div>
        </div>
        <div
          className={`entry-box entry-box-job ${
            activeEntry === "job" ? "active-entry" : ""
          }`}
          onClick={() => handleEntryClick("job")}
        >
          <div className="nav-text">
            <span style={{ color: "#90eafe" }}>Jobseeker</span>
          </div>
        </div>
      </div>
      <div className="about-box">
        <div className="image-cont">
          <img
            alt="left-arrow"
            className="project-arrow"
            src={icons.leftArrow}
            onClick={handleLeftArrowClick}
          />

          <img
            alt="imagespace"
            className="project-image"
            src={entryContent[activeEntry].images[currentImageIndex]}
          />
          <img
            alt="right-arrow"
            className="project-arrow"
            src={icons.rightArrow}
            onClick={handleRightArrowClick}
          />
        </div>
        <div className="tracker">
          {entryContent[activeEntry].images.map((image, index) => (
            <div key={index} className="tracker-diamond-box">
              <img
                className="tracker-diamond"
                src={
                  index === currentImageIndex ? icons.diamond2 : icons.diamond1
                }
              />
            </div>
          ))}
        </div>
        <div className="git-live">
          <div className="git-live-entry">
            <a
              href={entryContent[activeEntry].githubLink}
              target="_blank"
              className="link"
            >
              Github Link
              <img className="git-live-logo" src={icons.logo} />
            </a>
          </div>
          {entryContent[activeEntry].liveLink ? (
            <div className="git-live-entry">
              <a
                href={entryContent[activeEntry].liveLink}
                target="_blank"
                className="link"
              >
                <div className="link">Live Link</div>
                <img className="git-live-logo" src={icons.live} />
              </a>
            </div>
          ) : null}
        </div>
        <div className="about-body2">{entryContent[activeEntry].about}</div>
        <div className="tech-cont">
          {entryContent[activeEntry].techIcons.map((icon, index) => (
            <img
              key={index}
              className="tech-icon"
              src={icon}
              alt={`Tech Icon ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
