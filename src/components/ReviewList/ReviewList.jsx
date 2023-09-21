import Review from "../Review/Review";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const ReviewList = ({}) => {
  const Books = [FetchBooks];
  const reviewItems = reviews.map((review) => <Review />);
  return (
    <div className="flex-item">
      <h4>My Reviews</h4>
      <div>{Review}</div>
    </div>
  );
};

export default ReviewList;
