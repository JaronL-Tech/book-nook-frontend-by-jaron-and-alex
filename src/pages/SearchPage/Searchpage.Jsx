import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/Searchbar/Searchbar";
import ReviewList from "../../components/ReviewList/ReviewList";

const SearchPage = ({}) => {
  return (
    <div>
      <SearchBar> </SearchBar>
      <ReviewList> </ReviewList>
    </div>
  );
};

export default SearchPage;
