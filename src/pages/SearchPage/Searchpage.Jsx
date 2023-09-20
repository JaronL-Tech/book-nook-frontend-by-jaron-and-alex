import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/Searchbar/Searchbar";
import ReviewList from "../../components/ReviewList/ReviewList";

const SearchPage = ({ setBook }) => {
  return (
    <div>
      <SearchBar setBook={setBook}> </SearchBar>
      <ReviewList> </ReviewList>
    </div>
  );
};

export default SearchPage;
