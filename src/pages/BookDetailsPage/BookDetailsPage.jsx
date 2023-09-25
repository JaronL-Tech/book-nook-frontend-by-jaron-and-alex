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
  const [googleBookDetails, setGoogleBookDetails] = useState();

  const [submitting, setsubmitting] = useState(false);

  useEffect(() => {
    getBookDetails();
  }, [bookId]);
  useEffect(() => {
    fetchGoogleBookDetails();
  }, [bookId]);

  async function getBookDetails() {
    let response = await axios.get(
      `https://localhost:5001/api/bookdetails/eyK309uZ9o8C`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    setBookDetails(response.data);
  }
  const fetchGoogleBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setGoogleBookDetails(response.data);
      console.log(googleBookDetails);
    } catch (error) {
      console.warn("Error in Fetch request", error);
    }
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);
    const formData = {
      BookId: `${bookId}`,
      Title: `${googleBookDetails.volumeInfo.title}`,
      ThumbnailUrl: `${googleBookDetails.volumeInfo.imageLinks.thumbnail}`,
      UserId: `${user.userId}`,
    };

    try {
      {
        const response = await axios.post(
          `https://localhost:5001/api/favorites`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(response);
      }
    } catch (error) {
      console.warn("Error sumbmitting post request");
    }
  };
  return (
    <div>
      {bookDetails ? (
        <div>
          {" "}
          <Book bookId={bookId} />
          <button onClick={handdleSubmit}>Favorite</button>
          <h5>Average User Rating: {bookDetails.averageRating}</h5>
          <ReviewList bookDetails={bookDetails} bookId={bookId} />
          <ReviewForm
            fetchBookDetailsDto={getBookDetails}
            bookDetails={bookDetails}
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
