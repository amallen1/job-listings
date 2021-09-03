import React, { useState } from "react";
import Search from "./Search";

const JobCard = ({ job, clicked }) => {

  const techStack = [job.role, job.level];

  if (job.languages) {
    techStack.push(...job.languages);
  }
  if (job.tools) {
    techStack.push(...job.tools);
  }

  return (
    <div className="job-container">
      <div className="left">
        <div className="logo-div">
          <img className="company-image" src={job.logo} alt="company logo" />
        </div>

        <div className="card-info">
          <div className="card-header">
            <h5 className="company-name">{job.company}</h5>
            <span className="new">{job.new && "NEW!"}</span>
            <span className="featured">{job.featured && "FEATURED"}</span>
          </div>

          <div>
            <p className="job-position">{job.position}</p>
            <ul className="job-info">
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="extra">
      {/* {console.log(techStack)} */}
        {techStack
          ? techStack.map((item,index) => <p key={index} onClick={() => clicked(item)}>{item}</p>)
          : ""}
          
      </div>
    </div>
  );
};

export default JobCard;
