import React, { FormEvent } from 'react';

const SearchBar = (props: { input: (data: any) => void }) => {
  return (
    <div className="input-group w-75" style={{ padding: '2%' }}>
      <input
        type="search"
        className="form-control rounded m-1"
        placeholder="Søk etter lokasjon/arena"
        aria-label="Search"
        aria-describedby="search-addon"
        onInput={props.input}
      />
      {/* <button type="button" className="btn btn-success rounded m-1">
        søk
      </button> */}
    </div>
  );
};

export default SearchBar;
