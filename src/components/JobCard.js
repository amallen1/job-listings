import React, { useState } from "react";
import Search from "./Search";

const JobCard = ({ job }) => {
  const [clicked, setClicked] = useState(false);

  const triggerSearch = () => {
    setClicked(!clicked);
  };

  return (
    <div className="job-container">
      <div className="left">
        <div className="logo-div">
          <img className="company-image" src={job.logo} alt="company logo" />
        </div>

        <div className="card-info">
          <div className="card-header">
            <h5 className="company-name">{job.company}</h5>
            <p className="new"> {job.new ? "NEW!" : null}</p>
            <p className="featured"> {job.featured ? "FEATURED" : null}</p>
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
        <p onClick={triggerSearch}>
          {job.role}
          {clicked ? <Search /> : null}
        </p>

        <p onClick={triggerSearch}>
          {job.level}
          {clicked ? <Search /> : null}
        </p>

        {job.languages.map((language, index) => (
          <p key={index} onClick={triggerSearch}>
            {language}
            {clicked ? <Search /> : null}
          </p>
        ))}

        {job.tools.map((tool, index) => (
          <p key={index} onClick={triggerSearch}>
            {tool}
            {clicked ? <Search /> : null}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
