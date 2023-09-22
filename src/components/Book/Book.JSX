import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Book = (bookId) => {
  const [bookdetails, setBookDetails] = useState(null);
  console.log(bookId);
  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      console.log(response);
      setBookDetails(response.data);
      return response.data;
    } catch (error) {
      console.warn("Error with BookDetails request", error);
      setBookDetails(null);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  });
  return (
    <div>
      {bookdetails && (
        <img
          src={bookdetails?.items.volumeInfo.imageLinks.thumbnail}
          alt="book cover"
        />
      )}
      {bookdetails && <h2>{bookdetails?.items.volumeInfo.title}</h2>}
      {bookdetails && <h3>{bookdetails?.items.volumeInfo.authors}</h3>}
      <p></p>
    </div>
  );
};
export default Book;
