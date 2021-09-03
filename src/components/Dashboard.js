import React, { useState } from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const addToSearch = (item) => {
    setClicked(true);

    //if the item is already in the array, do nothing
    if (searchItems.includes(item)) return;

    //correctly adds the text of the thing you clicked to the searchItems array
    setSearchItems(searchItems.concat(item));

    //item is the text you clicked
    setSearchItem(item);
  };

  const closeSearch = () => {
    setClicked(false);
    setSearchItems([]);
  };

  const jobs = JobData.map((job) => (
    <JobCard key={job.id} job={job} clicked={addToSearch} />
  ));

  



  return (
    <div className="job-list">
      {clicked ? <Search close={closeSearch} searchItem={searchItem} /> : null}
      {jobs}
    </div>
  );
};

export default Dashboard;
