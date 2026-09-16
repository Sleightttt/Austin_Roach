import React, { useState } from "react";
import "./Contract.css";
import { NavLink } from "react-router-dom";
import { JOBS } from "./contractData";

const JobEntry = ({ job }) => (
  <>
    <div className="body-title">
      {Array.from(job.company).map((letter, index) => (
        <span
          key={index}
          className="fade-in-letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </div>

    <div className="job-info-cont">
      <div className="job-info-box">
        <div className="job-title">{job.roleTitle}&nbsp;&nbsp;:&nbsp;&nbsp;</div>
        <div className="job-date">{job.dateRange}</div>
      </div>
      <NavLink
        target="_blank"
        rel="noopener noreferrer"
        to={job.website}
        className="job-info-box website"
      >
        <div className="job-title">Website Link</div>
      </NavLink>
    </div>

    {job.paragraphs.map((paragraph, index) => (
      <div key={index} className={`body-p ${index === 0 ? "first" : ""}`}>
        {paragraph}
      </div>
    ))}
  </>
);

const ContractMain = () => {
  const [activeEntry, setActiveEntry] = useState(JOBS[0].key);
  const activeJob = JOBS.find((job) => job.key === activeEntry);

  return (
    <div className="contract-cont page-panel">
      <div className="contract-nav">
        {JOBS.map((job) => (
          <div
            key={job.key}
            className={`entry-box-c ${
              activeEntry === job.key ? "active-entry2 bounce" : ""
            }`}
            onClick={() => setActiveEntry(job.key)}
          >
            {job.company}
          </div>
        ))}
      </div>
      <div className="contract-body fade-in">
        <JobEntry job={activeJob} />
      </div>
    </div>
  );
};

export default ContractMain;
