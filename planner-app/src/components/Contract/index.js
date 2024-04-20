import React from "react";
import "./Contract.css";
import { useState } from "react";

const Contract = ({ activeTheme }) => {
  const [activeEntry, setActiveEntry] = useState("life");

  const themeFixer = () => {
    let boxStyle = {};
    let textStyle = {};
    let borderLeft = {};
    if (activeTheme === "snow") {
      textStyle.color = "#009bef";
      borderLeft.border = "4px solid rgb(0, 187, 255)";
      boxStyle = { background: "linear-gradient(125deg, #19a2eb, #13618c)" };
    } else if (activeTheme === "summer") {
      boxStyle = { background: "linear-gradient(125deg, #FFAADA, #F4653E)" };
      textStyle.color = "#F4653E";
      borderLeft.border = "4px solid #F4653E";
    } else if (activeTheme === "spring") {
      boxStyle = { background: "linear-gradient(125deg, #E5B700, #F4653E)" };
      textStyle.color = "#E5B700";
      borderLeft.border = "4px solid #F4653E";
    } else if (activeTheme === "fall") {
      boxStyle = { background: "linear-gradient(125deg, #CA0000, #FF8235)" };
      textStyle.color = "#CA0000";
      borderLeft.border = "4px solid #FF8235";
    }
    return { textStyle, boxStyle, borderLeft };
  };

  const { textStyle, boxStyle, borderLeft } = themeFixer();

  const entryContent = {
    life: {
      title: "Lifescience Media",
      about1:
        "I have been employed by Lifescience Media for many contract's as of date including building mobile applications from the ground up using various technologies such as React Native and Expo GO, interactive maps used as trade shows and conventions using basic HTML and CSS, and interactive games using Unity. The projects themselves are under NDA and this as much information as I can provide on the projects themselves.",
      about2:
        "My time with the company has allowed me to grow exponentiallly as a developer. Cross-functional teams have allowed me to work with other developers, designers, and project managers to create a product that is not only functional but also visually appealing. I have also been able to work with clients to understand their needs and create a product that meets their expectations.",
      about3:
        "Utilizing the Agile methodology, I have been able to work in a fast-paced environment and have been able to adapt to changes in project scope and requirements. This has allowed me to work on multiple projects at once and has allowed me to keep challenging myself to become to best dev I can.",
    },
    big: {
      title: "Big Deal Digital",
      about1:
        "Big Deal Digital is a digital marketing company that specializes in creating tools for SCRUM masters and practitioners of the agile methodology. I was employed by Big Deal Digital to create a chatbot that would help SCRUM masters and practitioners of the agile methodology to better understand the methodology and to help them with any questions they may have. The chatbot was built using React and Redux and was deployed using AWS Amplify.",
      about2:
        "Daily standups and bi-weekly sprints helped me develop a workflow that was necessary for the demanding project. I was able to work with other developers and project managers, as well as the CEO to create a tool that would be benificial to any team that is practicing the agile methodology. The project was a success and is currently being marketed to teams such as Nike. I am proud to have been a part of the project.",
      about3:
        "This project used React and Redux while interfacing with ChatGPT to create a seamless user experience. The project was deployed using AWS Amplify and was built using the Agile methodology. CSS animations and minimal styling were at the heart of the project, focusing on the user experience and the functionality of the chatbot. ",
    },
  };

  const handleClick = (entryKey) => {
    setActiveEntry(entryKey);
  };

  return (
    <div className="contract-cont">
      <div className="contract-nav">
        <div
          className={`entry-box-c ${
            activeEntry === "life" ? "active-entry2" : ""
          }`}
          style={{ ...boxStyle, ...(activeEntry === "life" ? borderLeft : {}) }}
          onClick={() => handleClick("life")}
        >
          Lifescience Media
        </div>
        <div
          className={`entry-box-c ${
            activeEntry === "big" ? "active-entry2" : ""
          }`}
          style={{ ...boxStyle, ...(activeEntry === "big" ? borderLeft : {}) }}
          onClick={() => handleClick("big")}
        >
          Big Deal Digital
        </div>
      </div>
      <div className="contract-body fade-in">
        <div></div>
        <div className="body-title" style={{ ...textStyle }}>
          {entryContent[activeEntry]?.title}
        </div>
        <div className={`body-p`}>{entryContent[activeEntry]?.about1}</div>
        <div className={`body-p`}>{entryContent[activeEntry]?.about2}</div>
        <div className={`body-p`}>{entryContent[activeEntry]?.about3}</div>
      </div>
    </div>
  );
};

export default Contract;
