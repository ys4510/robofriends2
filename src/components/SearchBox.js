import React from "react";

const SearchBox = ({value, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-gray mb3"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
