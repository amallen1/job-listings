import React from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const jobs = JobData.map((job) => <JobCard key={job.id} job={job}  />);
  return (
    <div className="job-list">
        <Search />
        {jobs}
    </div>
  ) 
  
};

export default Dashboard;
