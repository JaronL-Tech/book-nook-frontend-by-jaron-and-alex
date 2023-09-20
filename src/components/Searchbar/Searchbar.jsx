import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ SetBook }) => {
  const [searchInput, SetSerchInput] = useState("");
  const handlechange = (e) => {
    e.preventDefault(), SetSerchInput(e.target.value);
  };

  // function handlesubmit = (e) => {
  //   e.preventDefault()
  //   filterBooks(searchInput)
  // }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h3>Search Bar</h3>
        <input
          type="Search"
          placeholder="Search Here"
          onChange={handlechange}
          value={searchInput}
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default SearchBar;
