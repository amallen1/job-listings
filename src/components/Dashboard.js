import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const [keywordArray, setKeywordArray] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(JobData);
  }, []);

  const filterSearch = ({ role, level, languages, tools }) => {
    if (keywordArray.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return keywordArray.every((item) => tags.includes(item));
  };

  const addToSearch = (item) => {
    if (keywordArray.includes(item)) return;
    setKeywordArray((prevState) => [...prevState, item]);
  };

  const deleteFromSearch = (item) => {
    const updatedKeywords = keywordArray.filter((word) => word !== item);
    setKeywordArray(updatedKeywords);
  };

  const closeSearch = () => {
    setKeywordArray([]);
  };

  const filteredJobs = jobs.filter((job) => filterSearch(job));

  const jobList = filteredJobs.map((job) => (
    <JobCard key={job.id} job={job} startSearch={addToSearch} />
  ));

  return (
    <div className="job-list">
      {keywordArray.length > 0 ? (
        <Search
          close={closeSearch}
          keywords={keywordArray}
          deleteKeyword={deleteFromSearch}
        />
      ) : null}

      {jobList}
    </div>
  );
};

export default Dashboard;
