import React from "react";
import SearchItem from "./SearchItem";

const Search = ({ close, array, deleteKeyword }) => {
  return (
    <div className="search-bar">
      <div className="items">
        {array.map((item, index) => {
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
        <a className="clear-btn" href="#" onClick={close}>
          Clear
        </a>
      </div>
    </div>
  );
};

export default Search;
