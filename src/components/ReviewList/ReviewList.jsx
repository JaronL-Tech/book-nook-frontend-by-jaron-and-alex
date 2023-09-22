import Review from "../Review/Review";
import axios from "axios";
import { useState } from "react";
import react from "react";

const ReviewList = ({ fetchBookDetailsDto, bookId }) => {
  const responseData = fetchBookDetailsDto(bookId);
  const listOfReviews = responseData.Reviews;
  const Reviews = listOfReviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return <div />;
};

export default ReviewList;
