import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const BookDetailsPage = ({ bookId }) => {
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
  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.warn("Error with BookDetails request", error);
    }
  };
  return (
    <div>
      <ReviewForm
        fetchBookDetailsDto={fetchBookDetailsDto}
        user={user}
        token={token}
      />
    </div>
  );
};

export default BookDetailsPage;
