import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group w-75">
      <input type="search" className="form-control rounded m-1" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button type="button" className="btn btn-success rounded m-1">search</button>
    </div>
  );
};

export default SearchBar;
