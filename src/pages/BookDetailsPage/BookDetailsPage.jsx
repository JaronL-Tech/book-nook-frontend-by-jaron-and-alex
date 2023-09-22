import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Book from "../../components/Book/Book.jsx";
import ReviewList from "../../components/ReviewList/ReviewList";

const BookDetailsPage = ({}) => {
  const [bookdetailsDto, setBookDetailsDto] = useState([]);
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
      setBookDetailsDto = fetchBookDetailsDto();
    } catch (error) {
      console.warn("Error with BookDetailsDto request", error);
    }
  };
  useEffect(() => {
    fetchBookDetailsDto();
  }, []);
  return (
    <div>
      <Book bookId={bookId} />
      <h5>`Average User Rating:${}`</h5>
      <ReviewList BookDetailsDto={bookdetailsDto} bookId={bookId} />
      <ReviewForm
        fetchBookDetailsDto={fetchBookDetailsDto}
        user={user}
        token={token}
      />
    </div>
  );
};

export default BookDetailsPage;
