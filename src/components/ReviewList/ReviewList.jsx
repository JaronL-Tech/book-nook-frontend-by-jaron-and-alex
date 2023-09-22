import Review from "../Review/Review";
import axios from "axios";
import { useState } from "react";
import react from "react";

const ReviewList = ({ BookDetailsDto, bookId }) => {
  const listOfReviews = BookDetailsDto.Reviews;
  const Reviews = listOfReviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return <div>{Reviews}</div>;
};

export default ReviewList;
