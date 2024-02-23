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
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFadeIn(true); // Start fading in with the new title
      }, 500); // Wait for 500ms before changing the title
    }, 4000); // Change the title every 3 seconds (3000 milliseconds)

    // Disable initial sliding animation after the first load
    if (initialLoad) {
      setTimeout(() => {
        setInitialLoad(false);
        setFadeIn(true); // Start fading in the first title after sliding animation
      }, 1000); // Adjust this timeout to match the sliding animation duration
    }

    return () => clearInterval(intervalId); // Clean up the interval
  }, [initialLoad]);

  return (
    <div className="aboutnav-cont">
      <h1 className={`name-h slide-left ${fadeIn ? "fade-in" : "fade-out"}`}>
        Brennan Cota
      </h1>
      <h1
        className={`name-h2 ${initialLoad ? "slide-right" : ""} ${
          fadeIn ? "fade-in" : "fade-out"
        }`}
      >
        {titles[currentTitleIndex]}
      </h1>
    </div>
  );
};

export default AboutNav;
