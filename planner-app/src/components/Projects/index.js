import React, { useState, useEffect } from "react";
import "./Projects.css";
import imagespace from "../../assets/images/ImageSpace-demo-pic.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import icons from "../../assets/icons/index.js";
import job1 from "../../assets/images/jobseeker1.jpeg";
import job2 from "../../assets/images/jobseeker2.jpeg";
import job3 from "../../assets/images/jobseeker3.jpeg";
import pos1 from "../../assets/images/pos1.jpg";
import pos2 from "../../assets/images/pos2.jpg";
import pos3 from "../../assets/images/pos3.jpg";
import pos4 from "../../assets/images/pos4.jpg";
import pos5 from "../../assets/images/pos5.jpg";
import oot1 from "../../assets/images/oot-1.png";
import oot2 from "../../assets/images/oot-2.png";
import oot3 from "../../assets/images/oot-3.png";
import oot4 from "../../assets/images/oot-4.png";
import oot5 from "../../assets/images/oot-5.png";
import oot6 from "../../assets/images/oot-6.png";

const Projects = ({ activeTheme }) => {
  const [activeEntry, setActiveEntry] = useState("image");
  const handleEntryClick = (entry) => {
    setActiveEntry(entry);
    setCurrentImageIndex(0);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //dummy data

  const entryContent = {
    image: {
      about: `Imagespace is a Full Stack Flickr clone with 5 CRUD features built using a React frontend with a Flask backend. Imagespace features an auto-tagging feature by implementing the AI image recognition API Imagga. Users can sign up for accounts, follow and unfollow other users, both like and comment on photos, and upload their own! Imagespace also features a search bar that allows users to search for other users, images, and tags. Users can also edit their own profiles and delete their own images and comments. This website was built with a 'mobile first' approach, and is fully responsive for mobile, tablet, and desktop.`,
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
    ootify: {
      about:
        "After learning about this company I absolutely loved their website design as well as their layout and was determined to replicate it. Originally made in webflow, I decided to recreate it using React, HTML, and CSS. Hosted on vercel, this application features small animations and a beautiful layout. I learned a lot about CSS and how to make a website responsive during this project.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
      ],
      images: [oot1, oot2, oot3, oot4, oot5, oot6],
      githubLink: "https://github.com/Sleightttt/ootify-clone",
      liveLink: "https://ootify-clone.vercel.app/",
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
        "I developed a sophisticated job-seeking app using React Native, featuring a seamless UI for an optimized job search. Utilizing the Axios library and Jsearch API from RapidApi, the app integrates real-time and accurate job data. Prioritizing clean code architecture, I implemented best practices for scalability and performance, employing modularization, code reusability, and responsive design. This project showcases my expertise in software engineering, API integration, and mobile app development, from crafting pixel-perfect UI components to managing asynchronous data fetching and state. ",
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

  const themeFixer = () => {
    let boxStyle = {};
    let textStyle = {};
    let boxShadow = {};
    let fill = {};
    if (activeTheme === "snow") {
      textStyle.color = "#009bef";
      boxShadow.boxShadow = "0px 0px 5px 3px #009bef";

      boxStyle = { background: "linear-gradient(125deg, #19a2eb, #13618c)" };
      fill.fill = "#009bef";
    } else if (activeTheme === "summer") {
      boxStyle = { background: "linear-gradient(125deg, #FFAADA, #F4653E)" };
      textStyle.color = "#F4653E";
      boxShadow.boxShadow = "0px 0px 10px 3px #F4653E";
      fill.fill = "#F4653E";
    } else if (activeTheme === "spring") {
      boxStyle = { background: "linear-gradient(125deg, #E5B700, #F4653E)" };
      textStyle.color = "#E5B700";
      boxShadow.boxShadow = "0px 0px 10px 3px #E5B700";
      fill.fill = "#E5B700";
    } else if (activeTheme === "fall") {
      boxStyle = { background: "linear-gradient(125deg, #FF8235, #CA0000 )" };
      textStyle.color = "#CA0000";
      boxShadow.boxShadow = "0px 0px 10px 5px  #CA0000";
      fill.fill = "#CA0000";
    }
    return { textStyle, boxStyle, boxShadow, fill };
  };

  const { textStyle, boxShadow, fill } = themeFixer();

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

  useEffect(() => {
    const preloadImages = [
      pos1,
      pos2,
      pos3,
      pos4,
      pos5,
      imagespace,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      job1,
      job2,
      job3,
    ];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="projects-cont">
      <div className="project-nav">
        <div
          className={`entry-box entry-box-image ${
            activeEntry === "image" ? "active-entry bounce" : ""
          }`}
          onClick={() => handleEntryClick("image")}
          style={{ ...(activeEntry === "image" ? boxShadow : {}) }}
        >
          <div className="nav-text">
            <span style={{ color: "#06cbfc" }}>Image</span>
            <span style={{ color: "#bb00ff" }}>space</span>
          </div>
        </div>
        <div
          className={`entry-box entry-box-ootify ${
            activeEntry === "ootify" ? "active-entry bounce" : ""
          }`}
          onClick={() => handleEntryClick("ootify")}
          style={{ ...(activeEntry === "ootify" ? boxShadow : {}) }}
        >
          <div className="nav-text">
            <span className="oot" style={{ color: "#005eb5" }}>
              OOTify
            </span>
          </div>
        </div>
        <div
          className={`entry-box entry-box-proof ${
            activeEntry === "proof" ? "active-entry bounce" : ""
          }`}
          onClick={() => handleEntryClick("proof")}
          style={{ ...(activeEntry === "proof" ? boxShadow : {}) }}
        >
          <div className="nav-text">
            <span className="proof" style={{ color: "#e867ff" }}>
              proofofshred
            </span>
          </div>
        </div>
        <div
          className={`entry-box entry-box-job ${
            activeEntry === "job" ? "active-entry bounce" : ""
          }`}
          style={{ ...(activeEntry === "job" ? boxShadow : {}) }}
          onClick={() => handleEntryClick("job")}
        >
          <div className="nav-text">
            <span style={{ color: "#00d0ff" }}>Jobseeker</span>
          </div>
        </div>
      </div>
      <div className="about-box fade-in">
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
              {index === currentImageIndex ? (
                <svg
                  className=" fade-in tracker-diamond"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ ...fill }}
                >
                  <g>
                    <polygon points="256,0 72.115,256 256,512 439.885,256 	" />
                  </g>
                </svg>
              ) : (
                <svg
                  className=" tracker-diamond"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ ...fill }}
                >
                  <g>
                    <path
                      d="M456.225,244.286L270.989,7.314C267.382,2.7,261.857,0,255.999,0c-5.856,0-11.381,2.7-14.989,7.314
		L55.775,244.286c-5.378,6.884-5.378,16.544,0,23.428l185.236,236.972c3.608,4.616,9.132,7.314,14.989,7.314
		c5.858,0,11.383-2.698,14.99-7.314l185.236-236.972C461.603,260.83,461.603,251.17,456.225,244.286z M255.999,477.522L82.84,256
		L255.999,34.478L429.17,256L255.999,477.522z"
                    />
                  </g>
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="git-live">
          <div className="git-live-entry">
            <a
              title="Github Link"
              href={entryContent[activeEntry].githubLink}
              target="_blank"
              rel="noreferrer"
              className="link"
              style={{ ...textStyle }}
            >
              Github Link
              <img alt="git logo" className="git-live-logo" src={icons.logo} />
            </a>
          </div>
          {entryContent[activeEntry].liveLink ? (
            <div className="git-live-entry">
              <a
                rel="noreferrer"
                style={{ ...textStyle }}
                href={entryContent[activeEntry].liveLink}
                target="_blank"
                className="link"
              >
                <div className="link">Live Link</div>
                <img
                  title="Live Link"
                  alt="live logo"
                  className="git-live-logo"
                  src={icons.live}
                />
              </a>
            </div>
          ) : null}
        </div>
        <div className="about-body2">{entryContent[activeEntry].about}</div>
        <div className="tech-cont">
          {entryContent[activeEntry].techIcons.map((icon, index) => (
            <img
              title={`Tech Icon ${index}`}
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
