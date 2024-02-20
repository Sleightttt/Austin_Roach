import { useState, useEffect } from "react";

const AboutNav = () => {
  const titles = [
    "Software Engineer",
    "Full Stack Software Engineer",
    "Front End Engineer",
    "U/X Designer",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // Initially set to false

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFadeIn(true); // Start fading in with the new title
      }, 500); // Wait for 500ms before changing the title
    }, 3000); // Change the title every 3 seconds (3000 milliseconds)

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <div className="aboutnav-cont">
      <h1 className={`name-h slide-right ${fadeIn ? "fade-in" : "fade-out"}`}>
        Brennan Cota
      </h1>
      <h1 className={`name-h ${fadeIn ? "fade-in" : "fade-out"}`}>
        {titles[currentTitleIndex]}
      </h1>
    </div>
  );
};

export default AboutNav;
