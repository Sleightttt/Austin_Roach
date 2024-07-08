import React from "react";
import "./Contract.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ContractMain = ({ activeTheme }) => {
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
      borderLeft.border = "4px solid #E5B700";
    } else if (activeTheme === "fall") {
      boxStyle = { background: "linear-gradient(125deg, #CA0000, #FF8235)" };
      textStyle.color = "#CA0000";
      borderLeft.border = "4px solid #FF8235";
    }
    return { textStyle, boxStyle, borderLeft };
  };

  const LifeScienceMedia = () => (
    <>
      <div className="body-title" style={{ ...textStyle }}>
        {Array.from("Lifescience Media").map((letter, index) => (
          <span
            key={index}
            className="fade-in-letter"
            style={{ animationDelay: `${index * 0.1}s`, ...textStyle }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="job-info-cont">
        <div className="job-info-box" style={{ ...boxStyle }}>
          <div className="job-title">
            Software Engineer&nbsp;&nbsp;:&nbsp;&nbsp;
          </div>

          <div className="job-date">August 2023 - Present</div>
        </div>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to={"https://www.lifesciencemedia.com/"}
          className="job-info-box website"
          style={{ ...boxStyle }}
        >
          <div className="job-title ">Website Link</div>
        </NavLink>
      </div>
      <div className="body-p first">
        I have been employed by Lifescience Media for many contract's as of date
        including building{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          mobile applications
        </span>{" "}
        from the ground up using various technologies such as{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          React Native
        </span>{" "}
        and{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Expo GO
        </span>
        , interactive maps used as trade shows and conventions using basic{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          HTML{" "}
        </span>
        and{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          CSS
        </span>
        , and interactive games using{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Unity
        </span>
        . Most of these projects are under NDA, aside from my most recent
        endevour, the mobile companion application for the Teleflex Arrow EZ-IO
        Arrow.
      </div>
      <div className="body-p">
        My time with the company has allowed me to grow exponentiallly as a
        developer.{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Cross-functional
        </span>{" "}
        teams have allowed me to work with other developers, designers, and
        project managers to create a product that is not only functional, but
        also visually appealing. I have also been able to work with clients to
        understand their needs and create a product that meets their
        expectations.
      </div>
      <div className="body-p">
        Utilizing the{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Agile methodology
        </span>
        , I have been able to work in a fast-paced environment and have been
        able to adapt to changes in project scope and requirements. This has
        allowed me to work on multiple projects at once and has allowed me to
        keep challenging myself to become to best dev I can.
      </div>
    </>
  );

  const BigDealDigital = () => (
    <>
      <div className="body-title" style={{ ...textStyle }}>
        {Array.from("Big Deal Digital").map((letter, index) => (
          <span
            key={index}
            className="fade-in-letter"
            style={{ animationDelay: `${index * 0.1}s`, ...textStyle }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="job-info-cont">
        <div className="job-info-box" style={{ ...boxStyle }}>
          <div className="job-title">
            Full Stack SWE&nbsp;&nbsp;:&nbsp;&nbsp;
          </div>

          <div className="job-date"> April 2023 - December 2023</div>
        </div>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to={"https://www.bigdealdigital.com/"}
          className="job-info-box website"
          style={{ ...boxStyle }}
        >
          <div className="job-title ">Website Link</div>
        </NavLink>
      </div>

      <div className="body-p first">
        Big Deal Digital is a digital marketing company that specializes in
        creating tools for SCRUM masters and practitioners of the agile
        methodology. I was employed by Big Deal Digital to create a{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          AI chatbot
        </span>{" "}
        that would help SCRUM masters and practitioners of the agile methodology
        to better understand the methodology and to help them with any questions
        they may have. The chatbot was built using{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          React
        </span>{" "}
        and{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Redux
        </span>{" "}
        and was deployed using{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          AWS Amplify
        </span>{" "}
        .
      </div>
      <div className="body-p">
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Daily standups
        </span>{" "}
        and bi-weekly sprints helped me develop a workflow that was necessary
        for the demanding project. I was able to work with other developers and
        project managers, as well as the CEO to create a tool that would be
        benificial to any team that is practicing the{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          agile methodology
        </span>
        . The project was a success and is currently being marketed to teams
        such as Nike. I am proud to have been a part of the project.
      </div>
      <div className="body-p">
        This project used{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          React
        </span>
        ,{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          HTML
        </span>
        ,{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          CSS
        </span>
        ,{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          MongoDB
        </span>
        ,{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Mongoose
        </span>
        , and{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          Flask
        </span>{" "}
        while interfacing with ChatGPT to create a seamless user experience.{" "}
        <span style={{ color: `${textStyle.color}`, fontWeight: "bold" }}>
          CSS
        </span>{" "}
        animations and minimal styling were at the heart of the project,
        focusing on the user experience and the functionality of the chatbot.
      </div>
    </>
  );

  const { textStyle, boxStyle, borderLeft } = themeFixer();

  const handleClick = (entryKey) => {
    setActiveEntry(entryKey);
  };

  return (
    <div className="contract-cont">
      <div className="contract-nav">
        <div
          className={`entry-box-c ${
            activeEntry === "life" ? "active-entry2 bounce" : ""
          }`}
          style={{ ...boxStyle, ...(activeEntry === "life" ? borderLeft : {}) }}
          onClick={() => handleClick("life")}
        >
          Lifescience Media
        </div>
        <div
          className={`entry-box-c ${
            activeEntry === "big" ? "active-entry2 bounce" : ""
          }`}
          style={{ ...boxStyle, ...(activeEntry === "big" ? borderLeft : {}) }}
          onClick={() => handleClick("big")}
        >
          Big Deal Digital
        </div>
      </div>
      <div className="contract-body fade-in">
        {activeEntry === "life" ? <LifeScienceMedia /> : <BigDealDigital />}
      </div>
    </div>
  );
};

export default ContractMain;
