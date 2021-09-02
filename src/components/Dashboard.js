import React from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";

const Dashboard = () => {
  const jobs = JobData.map((job) => <JobCard key={job.id} job={job} />);
  return <div className="job-list">{jobs}</div>;
};

export default Dashboard;
