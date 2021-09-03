import React from "react";

const Search = ({ close, searchItem }) => {
  return (
    <div className="search-bar">

      <div className="search-element">
        <span className="keyword">{searchItem}</span>
        <button className="delete-btn">
          <img className="remove-icon" src="../images/icon-remove.svg" alt="" />
        </button>
      </div>

      {/* add categories */}
      <a className="clear-btn" href="#" onClick={close}>
        Clear
      </a>
    </div>
  );
};

export default Search;
