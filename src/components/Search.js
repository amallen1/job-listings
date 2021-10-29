import React from "react";
import SearchItem from "./SearchItem";

const Search = ({ close, keywords, deleteKeyword }) => {
  return (
    <div className="search-bar">
      <div className="items">
        {keywords.map((item, index) => {
          return (
            <SearchItem
              key={index}
              searchItem={item}
              deleteKeyword={deleteKeyword}
            />
          );
        })}
      </div>

      <div className="clear">
        <button className="clear-btn" onClick={close}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Search;
