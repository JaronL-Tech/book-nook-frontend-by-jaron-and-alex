import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Book from "../../components/Book/Book.jsx";

const BookDetailsPage = ({}) => {
  const bookId = "IGvdhaVC5QwC";
  const [user, token] = useAuth();
  console.log(user);

  const fetchBookDetailsDto = async (bookId) => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/bookdetails/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.warn("Error with BookDetailsDto request", error);
    }
  };
  return (
    <div>
      <Book bookId={bookId} />
      <ReviewForm
        fetchBookDetailsDto={fetchBookDetailsDto}
        user={user}
        token={token}
      />
    </div>
  );
};

export default BookDetailsPage;
