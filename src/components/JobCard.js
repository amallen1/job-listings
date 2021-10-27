import React from "react";

const JobCard = ({ job, clicked }) => {
  const techStack = [job.role, job.level];

  if (job.languages) {
    techStack.push(...job.languages);
  }
  if (job.tools) {
    techStack.push(...job.tools);
  }

  return (
    <div
      className="job-container"
      style={{
        borderLeft: job.featured && `4px solid hsl(180, 29%, 50%)`,
      }}
    >
      <div className="left">
        <div className="logo-div">
          <img className="company-image" src={job.logo} alt="company logo" />
        </div>

        <div className="card-info">
          <div className="card-header">
            <h5 className="company-name">{job.company}</h5>
            {job.new && <span className="new">NEW</span>}
            {job.featured && <span className="featured">FEATURED</span>}
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
        {techStack
          ? techStack.map((item, index) => (
              <button
                className="keywords"
                key={index}
                onClick={() => clicked(item)}
              >
                {item}
              </button>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobCard;
