import React from "react";
import SearchItem from "./SearchItem";

const Search = ({ close, searchItem, array }) => {
  return (
    <div className="search-bar">
      <div className="items">
        {array.map((item, index) => {
          return <SearchItem key={index} searchItem={item} />;
          console.log(typeof item);
        })}
      </div>

      <div className="clear">
        <a className="clear-btn" href="#" onClick={close}>
          Clear
        </a>
      </div>
    </div>
  );
};

export default Search;
