import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [keywordArray, setKeywordArray] = useState([]); //not sure if this is necessary

  //const [searchItem, setSearchItem] = useState(""); //not sure if this is necessary

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

    //tags puts all the values that we are looking for in one array
    // console.log(tags)

    //tag is a sting

    //tags.find(tag => )

    return keywordArray.every((item) => tags.includes(item));
  };

  const filteredJobs = jobs.filter((job) => filterSearch(job));

  //add a keyword to the search bar
  const addToSearch = (item) => {
    setClicked(true);

    //if the item is already in the array, do nothing
    if (keywordArray.includes(item)) return;

    setKeywordArray((prevState) => [...prevState, item]);

    //item is the text you clicked
    //setSearchItem(item);
  };

  const deleteFromSearch = (item) => {
    const updatedKeywords = keywordArray.filter((word) => word !== item);
    setKeywordArray(updatedKeywords);
    console.log("HELLO");
  };

  //Removes search bar and clears keyword array
  const closeSearch = () => {
    setClicked(false);
    setKeywordArray([]);
  };

  const jobList = filteredJobs.map((job) => (
    <JobCard key={job.id} job={job} clicked={addToSearch} />
  ));

  return (
    <div className="job-list">
      {clicked && keywordArray.length > 0 ? (
        <Search
          close={closeSearch}
          array={keywordArray}
          deleteKeyword={deleteFromSearch}
        />
      ) : null}

      {jobList}
    </div>
  );
};

export default Dashboard;
