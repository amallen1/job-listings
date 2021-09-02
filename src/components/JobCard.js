import React from "react";

const JobCard = ({ job }) => {
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
        <p>{job.role}</p>
        <p>{job.level}</p>

        {job.languages.map((language, index) => (
          <p key={index}>{language} </p>
        ))}

        {job.tools.map((tool, index) => (
          <p key={index}>{tool}</p>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
