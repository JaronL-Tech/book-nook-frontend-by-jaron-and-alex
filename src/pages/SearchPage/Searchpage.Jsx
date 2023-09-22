import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/Searchbar/Searchbar";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = ({ setBook }) => {
  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q="
      );
      return response.data;
    } catch (error) {
      console.warn("Error in Fetch SearchResults request", error);
    }
  };
  return (
    <div>
      <SearchBar setBook={setBook}> </SearchBar>
      <ResultsList />
    </div>
  );
};

export default SearchPage;
