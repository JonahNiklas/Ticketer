import React from 'react';

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
    </div>
  );
};

export default SearchBar;
