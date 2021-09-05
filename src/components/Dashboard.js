import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobData from "../Data/data.json";
import Search from "./Search";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [keywordArray, setKeywordArray] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const addToSearch = (item) => {
    setClicked(true);

    //if the item is already in the array, do nothing
    if (keywordArray.includes(item)) return;

    //correctly adds the text of the thing you clicked to the searchItems array
    // setKeywordArray([...keywordArray].concat(item));

    setKeywordArray((prevState) => [...prevState, item]);

    //item is the text you clicked
    setSearchItem(item);

    //filter the search so certain jobcard can display
    filterSearch();
  };

  //TODO: FIXME
  //Clears search bar
  const closeSearch = () => {
    setClicked(false);
    setKeywordArray([]);
  };

  const filterSearch = () => {
    //we want to filter out the jobs from jobdata
    //if keyword doesnt exist in that job, the job should not be in the new array
    //want to iterate through each object and check if they have any property key from keyword array

    //this kinda works
    // const matchingJobs = JobData.filter(({ role, level, languages, tools }) =>
    //   keywordArray.includes(role, level, languages, tools)
    // );

    //setFilteredData(matchingJobs);
    //console.log(matchingJobs);

    let result = [];

    result = allData.filter((job) => {
      return job.role.search(searchItem) != -1;
    });
    setFilteredData(result);
  };

  //use effect hook
  useEffect(() => {
    setAllData(JobData);
    setFilteredData(JobData);
  }, []);

  const jobs = filteredData.map((job) => (
    <JobCard key={job.id} job={job} clicked={addToSearch} />
  ));

  // const jobItems = JobData.filter((job) => {
  //   //if there is no search input yet
  //   if (keywordArray.length === 0) {
  //     console.log("empty");
  //     return <JobCard key={job.id} job={job} clicked={addToSearch} />;

  //   } else {
  //     filterSearch();
  //     console.log("WE IN HERE");
  //   }
  //   //map the filtered job array
  // }).map((job) => {
  //   return <JobCard key={job.id} job={job} clicked={addToSearch} />;
  // });

  // //overall, I think this is what i want to do
  // if(keywordArray.length === 0) {
  //   return <JobCard key={job.id} job={job} clicked={addToSearch} />;
  // }else {
  //   const jobsss = JobData.map(job => {
  //     //map the filtered jobs
  //     //but we should be able to rerender
  //   })
  // }

  return (
    <div className="job-list">
      {clicked ? <Search close={closeSearch} array={keywordArray} /> : null}

      {/* {jobItems} */}

      {jobs}
    </div>
  );
};

export default Dashboard;
