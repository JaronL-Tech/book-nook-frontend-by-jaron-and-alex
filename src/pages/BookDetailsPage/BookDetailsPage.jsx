import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Book from "../../components/Book/Book.jsx";
import ReviewList from "../../components/ReviewList/ReviewList";
import { useParams } from "react-router-dom";

const BookDetailsPage = ({}) => {
  const { bookId } = useParams();
  const [user, token] = useAuth();
  const [bookDetails, setBookDetails] = useState();
  console.log(bookDetails);

  useEffect(() => {
    getBookDetails();
  }, [bookId]);

  async function getBookDetails() {
    let response = await axios.get(
      `https://localhost:5001/api/bookdetails/vnbgDwAAQBAJ`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    setBookDetails(response.data);
  }

  return (
    <div>
      {bookDetails ? (
        <div>
          {" "}
          <Book bookId={bookId} />
          <h5>Average User Rating: {bookDetails.averageRating}</h5>
          <ReviewList BookDetailsDto={bookDetails} bookId={bookId} />
          <ReviewForm
            fetchBookDetailsDto={getBookDetails}
            user={user}
            token={token}
            s
          />
        </div>
      ) : null}
    </div>
  );
};

export default BookDetailsPage;
