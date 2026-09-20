import { useState, useEffect } from "react";

const TITLES = [
  "Software Engineer",
  "Full Stack Software Engineer",
  "Front End Engineer",
  "U/X Designer",
  "Mobile Developer",
];

const AboutNav = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
        setFadeIn(true);
      }, 500);
    }, 2000);

    if (initialLoad) {
      setTimeout(() => {
        setInitialLoad(false);
        setFadeIn(true);
      }, 500);
    }

    return () => clearInterval(intervalId);
  }, [initialLoad]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aboutnav-cont">
      <div className={`name-h slide-left ${fadeIn ? "fade-in2" : "fade-out2"}`}>
        Brennan Cota
      </div>
      {windowWidth > 540 ? (
        TITLES.map((title, index) => (
          <div
            key={title}
            style={{ "--i": index }}
            className={`name-h2 stacked ${initialLoad ? "slide-right" : ""} ${
              currentTitleIndex === index ? "" : "hidden"
            } ${fadeIn ? "fade-in2" : "fade-out2"}`}
          >
            {title}
          </div>
        ))
      ) : (
        <div
          className={`name-h2 ${initialLoad ? "slide-right" : ""} ${
            fadeIn ? "fade-in2" : "fade-out2"
          }`}
        >
          {TITLES[currentTitleIndex]}
        </div>
      )}
      <div className="bg-rounded-square"></div>
    </div>
  );
};

export default AboutNav;
