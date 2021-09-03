import React, { useState } from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [keywordArray, setKeywordArray] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  //   useEffect(() => {
  //     addToSearch(searchItem);
  //   }, [keywordArray])

  const addToSearch = (item) => {
    setClicked(true);

    //if the item is already in the array, do nothing
    if (keywordArray.includes(item)) return;

    //correctly adds the text of the thing you clicked to the searchItems array
    // setKeywordArray([...keywordArray].concat(item));

    setKeywordArray((prevState) => [...prevState, item]);

    //item is the text you clicked
    setSearchItem(item);
  };

  const closeSearch = () => {
    setClicked(false);
    setKeywordArray([]);
  };

  const jobs = JobData.map((job) => (
    <JobCard key={job.id} job={job} clicked={addToSearch} />
  ));

  return (
    <div className="job-list">
      {clicked ? <Search close={closeSearch} array={keywordArray} /> : null}

      {jobs}
    </div>
  );
};

export default Dashboard;
