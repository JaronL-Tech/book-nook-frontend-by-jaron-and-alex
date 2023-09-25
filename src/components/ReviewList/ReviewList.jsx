import Review from "../Review/Review";
import axios from "axios";
import { useState } from "react";
import react from "react";

const ReviewList = ({ BookDetailsDto }) => {
  const listOfReviews = BookDetailsDto.Reviews;
  const Reviews = listOfReviews.map((review) => (
    <Review
      key={review.id}
      username={review.userForDisplayDto.username}
      text={review.text}
      rating={review.rating}
    />
  ));

  return <div>{Reviews}</div>;
};

export default ReviewList;
