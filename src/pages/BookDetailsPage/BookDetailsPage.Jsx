import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Book from "../../components/Book/Book.JSX";
import axios from "axios";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const BookDetailsPage = ({}) => {
  return (
    <div>
      {" "}
      <ReviewForm />
      <Book />;
    </div>
  );
};

export default BookDetailsPage;
