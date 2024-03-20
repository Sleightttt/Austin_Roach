import { useState, useEffect } from "react";

const AboutNav = ({ activeTheme }) => {
  const titles = [
    "Software Engineer",
    "Full Stack Software Engineer",
    "Front End Engineer",
    "U/X Designer",
    "Mobile Developer",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
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

  const themeFixer = () => {
    let boxStyle = {};
    let textStyle = {};
    if (activeTheme === "snow") {
      textStyle.color = "#009bef";
      boxStyle = { background: "linear-gradient(125deg, #19a2eb, #13618c)" };
    } else if (activeTheme === "summer") {
      boxStyle = { background: "linear-gradient(125deg, #FFAADA, #F4653E)" };
      textStyle.color = "#F4653E";
    } else if (activeTheme === "spring") {
      boxStyle = { background: "linear-gradient(125deg, #C9A100, #F4653E)" };
      textStyle.color = "#C9A100";
    } else if (activeTheme === "fall") {
      boxStyle = { background: "linear-gradient(125deg, #CA0000, #F4653E)" };
      textStyle.color = "#F4653E";
    }
    return { textStyle, boxStyle };
  };

  const { textStyle, boxStyle } = themeFixer();

  return (
    <div className="aboutnav-cont">
      <div className={`name-h slide-left ${fadeIn ? "fade-in" : "fade-out"}`}>
        Brennan Cota
      </div>
      <div
        className={`name-h2 ${initialLoad ? "slide-right" : ""} ${
          fadeIn ? "fade-in" : "fade-out"
        }`}
        style={{ ...textStyle }}
      >
        {titles[currentTitleIndex]}
      </div>
      <div className="bg-rounded-square" style={{ ...boxStyle }}></div>
    </div>
  );
};

export default AboutNav;
