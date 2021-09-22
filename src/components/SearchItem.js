import React from "react";

const SearchItem = ({ searchItem, deleteKeyword }) => {
  return (
    <div className="search-element">
      <span className="keyword">{searchItem}</span>
      <button className="delete-btn" onClick={() => deleteKeyword(searchItem)}></button>
    </div>
  );
};

export default SearchItem;
