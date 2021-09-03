import React from "react";

const SearchItem = ({ searchItem }) => {
  return (
    <div className="search-element">
      <span className="keyword">{searchItem}</span>
      <button className="delete-btn"></button>
    </div>
  );
};

export default SearchItem;
